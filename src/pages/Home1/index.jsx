import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Home1Page = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="flex flex-col font-rubik items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 border-b border-gray-900 border-solid flex items-center justify-center pb-[1.6px] md:px-5 px-[163.2px] w-full" />
        <div className="flex flex-col items-start justify-start max-w-[1160px] mt-5 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-center justify-start pb-2.5 w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-start justify-start max-w-[1160px] mx-2.5 pb-10">
                    <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-600"
                          size="txtRubikRegular25"
                        >
                          order online
                        </Text>
                        <div className="flex flex-col items-center justify-start pl-[103.83px] pr-[93.67px] md:px-10 sm:px-5 py-2.5 w-[572px] sm:w-full">
                          <Text
                            className="capitalize sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900 w-auto"
                            size="txtRubikBold50"
                          >
                            delicious pizza
                          </Text>
                        </div>
                        <Button
                          className="common-pointer capitalize cursor-pointer leading-[normal] min-w-[161px] mt-2.5 text-center text-xl underline"
                          onClick={() => navigate("/ourmenu")}
                          shape="square"
                          color="yellow_600"
                          size="xs"
                          variant="fill"
                        >
                          see menus
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start pb-[2.4px] w-full">
                        <Img
                          className="h-[572px] md:h-auto object-cover w-full"
                          src="images/img_homeimg1png.png"
                          alt="homeimg1png"
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-yellow-600 w-2" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900_6c w-2"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex gap-2 h-3 items-start justify-start max-w-[1160px] pb-[2.4px] pt-[1.6px] md:px-10 sm:px-5 px-[560px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-yellow-600 w-2"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-black-900_6c w-2"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1200px] mt-5 mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start pl-[415.09px] pr-[410.91px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              food category
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
            orientation="horizontal"
          >
            <div className="border border-gray-900 border-solid flex flex-1 flex-col gap-[21.4px] items-start justify-start p-[21.6px] sm:px-5 w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[235px] sm:w-full"
                src="images/img_cat1png.png"
                alt="cat1png"
              />
              <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[73.19px] pr-[71.36px] md:px-10 sm:px-5 w-full">
                <Text
                  className="text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  fast food
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col gap-[21.4px] items-start justify-start p-[21.6px] sm:px-5 w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[235px] sm:w-full"
                src="images/img_cat2png.png"
                alt="cat2png"
              />
              <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[59.23px] pr-[56.32px] md:px-10 sm:px-5 w-full">
                <Text
                  className="text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  main dishes
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col gap-[21.4px] items-start justify-start p-[21.6px] sm:px-5 w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[235px] sm:w-full"
                src="images/img_cat3png.png"
                alt="cat3png"
              />
              <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[86.91px] pr-[84.64px] md:px-10 sm:px-5 w-full">
                <Text
                  className="text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  drinks
                </Text>
              </div>
            </div>
            <div className="border border-gray-900 border-solid flex flex-1 flex-col gap-[21.4px] items-start justify-start p-[21.6px] sm:px-5 w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[235px] sm:w-full"
                src="images/img_cat4png.png"
                alt="cat4png"
              />
              <div className="flex flex-col items-center justify-start pb-[0.2px] pl-[74.74px] pr-[72.81px] md:px-10 sm:px-5 w-full">
                <Text
                  className="text-center text-gray-900 text-xl w-auto"
                  size="txtRubikBold20"
                >
                  desserts
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1200px] mx-auto p-5 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1160px] pl-[427.35px] pr-[422.65px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 underline uppercase w-auto"
              size="txtRubikBold40"
            >
              latest dishes
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[30px] md:px-10 sm:px-5 px-[70px] w-full">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1160px] mt-5 pl-[514.41px] pr-[514.43px] pt-2.5 md:px-10 sm:px-5 w-full">
            <Button
              className="capitalize cursor-pointer leading-[normal] min-w-[131px] text-center text-xl"
              shape="square"
              color="yellow_600"
              size="xs"
              variant="fill"
            >
              veiw all
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
