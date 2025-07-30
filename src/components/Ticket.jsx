import { useRef } from "react";
import { useTicketContext } from "../context/TicketContext";
import logo from "../assets/images/logo-full.svg";

export const Ticket = () => {
  const ticketRef = useRef(null);
  const { ticketData } = useTicketContext();

  const managePerspective = (evt) => {
    if (!ticketRef.current) return;
    const { width, height, left, top } =
      ticketRef.current.getBoundingClientRect();
    const offsetX = evt.clientX - left;
    const offsetY = evt.clientY - top;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * -10;

    ticketRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  return (
    <article
      onMouseMove={managePerspective}
      onMouseLeave={() => {
        if (ticketRef.current) {
          ticketRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
      }}
      id="ticket"
      ref={ticketRef}
      className="w-full p-4 rounded-md border-[1px] border-neutral-50 flex flex-col gap-8 mt-2 relative shadow-lg perspective-[1000px]"
    >
      <div className="bg-neutral-500/30 blur-xs absolute top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col gap-1 items-start z-10">
        <img src={logo} alt="Logo of coding conf" className="w-48 h-auto" />
        <span className="ml-10 text-sm text-neutral-500 font-global">
          Jan 31, 2025 / Austin, TX
        </span>
      </div>
      <div className="flex items-center gap-x-4 z-10">
        <img
          className="w-14 h-14 rounded-md object-cover"
          src={ticketData.avatarPreview}
          alt={ticketData.name}
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-global text-xl text-white">{ticketData.name}</h3>
          <span className="flex items-center gap-x-2 font-global">
            <svg
              className="w-4 h-4 fill-white"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {ticketData.github}
          </span>
        </div>
      </div>
    </article>
  );
};
