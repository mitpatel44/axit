import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutUsPage = () => {
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
              about us
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
                  / about
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-full">
            <Img
              className="flex-1 h-[574px] max-h-[574px] sm:w-[] md:w-[]"
              src="images/img_divimage.svg"
              alt="divimage"
            />
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col items-center justify-start pl-[166.82px] pr-[163.68px] md:px-10 sm:px-5 w-[572px] sm:w-full">
                <Text
                  className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-auto"
                  size="txtRubikBold30"
                >
                  why choose us?
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start pl-[8.17px] pr-[7.33px] py-2.5 w-[572px] sm:w-full">
                <Text
                  className="leading-[32.00px] text-base text-center text-gray-600"
                  size="txtRubikRegular16"
                >
                  <>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis non odit nihil,
                    <br />
                    doloremque sunt aut placeat culpa. Adipisci minima, neque
                    necessitatibus
                    <br />
                    incidunt nemo eveniet mollitia quis facere vel consectetur
                    culpa?
                  </>
                </Text>
              </div>
              <Button
                className="capitalize cursor-pointer leading-[normal] min-w-[149px] mt-2.5 text-center text-xl"
                shape="square"
                color="yellow_600"
                size="xs"
                variant="fill"
              >
                our menu
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[420.7px] pr-[416.3px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              3 simple steps
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 w-full">
              <Img
                className="h-[150px] sm:h-auto object-cover w-full"
                src="images/img_step1png.png"
                alt="step1png"
              />
              <div className="flex flex-col items-center justify-start mt-[21px] pb-[0.2px] md:px-10 sm:px-5 px-[107.73px] w-[333px]">
                <Text
                  className="capitalize text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  select food
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-2.5 pl-[15.83px] pr-[15.63px] w-[333px]">
                <Text
                  className="leading-[32.00px] text-base text-center text-gray-600"
                  size="txtRubikRegular16"
                >
                  <>
                    Lorem, ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Perspiciatis, hic.
                  </>
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 w-full">
              <Img
                className="h-[150px] sm:h-auto object-cover w-full"
                src="images/img_step2png.png"
                alt="step2png"
              />
              <div className="flex flex-col items-center justify-start mt-[21px] pb-[0.2px] pl-[69.66px] pr-[64.8px] md:px-10 sm:px-5 w-[333px]">
                <Text
                  className="capitalize text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  30 minutes delivery
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-2.5 pl-[15.84px] pr-[15.62px] w-[333px]">
                <Text
                  className="leading-[32.00px] text-base text-center text-gray-600"
                  size="txtRubikRegular16"
                >
                  <>
                    Lorem, ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Perspiciatis, hic.
                  </>
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[21px] sm:px-5 w-full">
              <Img
                className="h-[150px] sm:h-auto object-cover w-full"
                src="images/img_step3png.png"
                alt="step3png"
              />
              <div className="flex flex-col items-center justify-start mt-[21px] pb-[0.2px] pl-[110.2px] pr-[108.27px] md:px-10 sm:px-5 w-[333px]">
                <Text
                  className="capitalize text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  enjoy food!
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-2.5 pl-[15.83px] pr-[15.64px] w-[333px]">
                <Text
                  className="leading-[32.00px] text-base text-center text-gray-600"
                  size="txtRubikRegular16"
                >
                  <>
                    Lorem, ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Perspiciatis, hic.
                  </>
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[359.6px] pr-[353.4px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              <>customer&#39;s reviews</>
            </Text>
          </div>
          <Img
            className="h-[361px] w-[1160px]"
            src="images/img_divswiper.svg"
            alt="divswiper"
          />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
