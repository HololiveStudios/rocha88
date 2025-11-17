export const SearchForm = () => {
  return (
    <form className="relative box-border caret-transparent hidden">
      <input
        type="text"
        name="keyword"
        placeholder="Buscar por..."
        className="bg-transparent box-border caret-transparent text-start w-full pl-0 pr-[35px] py-2.5 border-t-0 border-x-0 border-b border-black/30"
      />
      <button className="absolute text-[22px] bg-transparent caret-transparent block leading-[22px] text-center z-[1] right-0 top-2/4">
        <i className="box-border caret-transparent font-linearicons before:accent-auto before:box-border before:caret-transparent before:text-black before:text-[22px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-linearicons"></i>
      </button>
    </form>
  );
};
