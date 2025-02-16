import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // Настройка транспортера для Gmail
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GOOGLE_USER_EMAIL,
      pass: process.env.GOOGLE_USER_EMAIL_PASSWORD,
    },
  });

  // Шаблон HTML для письма
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GOOGLE_USER_EMAIL, // Получатель
    subject: `${name} - ${subject}`, // Тема письма
    text: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`, // Текстовая версия (для клиентов без поддержки HTML)
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9; /* Светло-серый фон */
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff; /* Белый фон контейнера */
            border: 1px solid #dddddd; /* Серая граница */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Легкая тень */
          }
          .header {
            background-color: #333333; /* Темно-серый фон заголовка */
            color: #ffffff; /* Белый текст */
            text-align: center;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            padding: 20px;
            color: #333333; /* Темно-серый текст */
          }
          .footer {
            background-color: #333333; /* Темно-серый фон футера */
            color: #ffffff; /* Белый текст */
            text-align: center;
            padding: 10px;
            font-size: 14px;
          }
          hr {
            border: none;
            border-top: 1px solid #cccccc; /* Светло-серая линия */
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">New Message from ${name}</div>
          <div class="content">
            <p><strong>Sender:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p style="font-size: 16px; line-height: 1.6;">${message}</p>
          </div>
          <div class="footer">
            This is an automated notification. Please do not reply to this email.
          </div>
        </div>
      </body>
      </html>
    `, // HTML-версия письма
  };

  try {
    // Отправка письма
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: String(error) }),
      { status: 500 }
    );
  }
}
