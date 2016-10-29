/**
 * Created by Administrator on 2016/10/26.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://1293580602@qq.com:dihpepdwtahlgefh@smtp.qq.com');
var mailOptions = {
    from: '1293580602@qq.com', // 发送者邮箱
    to: '278224975@qq.com', // 接收者邮箱
    subject: 'Blog注册校验码', // Subject line
    text: '267498', // plaintext body
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});