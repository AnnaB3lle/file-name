import { useFormik } from "formik";

const ContactForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Veuillez entrer votre nom";
    }

    if (!values.email) {
      errors.email = "Veuillez entrer une adresse email valide";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Veuillez entrer une adresse email valide";
    }

    if (!values.message) {
      errors.message = "Veuillez entrer votre message avant d'envoyer";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Votre envoi a été bien reçu");
    },
  });

  return (
    <>
      <div className="py-10 lg:px-20 xl:max-w-7xl xl:mx-auto">
        <div>
          <form
            method="post"
            className="contact__form flex flex-col items-center justify-center mt-6"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="name">Entrez votre nom</label>
                {formik.errors.name ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.name}
                  </small>
                ) : null}
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                className="py-2 px-4 mb-3 rounded-lg"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="email">Entrez votre adresse email</label>
                {formik.errors.email ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                className="py-2 px-4 mb-3 rounded-lg"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="textarea">Entrez votre message</label>
                {formik.errors.message ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.message}
                  </small>
                ) : null}
              </div>
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                placeholder=""
                className="py-2 px-4 mb-3 rounded-lg"
                required
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
            </article>

            <button
              onClick={formik.handleSubmit}
              type="submit"
              className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            >
              Soumettre
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default ContactForm;