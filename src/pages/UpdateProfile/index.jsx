import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const UpdateProfilePage = () => {
  return (
    <>
      <div className="flex flex-col font-rubik gap-5 items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="border border-gray-900 border-solid flex flex-col gap-5 items-center justify-start p-5 md:px-5 w-[33%] md:w-full">
          <div className="flex flex-col items-center justify-start pl-[123.38px] pr-[120.42px] md:px-10 sm:px-5 w-[456px] sm:w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 uppercase w-auto"
              size="txtRubikBold25"
            >
              update profile
            </Text>
          </div>
          <Input
            name="input"
            placeholder="shaikh anas"
            className="!placeholder:text-gray-900 !text-gray-900 leading-[normal] p-0 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Input
            name="email"
            placeholder="shaikhanas@gmai.com"
            className="!placeholder:text-gray-900 !text-gray-900 leading-[normal] p-0 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            type="email"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Input
            name="mobileNo"
            placeholder="1234567890"
            className="!placeholder:text-gray-900 !text-gray-900 leading-[normal] p-0 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            type="number"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Input
            name="input_One"
            placeholder="enter your old password"
            className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            type="password"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Input
            name="input_Two"
            placeholder="enter your new password"
            className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            type="password"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Input
            name="input_Three"
            placeholder="confirm your new password"
            className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
            wrapClassName="border border-gray-900 border-solid w-full"
            type="password"
            shape="square"
            color="white_A700"
            variant="fill"
          ></Input>
          <Button
            className="capitalize cursor-pointer leading-[normal] min-w-[174px] text-center text-xl"
            shape="square"
            color="yellow_600"
            size="xs"
            variant="fill"
          >
            update now
          </Button>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default UpdateProfilePage;
