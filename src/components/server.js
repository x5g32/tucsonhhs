"use strict";

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "mail.tucsonhhs.com",
    port: 587,
    secure: false,
    auth: {
        user: "no-reply@tucsonhhs.com",
        pass: "noreply"
    }
});