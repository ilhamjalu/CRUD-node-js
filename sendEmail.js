import nodemailer from "nodemailer";

async function main(){
    let test = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "pengirimpesan17@gmail.com",
            pass: "hayolo123"
        }
    });

    let info = await transporter.sendMail({
        from: "pengirimpesan17@gmail.com",
        to: "ilham.jalu00@gmail.com",
        subject: "HELLO",
        text: "TEST SEND MESSAGE"
    });

    console.log("Message Send: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);