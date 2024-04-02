import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start max-w-[1200px] p-5 w-full">
            <div className="border border-gray-900 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-start p-[21px] sm:px-5 w-[24%] md:w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_emailiconpng.png"
                alt="emailiconpng"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[72.56px] pr-[70.99px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtRubikBold20"
                  >
                    our email
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[35.93px] pr-[35.62px] sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    kansagramit2@gmail.com
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[43.93px] pr-[43.62px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    gadhiyaaxit@gmail.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-start p-[21px] sm:px-5 w-[24%] md:w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_clockiconpng.png"
                alt="clockiconpng"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[47.3px] pr-[44.25px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtRubikBold20"
                  >
                    opening hours
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[45.43px] pr-[45.12px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    00:07am to 00:10pm
                  </Text>
                </div>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-start p-[21px] sm:px-5 w-[24%] md:w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_mapiconpng.png"
                alt="mapiconpng"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[59.86px] pr-[57.69px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtRubikBold20"
                  >
                    our address
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[34.93px] pr-[34.62px] sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    mumbai, india - 400104
                  </Text>
                </div>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex md:flex-1 flex-col gap-[21px] items-center justify-start p-[21px] sm:px-5 w-[24%] md:w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_phoneiconpng.png"
                alt="phoneiconpng"
              />
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[60.75px] pr-[58.8px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-center text-gray-900 text-xl w-auto"
                    size="txtRubikBold20"
                  >
                    our number
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[62.96px] pr-[62.59px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    +7046990214
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-[65.95px] pr-[65.6px] md:px-10 sm:px-5 w-[235px]">
                  <Text
                    className="text-[15px] text-center text-gray-600 w-auto"
                    size="txtRubikRegular15"
                  >
                    +9938748342
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="bg-gray-900 h-[83px] justify-center sm:px-5 px-[35px] py-[29px] text-center text-white-A700 text-xl w-full"
            size="txtRubikRegular20WhiteA700"
          >
            <span className="text-white-A700 font-rubik font-normal">
              © copyright @ 2024 by{" "}
            </span>
            <span className="text-yellow-600 font-rubik font-normal">
              Mit Kansagara 
            </span>
            <span className="text-white-A700 font-rubik font-normal">
              {" "}
              | all rights reserved!
            </span>
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
