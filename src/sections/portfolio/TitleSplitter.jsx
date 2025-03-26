export const TitleSplitter = ({ text }) => {
  return (
    <div className="flex items-center w-full my-4">
      <div className="border-t border-splitter flex-grow"></div>
      <div className="px-4 font-milton-one text-6xl text-center font-semibold">
        {text}
      </div>
      <div className="border-t border-splitter flex-grow"></div>
    </div>
  );
};
