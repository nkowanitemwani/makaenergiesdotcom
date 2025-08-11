import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: {
        name: 'Maka Energies Quote System',
        address: process.env.GMAIL_USER
      },
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request - ${service}`,
      html:`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1a2332; color: #f8f9fb; padding: 25px; text-align: center;">
            <h2 style="color: #f8f9fb; margin: 0; font-size: 24px;">
              New Quote Request
            </h2>
            <div style="width: 60px; height: 3px; background-color: #ff6b35; margin: 10px auto 0;"></div>
          </div>
          
          <div style="background-color: #f8f9fb; padding: 25px; border-left: 4px solid #ff6b35;">
            <h3 style="color: #1a2332; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Contact Information</h3>
            <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Name:</strong> ${name}</p>
            <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Email:</strong> ${email}</p>
            <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Phone:</strong> ${phone}</p>
            <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border-left: 4px solid #1a2332;">
            <h3 style="color: #1a2332; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Service Details</h3>
            <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Requested Service:</strong> ${service}</p>
          </div>
          
          <div style="background-color: #f8f9fb; padding: 25px; border-left: 4px solid #ff6b35;">
            <h3 style="color: #1a2332; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Project Description</h3>
            <p style="white-space: pre-wrap; color: #1a2332; line-height: 1.6; margin: 8px 0;">${message}</p>
          </div>
          
          <div style="background-color: #1a2332; color: #f8f9fb; padding: 20px; text-align: center;">
            <div style="border-top: 1px solid #ff6b35; padding-top: 15px; font-size: 12px; opacity: 0.9;">
              <p style="margin: 5px 0;">This email was sent from the Maka Energies website quote form.</p>
              <p style="margin: 5px 0;">Reply directly to this email to respond to the customer.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}