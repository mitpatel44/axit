import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[63px] justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[227px] w-full">
          <div className="border border-gray-900 border-solid flex flex-col items-center justify-end p-5 w-[90%] md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[918px] mt-12 pl-[159.68px] pr-[158.12px] md:px-10 sm:px-5 w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 uppercase w-auto"
                size="txtRubikBold25"
              >
                login now
              </Text>
            </div>
            <Input
              name="input"
              placeholder="enter your email"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[75px] w-1/2"
              type="email"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_One"
              placeholder="enter your password"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[74px] w-1/2"
              type="password"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Link to="/home">
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[157px] mt-[75px] text-center text-xl"
              shape="square"
              color="yellow_600"
              size="xs"
              variant="fill"
            >
              Login now
            </Button></Link>
            <div className="flex flex-col items-center justify-start max-w-[918px] mb-1.5 mt-[178px] pb-[0.2px] pl-[59.57px] pr-[59.23px] md:px-10 sm:px-5 w-full">
            <Link to="/registration">
              <button
                className="text-center text-gray-600 text-xl w-auto"
                size="txtRubikRegular20Gray600"
              >
                <span className="text-gray-600 font-rubik font-normal">
                  <>don&#39;t have an account? </>
                </span>
                <span className="text-red-500 font-rubik font-normal">
                  register now
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
