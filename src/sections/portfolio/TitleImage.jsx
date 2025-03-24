export const TitleImage = ({ altText, src }) => {
  return (
    <div>
      <div className="flex justify-center align-middle w-full my-4">
        <div
          className="relative
  max-w-xs
  sm:max-w-md
  md:max-w-lg
  lg:max-w-lg
  xl:max-w-lg
  h-auto"
        >
          <img src={src} alt={altText} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
