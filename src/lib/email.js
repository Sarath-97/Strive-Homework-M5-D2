import sgMail from "@sendgrid/mail";

console.log(process.env);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (recipient) => {
  const msg = {
    to: recipient,
    from: "sarath559709@gmail.com",
    subject: "test",
    html: "<strong> This is a test  </strong>",
  };
  await sgMail.send(msg);
};
