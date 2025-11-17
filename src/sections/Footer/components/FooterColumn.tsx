export type FooterColumnProps = {
  variant: string;
  title: string;
  items?: Array<{
    text: string;
    href?: string;
    icon?: boolean;
  }>;
  showEmailInput?: boolean;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`relative box-border caret-transparent basis-auto shrink max-w-none w-full mb-[30px] px-[15px] md:shrink-0 ${props.variant}`}
    >
      <h6
        className={`text-neutral-900 text-lg font-medium box-border caret-transparent leading-[25.38px] mt-[-3px] ${props.title === "Endereço" ? "mb-5" : "mb-2.5"}`}
      >
        {props.title}
      </h6>

      {props.items && (
        <ul className="box-border caret-transparent list-none pl-0">
          {props.items.map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "box-border caret-transparent mb-1"
                  : "box-border caret-transparent"
              }
            >
              {item.icon && (
                <i className="box-border caret-transparent leading-4 mr-2.5 font-eleganticons before:accent-auto before:box-border before:caret-transparent before:text-sky-50 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-eleganticons"></i>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="box-border caret-transparent inline-block hover:text-orange-400 hover:border-orange-400"
                >
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
      )}

      {props.showEmailInput && (
        <div className="box-border caret-transparent mt-2.5">
          <input
            type="text"
            placeholder="Seu e-mail"
            className="text-white bg-transparent border-b-zinc-300 box-border caret-transparent text-start w-full pl-0 pr-10 py-0 border-t-white border-t-0 border-x-white border-x-0 border-b"
          />
          <button className="absolute bg-transparent caret-transparent block text-center right-[15px]">
            <i className="box-border caret-transparent leading-4 font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-sky-50 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
          </button>
        </div>
      )}
    </div>
  );
};
