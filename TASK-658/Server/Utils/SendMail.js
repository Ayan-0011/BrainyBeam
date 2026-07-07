const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ayanansari9235@gmail.com",
    pass: "bwvwxuhrhbgfcikf",
  },
});

const sendMail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset OTP",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.1);">

<tr>
<td style="background:#4F46E5;padding:25px;text-align:center;">
<h1 style="color:#fff;margin:0;">🔐 Password Reset</h1>
</td>
</tr>

<tr>
<td style="padding:35px;">

<h2 style="margin-top:0;color:#222;">
Hello,
</h2>

<p style="color:#555;font-size:16px;line-height:1.7;">
We received a request to reset your password.
Use the OTP below to continue.
</p>

<div style="margin:35px 0;text-align:center;">
<span style="
display:inline-block;
padding:15px 35px;
font-size:32px;
font-weight:bold;
letter-spacing:8px;
background:#EEF2FF;
color:#4F46E5;
border-radius:10px;">
${otp}
</span>
</div>

<p style="color:#666;font-size:15px;">
⏰ This OTP will expire in <strong>5 minutes</strong>.
</p>

<p style="color:#666;font-size:15px;">
If you didn't request a password reset, you can safely ignore this email.
</p>

<hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

<p style="font-size:13px;color:#999;text-align:center;">
This is an automated email. Please do not reply.
</p>

</td>
</tr>

<tr>
<td style="background:#F9FAFB;padding:20px;text-align:center;font-size:13px;color:#888;">
© 2026 Your Company. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`
  });
};

module.exports = sendMail;