export const Form = () => {
  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <fieldset>
        <label className="text-neutral-300 font-global">Full Name</label>
        <input
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          placeholder="Your name..."
        />
      </fieldset>
      <fieldset>
        <label className="text-neutral-300 font-global">Email Address</label>
        <input
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="email"
          placeholder="Your email..."
        />
      </fieldset>
      <fieldset>
        <label className="text-neutral-300 font-global">Github Username</label>
        <input
          className="w-full p-2 rounded-md border-1 border-neutral-400 bg-neutral-400/10 text-neutral-50 placeholder:text-neutral-400"
          type="text"
          placeholder="@your username"
        />
      </fieldset>
      <button className="w-full font-global font-bold rounded-md p-2 text-neutral-900 bg-orange-600 transition-colors duration-300 cursor-pointer hover:bg-orange-500">
        Generate My Ticket
      </button>
    </form>
  );
};
