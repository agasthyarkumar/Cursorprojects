# 🚀 Portfolio Contact Server Setup Guide

## Overview
This guide will help you set up a secure backend server for your portfolio contact form that can send emails and handle form submissions properly.

## 🏗️ What We've Built

### Backend Server (`/server` folder)
- **Express.js server** with security features
- **Email functionality** using Nodemailer
- **Rate limiting** to prevent spam
- **Input validation** and sanitization
- **CORS configuration** for frontend integration
- **Health check endpoint**

### Updated Frontend
- **Modified Contact component** to use real server
- **Error handling** and user feedback
- **Proper form submission** to backend API

## 📋 Prerequisites

1. **Node.js** (version 14 or higher)
2. **Gmail account** (or other email provider)
3. **App password** for your email account

## 🚀 Quick Setup

### Step 1: Install Server Dependencies
```bash
cd server
npm install
```

### Step 2: Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file with your email credentials:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
```

### Step 3: Get Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Create an **App Password** for "Mail"
4. Use this password in your `.env` file

### Step 4: Start the Server
```bash
# Development mode (auto-restart)
npm run dev

# Production mode
npm start
```

### Step 5: Test the Setup
1. Start your React portfolio: `npm start` (in main directory)
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for notifications

## 🔧 Configuration Options

### Email Services Supported
- **Gmail** (recommended for beginners)
- **Outlook/Hotmail**
- **Custom SMTP servers**

### Environment Variables
```env
# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Email (Gmail example)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password

# Custom SMTP (alternative)
# EMAIL_SERVICE=custom
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
```

## 🧪 Testing

### Test Health Endpoint
```bash
curl http://localhost:5000/api/health
```

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Hello! This is a test message."
  }'
```

## 🚀 Deployment

### Option 1: Heroku
1. Install Heroku CLI
2. Create new Heroku app
3. Set environment variables in Heroku dashboard
4. Deploy: `git push heroku main`

### Option 2: Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Option 3: Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

## 🔒 Security Features

- ✅ **Rate limiting**: 5 requests per 15 minutes per IP
- ✅ **Input validation**: Name, email, and message validation
- ✅ **CORS protection**: Only allows requests from your frontend
- ✅ **Security headers**: Helmet.js for additional security
- ✅ **Request size limits**: Prevents large payload attacks

## 📧 Email Features

- **Notification email** sent to you with contact details
- **Auto-reply email** sent to the user confirming receipt
- **Professional HTML templates** for both emails
- **Reply-to header** so you can reply directly to users

## 🐛 Troubleshooting

### Common Issues

1. **"Email not sending"**
   - Check your email credentials
   - Verify app password is correct
   - Ensure 2FA is enabled on your Google account

2. **"CORS error"**
   - Verify FRONTEND_URL in .env file
   - Check if frontend is running on correct port

3. **"Rate limit exceeded"**
   - Wait 15 minutes before trying again
   - This is a security feature to prevent spam

4. **"Validation failed"**
   - Check input requirements:
     - Name: 2-50 characters, letters only
     - Email: Valid email format
     - Message: 10-1000 characters

### Debug Mode
Check server console for detailed error messages and logs.

## 📱 Frontend Integration

The Contact component has been updated to:
- Send real HTTP requests to your server
- Handle success and error states
- Show appropriate user feedback
- Clear form after successful submission

## 🎯 Next Steps

1. **Customize email templates** in `server.js`
2. **Add database storage** for contact submissions
3. **Implement email notifications** to other platforms (Slack, Discord)
4. **Add analytics** to track form submissions
5. **Deploy to production** environment

## 📞 Support

If you encounter issues:
1. Check the server console for error messages
2. Verify all environment variables are set correctly
3. Test the health endpoint first
4. Check your email provider's security settings

---

**Happy coding! 🎉**
