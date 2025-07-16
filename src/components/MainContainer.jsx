import logo from "../assets/images/logo-full.svg";
import { Form } from "./Form";

export const MainContainer = () => {
  return (
    <section className="w-[520px] flex flex-col items-center gap-10 px-2 sm:px-0">
      <img src={logo} alt="Logo of coding conf" />

      <div className="text-center">
        <h1 className="font-global text-2xl md:text-4xl text-white font-bold">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="text-neutral-400">
          Secure your spot at next year's biggest event conference.
        </p>
      </div>

      <Form />
    </section>
  );
};
