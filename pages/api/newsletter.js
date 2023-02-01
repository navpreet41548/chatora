import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { email } = req.body;
    console.log(email);

    //Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: "navwebdev2@gmail.com",
      to: "navwebdev2@gmail.com",
      subject: `New Email Added to list`,
      text: ` 
        Email:${email}
         `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(400).json({ err: error, message: "Email Not Saved" });
      } else {
        console.log("Email sent: " + info.response);
        res
          .status(200)
          .json({ err: null, message: "Email Saved Successfully" });
      }
    });
  } catch (err) {
    res.status(400).json({ message: "Something Went Wrong", err: err.message });
  }
}
