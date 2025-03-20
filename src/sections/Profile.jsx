import profile from "/profile.jpg";

export const Profile = () => {
  return (
    <div className="flex justify-center align-middle w-full">
      <img
        src={profile}
        className="
        max-w-xs
        sm:max-w-md
        md:max-w-lg
        lg:max-w-lg
        xl:max-w-lg
        h-auto"
      />
    </div>
  );
};
