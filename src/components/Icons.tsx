import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Icons = () => {
  return (
    <div className=" flex justify-center m-10 ">
      <div className="border-2 rounded-4xl p-2 m-2 cursor-pointer">
        <Facebook />
      </div>
      <div className="border-2 rounded-4xl p-2 m-2 cursor-pointer">
        <Twitter />
      </div>
      <div className="border-2 rounded-4xl p-2 m-2 cursor-pointer">
        <Instagram />
      </div>
      <div className="border-2 rounded-4xl p-2 m-2 cursor-pointer">
        <Youtube />
      </div>
    </div>
  );
};

export default Icons;
