export const NewsletterForm = () => {
  return (
    <form className="relative box-border caret-transparent">
      <input
        type="hidden"
        name="_token"
        value="xMV8kjRj3FOv4IxITuswK9gTzaAhVfAfMDXuWUoq"
        className="bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        className="box-border caret-transparent h-[54px] text-start w-full pl-5 pr-[70px] py-2.5"
      />
      <button
        type="submit"
        className="absolute bg-transparent caret-transparent block h-[54px] text-center px-[30px] py-0 right-[15px] top-0"
      >
        <i className="box-border caret-transparent leading-4 font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-black before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
      </button>
    </form>
  );
};
