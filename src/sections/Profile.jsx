import profile from "../assets/profile.jpg";

export const Profile = () => {
  return (
    <div className="flex justify-center align-middle">
      <img src={profile} className="w-6/12 object-contain block" />
    </div>
  );
};
