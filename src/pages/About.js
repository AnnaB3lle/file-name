import { Footer } from "./index"
import { LogIn, CreateAccount } from "../buttons"

export default function About() {
  return (
    <>
      <section className="bg-teal-200 py-10 lg:py-32 ">
        <div className="max-width">
          <div className="overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-slate-800 lg:mb-8">
              A propos
            </h1>
            <p className="text-slate-700 text-center text-xl lg:w-2/3 lg:mx-auto">
              Cette application a été réalisé en Javascript dans le framework React lors de mon stage chez digisoft.
            </p>

            <div className="lg:max-w-2xl lg:mx-auto">
              <h3 className="text-2xl text-slate-800 mt-10 mb-5">
                Prochaines implémentations:
              </h3>
              <ol className="list-decimal text-slate-700">
                <li>
                  Implémentation d'un "SignaturePad" pour l'intervenant et le client.                </li>
                <li className="my-3">
                  Implémentation de prises de photos.
                </li>
              </ol>
            </div>

            <ul className="md:flex items-center justify-center mt-10 xl:max-w-3xl xl:mx-auto">
              <li className="flex flex-col text-slate-700 mb-5 md:flex-row md:items-center md:mb-0 md:mr-5">
                <CreateAccount />
              </li>
              <li className="flex flex-col text-slate-700 md:flex-row md:items-center">
                <LogIn />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="slant-left"></div>
      <Footer />
    </>
  )
}