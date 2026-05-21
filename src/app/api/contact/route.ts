import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { user_name, user_email, message } = await req.json();

    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .content {
              background: #f8fafc;
              padding: 30px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .info-row {
              background: white;
              padding: 15px;
              margin: 10px 0;
              border-radius: 8px;
              border-left: 4px solid #06b6d4;
            }
            .label {
              color: #64748b;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              color: #0f172a;
              font-size: 16px;
              font-weight: 500;
            }
            .message-box {
              background: white;
              padding: 20px;
              margin: 20px 0;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              background: #f1f5f9;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #64748b;
              border-radius: 0 0 10px 10px;
            }
            .email-link {
              color: #06b6d4;
              text-decoration: none;
              font-weight: 500;
            }
            .email-link:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Portfolio Contact</h1>
          </div>
          
          <div class="content">
            <div class="info-row">
              <div class="label">From</div>
              <div class="value">${user_name}</div>
            </div>
            
            <div class="info-row">
              <div class="label">Email Address</div>
              <div class="value">
                <a href="mailto:${user_email}" class="email-link">${user_email}</a>
              </div>
            </div>
            
            <div class="label" style="margin: 20px 0 10px 0;">Message</div>
            <div class="message-box">${message}</div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">
              This message was sent via your portfolio contact form<br>
              <span style="color: #94a3b8;">Received on ${new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}</span>
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: user_email,
      subject: `💼 New Portfolio Message from ${user_name}`,
      html: htmlContent,
      text: `New message from ${user_name} (${user_email})\n\n${message}`,
    });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}