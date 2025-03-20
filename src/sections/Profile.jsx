// Hayley Laptop not displaying 2560x1600

import { GifPlayer } from "../components/GifPlayer";

export const Profile = () => {
  return (
    <div className="flex justify-center align-middle w-full">
      <GifPlayer
        gifUrl={"/profile-no-loop.gif"}
        lastFrameUrl={"/profile.jpg"}
      />
      {/* <img
        src={"/profile-no-loop.gif"}
        className="
        max-w-xs
        sm:max-w-md
        md:max-w-lg
        lg:max-w-lg
        xl:max-w-lg
        h-auto"
      /> */}
    </div>
  );
};

// "
// max-w-xs
// sm:max-w-md
// md:max-w-lg
// lg:max-w-lg
// xl:max-w-lg
// h-auto"
