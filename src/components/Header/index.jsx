import React from "react";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1200px] pl-5 pr-[19.99px] py-5 w-full">
          <div className="flex flex-col items-start justify-start pb-[0.6px] pr-[9.06px] pt-[3px] w-auto">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
              size="txtRubikRegular25Gray900"
            >
              yum-yum 😋
            </Text>
          </div>
          <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-end px-[9px] w-[35%] md:w-full common-row-list">
            <li>
          { <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center text-gray-900 text-xl min-w-[60px] ml-[22px]"
                  onClick={() => navigate("/home")}  
              >
                home
              </Button> }
            </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[22px] text-gray-900 text-xl"
                >
                 <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[60px] ml-[17px]"
                  onClick={() => navigate("/aboutus")}  
                 >
                    about
                </Button>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[21px] text-gray-900 text-xl"
                >
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[60px] ml-[17px]"
                  onClick={() => navigate("/ourmenu")}  
                >
                    menu
                </Button>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[21px] text-gray-900 text-xl"
                >
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[60px] ml-[17px]"
                  onClick={() => navigate("/yourorders")}  
                >
                    orders
                </Button>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[22px] text-gray-900 text-xl"
                >
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[60px] ml-[17px]"
                  onClick={() => navigate("/contactus")}  
                >
                    contact
                </Button>
                </a>
              </li>
            </ul>
          <div className="flex md:flex-1 flex-row items-start justify-center pl-[15px] w-[14%] md:w-full">
            <Img
              className="h-[29px] ml-4 mr-4"
              src="images/img_search.svg"
              alt="search"
            />
            <div className="h-[30px] ml-[17px] pb-[1.6px] relative w-[60px]">
              <Img
                className="absolute h-[29px] left-[0] top-[0] w-[29px]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
            <Img
              className="h-[29px] ml-4"
              src="images/img_user.svg"
              alt="user"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
