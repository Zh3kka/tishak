import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'zheseleznev@gmail.com',
            pass: 'BpzpP3Ss3Ss3456654789987',
        },
    });

    const mailOptions = {
        from: email,
        to: 'zheseleznev@gmail.com',
        subject: `${name} - ${email}`,
        text: `Subject: ${subject}\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
    }
}
