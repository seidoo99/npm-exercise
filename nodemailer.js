const nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "seidoo99@gmail.com", // sender address
        to: "seidoo99@gmail.com", // list of receivers
        subject: "email trial", // Subject line
        text: "what is this ?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
main().catch(console.error);