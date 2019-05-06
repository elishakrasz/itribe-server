import * as sgMail from "@sendgrid/mail";
sgMail.setApiKey();

export const sendEmail = async (recipient: string, url: string) => {
  const msg = {
    to: recipient,

    from: "itexigent@gmail.com",

    subject: "iTribe Confirmation Email",

    text: "The growing movement of Lost Israelites returning home",

    html: `<a href="${url}">confirm email</a>`
  };

  sgMail.send(msg);

  console.log(msg);
};
