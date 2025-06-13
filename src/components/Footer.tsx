import Icons from "./Icons";

const Footer = () => {
  return (
    <div
      style={{
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Icons />
        <p className="text-center">example@mail.com</p>
        <p className="text-center">
          Copyright &copy;2020 Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
