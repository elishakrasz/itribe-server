// import * as SparkPost from "sparkpost";
// const client = new SparkPost(process.env.SPARKPOST_API_KEY);

// export const sendEmail = async (recipient: string, url: string) => {
//   const response = await client.transmissions.send({
//     options: {
//       sandbox: true
//     },
//     content: {
//       from: "testing@sparkpostbox.com",
//       subject: "Confirm Email",
//       html: `<html>
//         <body>
//         <p>Testing SparkPost - the world's most awesomest email service!</p>
//         <a href="${url}">confirm email</a>
//         </body>
//         </html>`
//     },
//     recipients: [{ address: recipient }]
//   });
//   console.log(response);
// };

import * as sgMail from "@sendgrid/mail";
sgMail.setApiKey('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');

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
