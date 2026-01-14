import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, phone, subject, message } = body;

        // Basic server-side validation
        if (!fullName || !email || !phone || !subject || !message) {
            return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });


        const toEmail = process.env.CONTACT_TO_EMAIL;

        const mailOptions = {
            from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
            to: toEmail,
            replyTo: email, // so you can hit "Reply" and it replies to the user
            subject: `New Contact Form: ${subject}`,
            text: `
New message from your website contact form:

Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Interested In: ${subject}

Message:
${message}
      `,
            html: `
        <h2>New message from your website</h2>
        <p><b>Full Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Interested In:</b> ${subject}</p>
        <p><b>Message:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
     } catch (err) {
  console.error("CONTACT_API_ERROR FULL:", err);

  return new Response(
    JSON.stringify({
      ok: false,
      error: err?.message || String(err),
      code: err?.code || null,
      response: err?.response || null,
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

    

}