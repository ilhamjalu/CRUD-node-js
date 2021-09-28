import express from "express";
//import Email from "../controller/sendEmail.js";
import{
    getAccount,
    getAccountById,
    createAccount,
    updateAccount,
    deleteAccount
} from "../controllers/Account.js";
import{
    sendingEmail
} from "../controllers/sendEmail.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.get('/accounts', getAccount);
router.get('/accounts/:id', getAccountById);
router.post('/account', createAccount);
router.put('/account/:id', updateAccount);
router.delete('/account', deleteAccount);
router.post('/email', sendingEmail);
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth:{
//         user: "pengirimpesan17@gmail.com",
//         pass: "hayolo123"
//     }
// });
// router.post('/email', (req, res) => {
//     const {to, subject, text } = req.body;
//     const mailData = {
//         from: 'youremail@gmail.com',
//         to: to,
//         subject: subject,
//         text: text,
//         html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
//     };

//     transporter.sendMail(mailData, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         res.status(200).send({ message: "Mail send", message_id: info.messageId });
//     });
// });
export default router;