import { ContactForm } from "."

export default function SuggestionBox() {
  return (
    <>
      <section className="lg:max-w-4xl lg:mx-auto px-5">
        <p className="text-center mt-10 text-2xl">
          Complétez le formulaire ci-dessous pour contacter le support de OneReport.
        </p>

        <ContactForm />
      </section>
    </>
  )
}