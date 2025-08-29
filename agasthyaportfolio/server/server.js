const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests from this IP'
});
app.use('/api/contact', limiter);

app.use(express.json({ limit: '10kb' }));

// Contact form endpoint
app.post('/api/contact', [
  body('name').trim().isLength({ min: 2, max: 50 }),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 10, max: 1000 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, message } = req.body;

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    // Send notification email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>I've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Agasthya R Kumar</p>
      `
    });

    res.json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
