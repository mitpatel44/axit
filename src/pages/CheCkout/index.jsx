import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const CheCkoutPage = () => {
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
              checkout
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
                  / checkout
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[406.49px] pr-[402.51px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              order summary
            </Text>
          </div>
          <div className="border border-gray-900 border-solid flex flex-col gap-5 items-start justify-start p-[21.6px] sm:px-5 w-[500px] sm:w-full">
            <div className="bg-gray-900 flex flex-col gap-5 items-start justify-start p-[19px] w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[284.8px] w-[416px] sm:w-full">
                <Text
                  className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-auto"
                  size="txtRubikBold25WhiteA700"
                >
                  cart items
                </Text>
              </div>
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex sm:flex-1 flex-row items-center justify-between w-[416px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRubikRegular20WhiteA700"
                    >
                      delicious pizza 01
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-xl text-yellow-600"
                      size="txtRubikRegular20Yellow600"
                    >
                      $3
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-row items-center justify-between w-[416px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRubikRegular20WhiteA700"
                    >
                      main dish 02
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-xl text-yellow-600"
                      size="txtRubikRegular20Yellow600"
                    >
                      $3
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-row items-center justify-between w-[416px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRubikRegular20WhiteA700"
                    >
                      delicious dessert 01
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-xl text-yellow-600"
                      size="txtRubikRegular20Yellow600"
                    >
                      $3
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-row items-center justify-between pl-2.5 pr-[9.22px] py-2.5 w-[416px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      grand total :
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-red-500 text-xl"
                      size="txtRubikRegular20Red500"
                    >
                      $9
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="capitalize cursor-pointer leading-[normal] min-w-[149px] text-center text-xl"
                shape="square"
                color="yellow_600"
                size="xs"
                variant="fill"
              >
                view cart
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[343.8px] w-[456px] sm:w-full">
                <Text
                  className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                  size="txtRubikBold25"
                >
                  your info
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-center justify-start mt-5 pr-0.5 py-0.5 w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_user_gray_600.svg"
                  alt="user_One"
                />
                <Text
                  className="text-gray-900 text-xl"
                  size="txtRubikRegular20"
                >
                  shaikh anas
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-center justify-start mt-2.5 pr-0.5 py-0.5 w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_call.svg"
                  alt="call"
                />
                <Text
                  className="text-gray-900 text-xl"
                  size="txtRubikRegular20"
                >
                  1234567890
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-start justify-start mt-2.5 pr-[3px] pt-[3px] w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_mail.svg"
                  alt="mail"
                />
                <Text
                  className="mt-0.5 text-gray-900 text-xl"
                  size="txtRubikRegular20"
                >
                  shaikhanas@gmail.com
                </Text>
              </div>
              <Button
                className="capitalize cursor-pointer leading-[normal] min-w-[169px] mt-5 text-center text-xl"
                shape="square"
                color="yellow_600"
                size="xs"
                variant="fill"
              >
                update info
              </Button>
              <div className="flex flex-col items-start justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[245.8px] w-[456px] sm:w-full">
                <Text
                  className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                  size="txtRubikBold25"
                >
                  delivery address
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-5 pr-[3px] py-[3px] w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-[89%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-full">
                    <Img
                      className="h-[23px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRubikRegular20"
                    >
                      flat no. 1, building no. 1, jogeshwari west,
                    </Text>
                  </div>
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtRubikRegular20"
                  >
                    mumbai, india - 400104
                  </Text>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer leading-[normal] min-w-[208px] mt-5 text-center text-xl"
                shape="square"
                color="yellow_600"
                size="xs"
                variant="fill"
              >
                update address
              </Button>
              <Input
                name="options"
                placeholder="select payment method"
                className="!placeholder:text-gray-900 !text-gray-900 p-0 text-left text-lg w-full"
                wrapClassName="border border-gray-900 border-solid mt-5 w-full"
                shape="square"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[456px] sm:min-w-full text-center text-xl"
              shape="square"
              color="gray_900"
              size="xs"
              variant="fill"
            >
              place order
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default CheCkoutPage;
