import { FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaSkype,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./contact.css";
import { Form, Formik } from "formik";
import Input from "../../components/Input";
import { contactSchema } from "../../data";
import CustomTextarea from "../../components/CustomTextarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (values, actions) => {
    console.log(actions);
    console.log(values);
    emailjs
      .sendForm(
        "service_kikq189",
        "template_di9eqdi",
        form.current,
        "VbJx6VcGxjqJSAUYl"
      )
      .then(
        (result) => {
          notify("Message sent Successfully! 👍");
          actions.resetForm();
          actions.setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Let's connect 😊!</h3>

          <p className="contact_desc">
            feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelope className="info_icon" />

              <span className="info_title">Mail me</span>
              <h4 className="info_desc">Jonah.wakahiumaina@gmail.com</h4>
            </div>
            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />

              <span className="info_title">Call me</span>
              <h4 className="info_desc">0796893524</h4>
            </div>
          </div>

          <div className="contact_socials">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jonah-wakahiu-5049b9264/"
              className="contact_social-links"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/jonahwakahiuh"
              className="contact_social-links"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://join.skype.com/invite/DedlILCckACB"
              className="contact_social-links"
            >
              <FaSkype />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=61553215785310"
              className="contact_social-links"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+254748454513"
              className="contact_social-links"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={contactSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="contact_form" ref={form}>
              <div className="form_input-group grid">
                <div className="form_input-div">
                  <Input name="name" type="text" placeholder="Name" />
                </div>
                <div className="form_input-div">
                  <Input name="email" type="email" placeholder="Email" />
                </div>
                <div className="form_input-div">
                  <Input name="subject" type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="form_input-div">
                <CustomTextarea
                  name="message"
                  type="text"
                  placeholder="Message..."
                />
              </div>
              <button type="submit" className="button" disabled={isSubmitting}>
                Send Message
                <span className="button_icon contact_button-ico">
                  <FiSend />
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};
export default Contact;
