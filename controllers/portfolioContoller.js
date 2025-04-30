const sgMail = require('@sendgrid/mail');

// Set API key
sgMail.setApiKey(process.env.API_SENDGRID);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const message = {
      to: "typeyouremailadresshere@gmail.com", // receiver email
      from: "kamlakantpatel1754@gmail.com", // ✅ must be verified in SendGrid
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    };

    await sgMail.send(message);

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.error(error.response?.body || error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
