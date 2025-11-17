export const VideoSection = () => {
  return (
    <div className="relative box-border caret-transparent h-[500px] object-cover w-full overflow-hidden my-6 py-6">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
            <div className="relative box-border caret-transparent h-[500px] object-cover w-full overflow-hidden">
              <img
                src="https://c.animaapp.com/mi3n31pkq3zbsu/assets/maxresdefault.jpg"
                alt="Video - 88 Brindes"
                className="box-border caret-transparent max-w-full"
              />
              <div className="box-border caret-transparent">
                <a
                  href="https://www.youtube.com/watch?v=CiYTfn2ZJxc"
                  className="absolute box-border caret-transparent block z-[3] left-2/4 top-[40%] hover:text-orange-400 hover:border-orange-400"
                >
                  <i className="text-[62px] box-border caret-transparent leading-[60px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[62px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[60px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:left-0 before:top-0 before:font-eleganticons"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
