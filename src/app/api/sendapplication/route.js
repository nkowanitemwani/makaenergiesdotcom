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
        })

    } catch (error) {
        
    }
}