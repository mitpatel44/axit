import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ShoppingCartPage = () => {
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
              shopping cart
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
                  / cart
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto p-5 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1160px] pl-[466.92px] pr-[464.08px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              your cart
            </Text>
          </div>
          <div className="border border-gray-900 border-solid flex md:flex-col flex-row gap-[15px] items-center justify-start max-w-[1160px] mt-[30px] pl-[21.6px] pr-[21.25px] sm:px-5 py-[11.6px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-4/5 md:w-full">
              <div className="flex flex-col items-start justify-start pb-[0.2px] w-auto">
                <Text
                  className="text-gray-600 text-xl w-auto"
                  size="txtRubikRegular20Gray600"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    grand total :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $9/-
                  </span>
                </Text>
              </div>
            </div>
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[216px] text-center text-xl"
              shape="square"
              color="yellow_600"
              size="xs"
              variant="fill"
            >
              checkout orders
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1160px] mt-5 md:px-10 sm:px-5 px-[70px] w-full"
            orientation="horizontal"
          >
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="md:h-[250px] h-[260px] relative w-[97%]">
                <Img
                  className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-[97%]"
                  src="images/img_pizza1png.png"
                  alt="pizza1png"
                />
                <Button
                  className="absolute border border-gray-900 border-solid flex h-[45px] items-center justify-center right-[0] top-[0] w-[45px]"
                  shape="square"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_close.svg" alt="close" />
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start mt-[21px] pb-[0.2px] md:pr-10 sm:pr-5 pr-[124.8px] w-[286px]">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtRubikRegular20"
                >
                  delicious pizza 01
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[120.65px] w-full">
                  <div className="flex flex-col justify-end pt-1.5">
                    <Text
                      className="mr-[15px] text-gray-600 text-lg"
                      size="txtRubikRegular18"
                    >
                      $
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtRubikRegular25Gray900"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-start justify-start p-[11.6px] w-[70px]">
                  <div className="flex flex-col items-center justify-start pr-[15px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-[0.6px] sm:pr-5 pr-[23.8px] w-full">
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtRubikRegular18Gray900"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-600 border border-gray-900 border-solid flex flex-col h-[45px] md:h-auto items-center justify-start pl-[13.66px] pr-[13.34px] py-[12.5px] w-[50px]">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start my-[9px] md:pr-10 sm:pr-5 pr-[183.8px] w-[286px]">
                <Text
                  className="text-[17px] text-gray-600 w-auto"
                  size="txtRubikRegular17"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    sub total :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $3
                  </span>
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="md:h-[250px] h-[260px] relative w-[97%]">
                <Img
                  className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-[97%]"
                  src="images/img_dish2png.png"
                  alt="dish2png"
                />
                <Button
                  className="absolute border border-gray-900 border-solid flex h-[45px] items-center justify-center right-[0] top-[0] w-[45px]"
                  shape="square"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_close.svg" alt="close" />
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start mt-[21px] pb-[0.2px] md:pr-10 sm:pr-5 pr-[166.8px] w-[286px]">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtRubikRegular20"
                >
                  main dish 02
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[120.65px] w-full">
                  <div className="flex flex-col justify-end pt-1.5">
                    <Text
                      className="mr-[15px] text-gray-600 text-lg"
                      size="txtRubikRegular18"
                    >
                      $
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtRubikRegular25Gray900"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-start justify-start p-[11.6px] w-[70px]">
                  <div className="flex flex-col items-center justify-start pr-[15px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-[0.6px] sm:pr-5 pr-[23.8px] w-full">
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtRubikRegular18Gray900"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-600 border border-gray-900 border-solid flex flex-col h-[45px] md:h-auto items-center justify-start pl-[13.66px] pr-[13.34px] py-[12.5px] w-[50px]">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start my-[9px] md:pr-10 sm:pr-5 pr-[183.8px] w-[286px]">
                <Text
                  className="text-[17px] text-gray-600 w-auto"
                  size="txtRubikRegular17"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    sub total :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $3
                  </span>
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="md:h-[250px] h-[260px] relative w-[97%]">
                <Img
                  className="absolute h-[250px] inset-[0] justify-center m-auto object-cover w-[97%]"
                  src="images/img_dessert1png.png"
                  alt="dessert1png"
                />
                <Button
                  className="absolute border border-gray-900 border-solid flex h-[45px] items-center justify-center right-[0] top-[0] w-[45px]"
                  shape="square"
                  color="red_500"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_close.svg" alt="close" />
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start mt-[21px] pb-[0.2px] md:pr-10 sm:pr-5 pr-[102.8px] w-[286px]">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtRubikRegular20"
                >
                  delicious dessert 01
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[120.65px] w-full">
                  <div className="flex flex-col justify-end pt-1.5">
                    <Text
                      className="mr-[15px] text-gray-600 text-lg"
                      size="txtRubikRegular18"
                    >
                      $
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtRubikRegular25Gray900"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col items-start justify-start p-[11.6px] w-[70px]">
                  <div className="flex flex-col items-center justify-start pr-[15px] w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-[0.6px] sm:pr-5 pr-[23.8px] w-full">
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtRubikRegular18Gray900"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-600 border border-gray-900 border-solid flex flex-col h-[45px] md:h-auto items-center justify-start pl-[13.66px] pr-[13.34px] py-[12.5px] w-[50px]">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_edit.svg"
                    alt="edit"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start my-[9px] md:pr-10 sm:pr-5 pr-[183.8px] w-[286px]">
                <Text
                  className="text-[17px] text-gray-600 w-auto"
                  size="txtRubikRegular17"
                >
                  <span className="text-gray-600 font-rubik text-left font-normal">
                    sub total :{" "}
                  </span>
                  <span className="text-gray-900 font-rubik text-left font-normal">
                    $3
                  </span>
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-center justify-start max-w-[1160px] mt-5 pl-[506.25px] pr-[506.26px] pt-2.5 md:px-10 sm:px-5 w-full">
            <Button
              className="!text-white-A700 capitalize cursor-pointer leading-[normal] min-w-[147px] text-center text-xl"
              shape="square"
              color="red_500"
              size="xs"
              variant="fill"
            >
              delete all
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShoppingCartPage;
