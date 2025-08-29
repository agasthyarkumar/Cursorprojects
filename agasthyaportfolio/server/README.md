# Portfolio Contact Server

A secure backend server for handling contact form submissions from your portfolio website.

## Features

- ✅ Secure contact form handling
- ✅ Email notifications (to you)
- ✅ Auto-reply to users
- ✅ Rate limiting protection
- ✅ Input validation
- ✅ CORS configuration
- ✅ Security headers
- ✅ Health check endpoint

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` with your email credentials:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
```

### 3. Gmail App Password Setup

For Gmail, you'll need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Create an App Password for "Mail"
4. Use this password in your `.env` file

### 4. Run the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello! I'd like to discuss a project."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! Check your email for confirmation."
}
```

### GET /api/health
Health check endpoint.

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Security headers (Helmet)
- Request size limits

## Email Templates

The server sends two emails:
1. **Notification email** to you with the contact form details
2. **Auto-reply email** to the user confirming their message was received

## Troubleshooting

### Common Issues

1. **Email not sending**: Check your email credentials and app password
2. **CORS errors**: Verify FRONTEND_URL in your .env file
3. **Rate limiting**: Wait 15 minutes before submitting again

### Logs

Check the console output for detailed error messages and debugging information.

## Deployment

This server can be deployed to:
- Heroku
- Vercel
- Railway
- DigitalOcean
- AWS

Remember to set environment variables in your deployment platform.
