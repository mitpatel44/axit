import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const OurMenuPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1200px] pl-5 pr-[19.99px] py-5 w-full">
            <div className="flex flex-col items-start justify-start pb-[0.6px] pr-[9.06px] pt-[3px] w-auto">
              <a
                href="http://127.0.0.1:5500/home.html"
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                target="_blank"
                rel="noreferrer"
              >
                <Text>yum-yum 😋</Text>
              </a>
            </div>
            <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-end px-[9px] w-[35%] md:w-full common-row-list">
              <li>
                <a href="javascript:" className="text-gray-900 text-xl">
                  <Text>home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[22px] text-gray-900 text-xl"
                >
                  <Text>about</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[21px] text-gray-900 text-xl"
                >
                  <Text>menu</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[21px] text-gray-900 text-xl"
                >
                  <Text>orders</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[22px] text-gray-900 text-xl"
                >
                  <Text>contact</Text>
                </a>
              </li>
            </ul>
            <div className="flex md:flex-1 flex-row items-start justify-center pl-[15px] w-[14%] md:w-full">
              <Img
                className="h-[29px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[60px] ml-[17px]"
                onClick={() => navigate("/yourorders")}
                leftIcon={
                  <div className="h-[29px] mb-px mr-[0] w-[29px] bg-gray-900">
                    <Img
                      className="h-[29px]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                  </div>
                }
              >
                <div className="leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-gray-900 text-left">
                  (3)
                </div>
              </Button>
              <Img
                className="h-[29px] ml-[17px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
          </div>
        </Header>
        <div className="bg-gray-900 flex flex-col gap-2 items-center justify-start p-[59px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
              size="txtRubikBold40WhiteA700"
            >
              our menu
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
                  / menu
                </span>
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1200px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[427.35px] pr-[422.65px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              latest dishes
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[70px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_pizza1png.png"
                    alt="pizza1png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    fast food
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[124.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      delicious pizza 01
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10.01px] items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <Text
                          className="absolute left-[0] text-gray-600 text-lg top-[20%]"
                          size="txtRubikRegular18"
                        >
                          $
                        </Text>
                        <div className="absolute bottom-[0] md:h-[22px] h-[23px] right-[0] w-3/4">
                          <Text
                            className="absolute bottom-[0] left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                          <Text
                            className="absolute right-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            /-
                          </Text>
                        </div>
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_dish1png.png"
                    alt="dish1png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    dishes
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[169.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      main dish 01
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <Text
                          className="absolute left-[0] text-gray-600 text-lg top-[20%]"
                          size="txtRubikRegular18"
                        >
                          $
                        </Text>
                        <div className="absolute bottom-[0] md:h-[22px] h-[23px] right-[0] w-3/4">
                          <Text
                            className="absolute bottom-[0] left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                          <Text
                            className="absolute right-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            /-
                          </Text>
                        </div>
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_burger1png.png"
                    alt="burger1png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    fast food
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[87.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      chezzy hamburger 01
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <Text
                          className="absolute left-[0] text-gray-600 text-lg top-[20%]"
                          size="txtRubikRegular18"
                        >
                          $
                        </Text>
                        <div className="absolute bottom-[0] md:h-[22px] h-[23px] right-[0] w-3/4">
                          <Text
                            className="absolute bottom-[0] left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                          <Text
                            className="absolute right-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            /-
                          </Text>
                        </div>
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_dessert1png.png"
                    alt="dessert1png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    dessert
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[102.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      delicious dessert 01
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10.01px] items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_drink1png.png"
                    alt="drink1png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    drinks
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[159.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      fresh drink 01
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_dish2png.png"
                    alt="dish2png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    dishes
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[166.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      main dish 02
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_burger2png.png"
                    alt="burger2png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    fast food
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[84.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      chezzy hamburger 02
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10.01px] items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_pizza2png.png"
                    alt="pizza2png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    fast food
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[120.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      delicious pizza 02
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
                <div className="border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[21px] sm:px-5 w-full">
                  <Img
                    className="h-[250px] sm:h-auto object-cover w-full"
                    src="images/img_dessert2png.png"
                    alt="dessert2png"
                  />
                  <Text
                    className="mt-[11px] text-[17px] text-gray-600"
                    size="txtRubikRegular17"
                  >
                    dessert
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-2 pb-[0.2px] md:pr-10 sm:pr-5 pr-[99.8px] w-[286px]">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRubikRegular20"
                    >
                      delicious dessert 02
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2.5 w-[286px]">
                    <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[163.27px] w-full">
                      <div className="md:h-[22px] h-[30px] pt-1.5 relative w-full">
                        <div className="absolute bottom-[0] md:h-[15px] h-[23px] left-[0] w-[62%]">
                          <Text
                            className="absolute left-[0] text-gray-600 text-lg top-[0]"
                            size="txtRubikRegular18"
                          >
                            $
                          </Text>
                          <Text
                            className="absolute bottom-[0] right-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtRubikRegular25Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[0] text-gray-600 text-lg"
                          size="txtRubikRegular18"
                        >
                          /-
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default OurMenuPage;
