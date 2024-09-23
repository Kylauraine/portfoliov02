import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "./Contact.scss";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Le nom doit contenir au moins 2 caractères").required("Votre nom est requis"),
    email: Yup.string().email("Adresse email invalide").required("Votre email est requis"),
    phone: Yup.string().min(10, "Le numéro de téléphone doit contenir au moins 10 caractères"),
    message: Yup.string().min(10, "Le message doit contenir au moins 10 caractères").required("Votre message est requis"),
  });

  // Fonction pour envoyer l'email avec EmailJS
  const sendEmail = (values, { resetForm, setSubmitting }) => {
    emailjs
      .send(
        "service_7ff5iz9", // ID du service
        "template_6pgblnd", // ID du template
        values, // Les données du formulaire
        "j4Q3zihC_9lJ_WTze" // Clé publique
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès !", response.status, response.text);
          resetForm();
          setSubmitting(false);
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email :", error);
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <h2>Contactez-moi !</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail} // Fonction à exécuter lors de la soumission
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Nom</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="phone">Téléphone</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
