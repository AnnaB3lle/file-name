import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name, email, phone, } =
    useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Nom:</span> {name}
          </li>
          <li>
            <span className="font-bold">Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Téléphone:</span> {phone}
          </li>
        </ul>
      </footer>
    </>
  );
}
