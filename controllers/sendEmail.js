import nodemailer from "nodemailer";

export const sendingEmail = (req, res) => {
//    try{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "pengirimpesan17@gmail.com",
            pass: "hayolo123"
        }
    });

    const mailData = {
        from: "pengirimpesan17@gmail.com",
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text  
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });       
}