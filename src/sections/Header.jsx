export const Header = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-8xl font-milton-one">
        Hayley Fitzsimmons
      </h1>
      <div className="flex flex-row justify-center mt-2">
        <button className="ml-4 mr-4 text-2xl font-theano-didot">about</button>
        <button className="ml-4 mr-4 text-2xl font-theano-didot">
          porfolio
        </button>
      </div>
    </div>
  );
};
