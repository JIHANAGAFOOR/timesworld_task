import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import TextInput from "../components/TextInput";
import Icons from "../components/Icons";
import BannerImage from "../assets/images/Banner.png";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { countryActions } from "../store/slice/country";
import { fetchCountryData } from "../service";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    isSignedIn: false,
  });
  const [isChecked, setIsChecked] = useState(false);

  const isValidPassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    setLoginDetails((prev) => ({
      ...prev,
      isSignedIn: e.target.checked,
    }));
  };

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = loginDetails.password;

    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least 1 capital letter, 1 number, and 1 symbol."
      );
      return;
    }

    try {
      const data = await fetchCountryData();
      dispatch(countryActions.countryDataSelected(data));
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong while logging in.");
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 bg">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center font-['Noto_Sans']"
        >
          <div className="p-4 w-100" style={{ maxWidth: "400px" }}>
            <h1
              className="text-center mb-3"
              style={{
                fontWeight: 700,
              }}
            >
              Sign In
            </h1>

            <div className="d-flex  mb-8">
              <p className="mb-0 ">New User?</p>
              <a href="#">Create an account</a>
            </div>
            <Form onSubmit={onHandleSubmit}>
              <TextInput
                type="text"
                name="username"
                state={loginDetails.username}
                onChange={onHandleChange}
                placeholder="Username or Email"
              />
              <TextInput
                type="password"
                name="password"
                state={loginDetails.password}
                onChange={onHandleChange}
                placeholder="Password"
              />

              <div
                className="form-check mb-4"
                style={{ position: "relative", backgroundColor: "" }}
              >
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    borderRadius: 0,
                    width: "30px",
                    height: "30px",
                    border: "2px solid #000",
                    backgroundColor: "#fff",
                    accentColor: "transparent",
                    appearance: "none",
                    WebkitAppearance: "none",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                {isChecked && (
                  <span className="absolute left-[4px] top-[8px] text-black text-[18px] font-bold pointer-events-none leading-none">
                    <Check size={24} />
                  </span>
                )}
                <label
                  className="form-check-label ml-[8px] mt-2 cursor-pointer select-none"
                  htmlFor="terms"
                >
                  Keep me signed in
                </label>
              </div>

              <Button
                type="submit"
                className="w-100 rounded-0 text-white"
                style={{
                  backgroundColor: "#3C3C3C",
                  border: "1px solid black",
                }}
              >
                Login
              </Button>
            </Form>
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 border border-dark" />
              <div className="px-3 fw-bold text-center">Login</div>
              <hr className="flex-grow-1 border border-dark" />
            </div>
            <Icons />
          </div>
        </Col>
        <Col
          md={6}
          className=" d-flex align-items-center justify-content-center  d-none d-md-flex"
        >
          <Image
            src={BannerImage}
            alt={"Banner"}
            fluid
            rounded
            style={{
              marginBottom: "10vh",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
