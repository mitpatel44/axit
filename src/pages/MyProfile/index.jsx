import React from "react";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const MyProfilePage = () => {
  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="bg-gray-900 flex flex-col gap-[9px] items-center justify-start p-[59px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[0.02px] w-auto">
            <Text
              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRubikBold40WhiteA700"
            >
              my profile
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
                  / profile
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="border border-gray-900 border-solid flex flex-col items-start justify-start mt-5 p-[21px] md:px-5 w-[27%] md:w-full">
          <Img
            className="h-[150px] sm:h-auto object-cover w-full"
            src="images/img_usericonpng.png"
            alt="usericonpng"
          />
          <div className="flex flex-row gap-[11px] items-center justify-start mt-[22px] pr-0.5 py-0.5 w-full">
            <Img
              className="h-[23px]"
              src="images/img_user_gray_600.svg"
              alt="user_One"
            />
            <Text className="text-gray-900 text-xl" size="txtRubikRegular20">
              shaikh anas
            </Text>
          </div>
          <div className="flex flex-row gap-[11px] items-center justify-start mt-[5px] pr-0.5 py-0.5 w-full">
            <Img className="h-[23px]" src="images/img_call.svg" alt="call" />
            <Text className="text-gray-900 text-xl" size="txtRubikRegular20">
              1234567890
            </Text>
          </div>
          <div className="flex flex-row gap-[11px] items-start justify-start mt-[5px] pr-[3px] pt-[3px] w-full">
            <Img className="h-[23px]" src="images/img_mail.svg" alt="mail" />
            <Text
              className="mt-0.5 text-gray-900 text-xl"
              size="txtRubikRegular20"
            >
              shaikhanas@gmail.com
            </Text>
          </div>
          <Button
            className="capitalize cursor-pointer leading-[normal] min-w-[191px] mt-[15px] text-center text-xl"
            shape="square"
            color="yellow_600"
            size="xs"
            variant="fill"
          >
            update profile
          </Button>
          <div className="flex flex-col items-center justify-start mt-5 pr-[3px] py-[3px] w-full">
            <div className="flex flex-col gap-[5px] items-start justify-start w-[99%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_location.svg"
                  alt="location"
                />
                <Text
                  className="text-gray-900 text-xl"
                  size="txtRubikRegular20"
                >
                  flat no. 1, building no. 1, jogeshwari
                </Text>
              </div>
              <Text className="text-gray-900 text-xl" size="txtRubikRegular20">
                west, mumbai, india - 400104
              </Text>
            </div>
          </div>
          <Button
            className="capitalize cursor-pointer leading-[normal] min-w-[208px] mt-[15px] text-center text-xl"
            shape="square"
            color="yellow_600"
            size="xs"
            variant="fill"
          >
            update address
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-5 md:px-5 w-full" />
      </div>
    </>
  );
};

export default MyProfilePage;
