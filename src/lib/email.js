import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async () => {
  const msg = {
    to: "sam559709@gmail.com",
    from: "sarath559709@gmail.com",
    subject: "test",
    html: "<strong> This is a test  </strong>",
  };
  await sgMail.send(msg);
};
