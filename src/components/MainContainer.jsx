import logo from "../assets/images/logo-full.svg";
import { Form } from "./Form";
import { useTicketContext } from "../context/TicketContext.jsx";
import { useEffect } from "react";
import { Ticket } from "./Ticket.jsx";

export const MainContainer = () => {
  const { ticketData } = useTicketContext();

  useEffect(() => {
    if (ticketData) {
      console.log("Datos del ticket:", ticketData);
    }
  }, [ticketData]);

  return (
    <section className="h-full w-[520px] flex flex-col items-center gap-10 px-2 sm:px-0 lg:py-10">
      <img src={logo} alt="Logo of coding conf" />

      {ticketData ? (
        <div className="text-center text-white">
          <h1 className="font-global text-3xl">
            Congrats, <span>{ticketData.name}</span>
          </h1>
          <p className="font-global mt-2">
            We've emailed your ticket to{" "}
            <span className="text-orange-500">{ticketData.email}</span> and will
            send updates in the run up to the event.
          </p>
          <Ticket />
        </div>
      ) : (
        <>
          <div className="text-center">
            <h1 className="font-global text-2xl md:text-4xl text-white font-bold">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-neutral-400">
              Secure your spot at next year's biggest event conference.
            </p>
          </div>

          <Form />
        </>
      )}
    </section>
  );
};
