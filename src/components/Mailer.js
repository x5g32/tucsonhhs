import nodemailer from 'nodemailer'

const Mailer = (props) => {

    let transporter = nodemailer.createTransport({
        host: "mail.tucsonhhs.com",
        port: 587,
        secure: false,
        auth: {
            user: "_mainaccount@tucsonhhs.com",
            pass: EFwE*rGZTJLEmpexI7
        }
    });

    let mailOptions = {
        from: '<no-reply@tucsonhhs.com>',
        to: '<no-reply@tucsonhhs.com>',
        subject: 'New message',
        text: 'Message: '+props.message
    };

    let mail = transporter.sendMail(mailOptions)

    return (
        {mail}
    )
}

export default Mailer