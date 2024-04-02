import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactUsPage = () => {
  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="bg-gray-900 flex flex-col gap-2 items-center justify-start p-[59px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRubikBold40WhiteA700"
            >
              contact us
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start pb-[0.2px] w-auto">
            <a
              href="http://127.0.0.1:5500/home.html"
              className="text-center text-xl text-yellow-600 w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text>
                <span className="text-yellow-600 font-rubik font-normal">
                  home{" "}
                </span>
                <span className="text-gray-600 font-rubik font-normal">
                  / contact
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-full">
            <Img
              className="flex-1 h-[574px] max-h-[574px] sm:w-[] md:w-[]"
              src="images/img_divimage_white_a700.svg"
              alt="divimage"
            />
            <div className="border border-gray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-5 w-1/2 md:w-full">
              <div className="flex flex-col items-center justify-start pl-[152.03px] pr-[147.27px] md:px-10 sm:px-5 w-[529px] sm:w-full">
                <Text
                  className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-auto"
                  size="txtRubikBold25"
                >
                  tell us something!
                </Text>
              </div>
              <Input
                name="input"
                placeholder="enter your name"
                className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
                wrapClassName="border border-gray-900 border-solid mt-[15px] w-full"
                type="text"
                shape="square"
                color="white_A700"
                variant="fill"
              ></Input>
              <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-center justify-start mt-2.5 p-[15px] w-full">
                <Input
                  name="divplaceholder"
                  placeholder="enter your number"
                  className="leading-[normal] p-0 placeholder:text-gray-600_01 sm:pr-5 text-gray-600_01 text-left text-lg w-full"
                  wrapClassName="pr-[35px] w-[97%]"
                  type="number"
                  size="xs"
                ></Input>
              </div>
              <Input
                name="input_One"
                placeholder="enter your email"
                className="leading-[normal] p-0 placeholder:text-gray-600_01 text-left text-lg w-full"
                wrapClassName="border border-gray-900 border-solid mt-2.5 w-full"
                type="email"
                shape="square"
                color="white_A700"
                variant="fill"
              ></Input>
              <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-start justify-start mt-2.5 pb-[112.8px] pt-[15.6px] px-[15.6px] w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start pb-[0.6px] md:pr-10 sm:pr-5 pr-[332.1px] w-auto">
                  <Text
                    className="text-gray-600_01 text-lg w-auto"
                    size="txtRubikRegular18Gray60001"
                  >
                    enter your message
                  </Text>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer leading-[normal] min-w-[194px] mt-[17px] text-center text-xl"
                shape="square"
                color="yellow_600"
                size="xs"
                variant="fill"
              >
                send message
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
