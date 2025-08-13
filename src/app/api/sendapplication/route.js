import nodemailer from 'nodemailer';

export async function POST(request){
    try {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const nrc = formData.get("nrc");
        const cv = formData.get("cv");


        //convert PDF to Buffer
        let attachment = null;
        if (cv) {
            const buffer = Buffer.from(await cv.arrayBuffer());
            attachment = {
                filename: cv.name,
                content: buffer,
                contentType: cv.type
            };
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, 
                pass: process.env.GMAIL_APP_PASSWORD,
            },            
        });

        //email options
        const mailOptions = {
        from: {
            name: 'Maka Energies Career Application System',
            address: process.env.GMAIL_USER
        },
        to: process.env.RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Career Application`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1a2332; color: #f8f9fb; padding: 25px; text-align: center;">
                <h2 style="color: #f8f9fb; margin: 0; font-size: 24px;">
                New Career Application
                </h2>
                <div style="width: 60px; height: 3px; background-color: #ff6b35; margin: 10px auto 0;"></div>
            </div>
            
            <div style="background-color: #f8f9fb; padding: 25px; border-left: 4px solid #ff6b35;">
                <h3 style="color: #1a2332; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Applicant Information</h3>
                <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Name:</strong> ${name}</p>
                <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Email:</strong> ${email}</p>
                <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">Phone:</strong> ${phone}</p>
                <p style="color: #1a2332; margin: 8px 0;"><strong style="color: #ff6b35;">NRC:</strong> ${nrc}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border-left: 4px solid #1a2332;">
                <h3 style="color: #1a2332; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Attached CV</h3>
                <p style="color: #1a2332; margin: 8px 0;">A CV has been attached to this email for review.</p>
            </div>
            
            <div style="background-color: #1a2332; color: #f8f9fb; padding: 20px; text-align: center;">
                <div style="border-top: 1px solid #ff6b35; padding-top: 15px; font-size: 12px; opacity: 0.9;">
                <p style="margin: 5px 0;">This email was sent from the Maka Energies career application form.</p>
                <p style="margin: 5px 0;">Reply directly to this email to contact the applicant.</p>
                </div>
            </div>
            </div>
        `,
        attachments: attachment ? [attachment] : []
        };


    await transporter.sendMail(mailOptions);

    return new Response(
        JSON.stringify({success: true}),
        {status:200,headers:{"Content-Type": "application/json"}}
    );

    } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
    }
}