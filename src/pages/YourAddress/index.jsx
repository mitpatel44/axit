import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const YourAddressPage = () => {
  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto pb-[81px] w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="border border-gray-900 border-solid flex flex-col gap-[49px] justify-end mt-[19px] p-[13px] md:px-5 w-[56%] md:w-full">
          <div className="flex flex-col items-center justify-start max-w-[805px] mt-1.5 mx-auto pl-[132.05px] pr-[129.75px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 uppercase w-auto"
              size="txtRubikBold25"
            >
              your address
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[226px] mr-[138px] w-[56%] md:w-full">
            <Input
              name="input"
              placeholder="flat no. and building name"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid w-full"
              type="text"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_One"
              placeholder="area name"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-12 w-full"
              type="text"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_Two"
              placeholder="city name"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[51px] w-full"
              type="text"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_Three"
              placeholder="state name"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[51px] w-full"
              type="text"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_Four"
              placeholder="country name"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[51px] w-full"
              type="text"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Input
              name="input_Five"
              placeholder="pin code"
              className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
              wrapClassName="border border-gray-900 border-solid mt-[55px] w-full"
              type="number"
              shape="square"
              color="white_A700"
              variant="fill"
            ></Input>
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[186px] mt-[25px] text-center text-xl"
              shape="square"
              color="yellow_600"
              size="xs"
              variant="fill"
            >
              save address
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1513px] mt-[54px] mx-auto md:px-5 w-full">
          <Text
            className="bg-gray-900 h-[83px] justify-center sm:px-5 px-[35px] py-[29px] text-center text-white-A700 text-xl w-full"
            size="txtRubikRegular20WhiteA700"
          >
            <span className="text-white-A700 font-rubik font-normal">
              © copyright @ 2024 by{" "}
            </span>
            <span className="text-yellow-600 font-rubik font-normal">
              mr.Axit Gadhiya
            </span>
            <span className="text-white-A700 font-rubik font-normal">
              {" "}
              | all rights reserved!
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default YourAddressPage;
