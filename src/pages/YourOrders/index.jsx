import React from "react";

import { Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const YourOrdersPage = () => {
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
              your orders
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
                  / orders
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[414.53px] pr-[410.47px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              placed orders
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[15px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-[21.6px] py-[11.6px] w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[322.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    placed on :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    5-29-2022
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[351.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    name :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    shaikh anas
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[327.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    number :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    1234567899
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[246.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    email :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    shaikhanas@gmail.com
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[108.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    address :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    jogeshwari, mumbai, india - 400103
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[123.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    your orders :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    pizza 01 (1) - main dish 02 (3) -
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[367.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    total price :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $12/-
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[203.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    payment method :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    cash on delivery
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[291.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    payment status :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    pending
                  </span>
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-[21.6px] py-[11.6px] w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[322.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    placed on :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    5-29-2022
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[351.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    name :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    shaikh anas
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[327.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    number :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    1234567899
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[246.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    email :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    shaikhanas@gmail.com
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[108.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    address :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    jogeshwari, mumbai, india - 400103
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[123.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    your orders :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    pizza 01 (1) - main dish 02 (3) -
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[367.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    total price :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $12/-
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[203.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    payment method :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    cash on delivery
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[291.3px] w-full">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    payment status :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    pending
                  </span>
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default YourOrdersPage;
