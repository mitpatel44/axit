import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Text } from "components";
import Header from "components/Header";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth methods
import { auth } from "../../components/firebase";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegistration = async () => {
    try {
      // Register user using Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // If registration successful, you can redirect user to home page or perform other actions
      console.log("Registration successful:", userCredential.user);
    } catch (error) {
      // Handle registration error
      setError(error.message);
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1007px] mt-[19px] mx-auto p-1.5 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[963px] mt-3.5 pl-[136.14px] pr-[133.66px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 uppercase w-auto"
              size="txtRubikBold25"
            >
              register now
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-10 w-[46%] md:w-full">
            <Input
              name="input_One"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid w-full"
              type="email"
              shape="square"
              color="white_A700"
              variant="fill"
            />
            <Input
              name="input_Two"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-10 w-full"
              type="password"
              shape="square"
              color="white_A700"
              variant="fill"
            />
            {error && <Text>{error}</Text>}
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[183px] mt-[95px] text-center text-xl"
              shape="square"
              color="yellow_600"
              size="xs"
              variant="fill"
              onClick={handleRegistration}
            >
              Register now
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[963px] mb-3 mt-[65px] pb-[0.2px] pl-[62.06px] pr-[61.74px] md:px-10 sm:px-5 w-full">
            <Link to="/home">
              <Button className="text-center text-gray-600 text-xl w-auto">
                <span className="text-gray-600 font-rubik font-normal">already have an account? </span>
                <span className="text-red-500 font-rubik font-normal">login now</span>
              </Button>
            </Link>
          </div>
        </div>
        <Text
          className="bg-gray-900 h-[83px] justify-center mt-[82px] sm:px-5 px-[35px] py-[29px] text-center text-white-A700 text-xl w-auto"
          size="txtRubikRegular20WhiteA700"
        >
          <span className="text-white-A700 font-rubik font-normal">© copyright @ 2024 by{" "}</span>
          <span className="text-yellow-600 font-rubik font-normal">mr.Axit Gadhiya{" "}</span>
          <span className="text-white-A700 font-rubik font-normal">| all rights reserved!</span>
        </Text>
      </div>
    </>
  );
};

export default RegistrationPage;
