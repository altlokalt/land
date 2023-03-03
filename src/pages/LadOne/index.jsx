import React from "react";

import {
  Text,
  Img,
  Button,
  Line,
  List,
  PagerIndicator,
  SelectBox,
} from "components";

const LadOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] pb-[17px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="bg-white_A700 border-b-[1px] border-black_901 border-solid flex items-center justify-center w-[100%]">
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="h-[36px] sm:h-[38px] md:h-[44px] relative w-[100%]">
                    <div className="flex flex-row gap-[22px] h-[100%] items-center justify-center ml-[auto] mr-[40px] my-[auto] sm:pl-[20px] pl-[22px] py-[8px] w-[auto]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body15"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Become a{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola vendor
                          </a>
                        </Text>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body15"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Shop{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola Home
                          </a>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-teal_900 flex md:flex-row md:gap-[] md:gap-x-[] md:gap-y-[] h-[100%] inset-[0] items-center md:items-start justify-end md:justify-start sm:m-[1px] md:m-[4px] m-[auto] p-[10px] md:p-[15px] w-[100%]">
                      <div className="flex items-start justify-start mr-[687px] sm:w-[100%] w-[auto]">
                        <Text
                          className="md:flex md:flex-row font-semibold md:h-[1px] md:items-end sm:items-start md:justify-between sm:justify-start sm:m-[1px] md:min-h-[2px] sm:min-w-[45px] md:min-w-[899px] sm:p-[1px] text-center text-cyan_A100 sm:w-[945px] md:w-[999px] w-[auto]"
                          variant="body13"
                        >
                          Altlokalt-no - Kan sørger for samme og neste dags
                          levering
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                    <div className="md:flex md:flex-row sm:gap-[5px] md:h-[50px] sm:h-[60px] h-[76px] sm:m-[5px] p-[9px] relative w-[100%]">
                      <ul className="absolute flex flex-row h-[max-content] sm:hidden inset-y-[0] items-center justify-end my-[auto] right-[11%] w-[33%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[8%] rounded-[50%]">
                          <Img
                            src="images/img_search.svg"
                            className="h-[44px] rounded-[50%]"
                            alt="search"
                          />
                        </li>
                        <li className="sm:w-[100%] sm:my-[10px] w-[8%]">
                          <Button className="bg-white_A700 flex h-[44px] items-center justify-center p-[13px] rounded-[50%]">
                            <Img
                              src="images/img_vector_black_901.svg"
                              className="h-[16px]"
                              alt="Vector"
                            />
                          </Button>
                        </li>
                        <li className="sm:w-[100%] sm:my-[10px] text-center">
                          <Button className="bg-white_A700 border-[1px] border-black_901 border-solid cursor-pointer font-semibold pb-[11.42px] pl-[17px] pr-[17.81px] pt-[9.58px] rounded-[22px] text-[15px] text-black_901 text-center">
                            Logg in
                          </Button>
                        </li>
                        <li className="ml-[11px] sm:w-[100%] sm:my-[10px] text-center">
                          <Button className="bg-black_901 cursor-pointer font-semibold pb-[11.42px] pl-[17px] pr-[17.11px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-white_A700">
                            Kom i gang
                          </Button>
                        </li>
                      </ul>
                      <div className="absolute bottom-[0] flex flex-row gap-[4px] md:gap-[84px] items-start justify-center pb-[6.84px] pr-[8.3px] right-[38%] w-[auto]">
                        <Button className="bg-black_901 cursor-pointer font-semibold md:hidden min-w-[117px] pb-[11.45px] pl-[17px] pr-[17.11px] pt-[9.55px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                          Get started
                        </Button>
                        <Img
                          src="images/img_appstorebadgeb853888asvg.svg"
                          className="md:flex md:gap-[5px] h-[44px] w-[131px]"
                          alt="appstorebadgeb853888asvg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-black_901 border-solid border-t-[1px] flex flex-row items-center justify-start p-[12px] w-[100%]">
                    <div className="flex flex-row md:gap-[20px] md:items-center items-end md:justify-between justify-end md:m-[0] ml-[auto] mr-[81px] md:pb-[4px] md:pl-[20px] md:pr-[10px] pr-[3px] md:pt-[10px] py-[3px] md:w-[100%] w-[79%]">
                      <div className="flex flex-row gap-[0.97px] items-center justify-start my-[3px] w-[auto]">
                        <Text
                          className="capitalize font-semibold text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Bli en partner
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_901.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-row gap-[4.59px] items-center justify-start ml-[32px] my-[3px] w-[auto]">
                        <Text
                          className="capitalize font-semibold text-black_901 text-left w-[auto]"
                          variant="body13"
                        >
                          Community and advice
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_901.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowdown One"
                        />
                      </div>
                      <Text
                        className="font-semibold mb-[2px] ml-[36px] mt-[7px] text-black_901 text-left w-[auto]"
                        variant="body13"
                      >
                        Bli en leverandør
                      </Text>
                      <Text
                        className="font-normal ml-[38px] my-[4px] not-italic text-black_901 text-left w-[auto]"
                        variant="body13"
                      >
                        Få inspirasjon
                      </Text>
                      <div className="md:h-[19px] h-[22px] mb-[3px] ml-[32px] mr-[733px] py-[3px] relative w-[8%]">
                        <Text
                          className="font-normal m-[auto] not-italic text-black_901 text-left w-[auto]"
                          variant="body13"
                        >
                          Utforsk leverandør
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_901_5x8.svg"
                          className="absolute h-[5px] inset-y-[0] my-[auto] right-[2%] w-[auto]"
                          alt="arrowdown Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col md:px-[20px] relative w-[100%]">
            <div className="flex flex-col items-start justify-start mx-[auto] pb-[69px] w-[100%]">
              <div className="border-b-[1px] border-black_901 border-solid flex flex-row items-center justify-center w-[100%]">
                <div className="bg-white_A700 flex md:flex-col flex-row gap-[17px] items-center justify-center p-[24px] sm:px-[20px] md:w-[100%] w-[63%]">
                  <div className="bg-gray_100 h-[56px] sm:h-[91px] md:ml-[0] ml-[23px] relative rounded-[28px] md:w-[100%] w-[85%]">
                    <div className="absolute h-[56px] sm:h-[91px] inset-[0] justify-center sm:m-[1px] m-[auto] sm:overflow-hidden sm:p-[1px] sm:relative w-[100%]">
                      <div className="bg-gray_100 h-[56px] m-[auto] rounded-[28px] w-[100%]"></div>
                      <div className="absolute flex sm:flex-col flex-row gap-[-2px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] pr-[2px] right-[0] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[6px] items-center justify-start pr-[7px] py-[7px] sm:w-[100%] w-[96%]">
                          <Img
                            src="images/img_location.svg"
                            className="h-[25px] mb-[3px] w-[25px]"
                            alt="location"
                          />
                          <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_800 text-left w-[auto]"
                              variant="body12"
                            >
                              LeverandørListe
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close"
                        />
                      </div>
                    </div>
                    <div className="absolute h-[42px] sm:h-[66px] inset-y-[0] left-[0] my-[auto] pr-[2px] sm:w-[100%] w-[507px]">
                      <div className="flex m-[auto] w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[6px] items-center justify-start my-[auto] sm:pr-[20px] md:pr-[40px] pr-[81.98px] py-[8px] w-[auto]">
                          <Img
                            src="images/img_location_black_901.svg"
                            className="h-[25px] w-[25px]"
                            alt="location One"
                          />
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_800 text-left w-[auto]"
                              variant="body11"
                            >
                              Tønsberg, Norge
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] ml-[-2px] my-[auto] w-[24px] z-[1]"
                          alt="close One"
                        />
                      </div>
                      <Line className="absolute bg-gray_400 h-[28px] inset-y-[0] my-[auto] right-[5%] w-[1px]" />
                    </div>
                  </div>
                  <Button className="bg-black_901 cursor-pointer font-semibold min-w-[77px] mr-[55px] pb-[17.42px] pl-[25px] pr-[24.92px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[15px] text-center text-white_A700 w-[auto]">
                    Søk
                  </Button>
                </div>
              </div>
              <div className="border-b-[1px] border-black_901 border-solid flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-end p-[37px] sm:px-[20px] w-[100%]">
                  <Text
                    className="font-semibold md:ml-[0] ml-[18px] mt-[10px] text-gray_901 text-left w-[auto]"
                    variant="body4"
                  >
                    Utforsk leverandører etter kategori
                  </Text>
                  <div className="sm:h-[1079px] h-[141px] md:h-[215px] md:ml-[0] ml-[18px] relative md:w-[100%] w-[98%]">
                    <List
                      className="absolute sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 inset-[0] justify-center m-[auto] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_arrowup_bluegray_800.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="arrowup"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Garasjesalg
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Fotografer
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera_bluegray_800.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera One"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Videografer
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[11px] items-center justify-start pb-[16px] px-[16px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_user.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="user"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Blomsterhandlere
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_globe.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="globe"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Beauty
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="menu"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Planners
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_music.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="music"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Bands and DJs
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="volume"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body13"
                        >
                          Catering
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[12px] items-center justify-start pb-[16px] px-[16px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_weddingcakea9ac9b82svg.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="weddingcakea9ac9b82svg"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body14"
                        >
                          Bakerier
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col sm:flex-row gap-[13px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_900 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_champagneglass.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="champagneglass"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_901 text-center w-[auto]"
                          variant="body14"
                        >
                          Bar and beverage
                        </Text>
                      </div>
                    </List>
                    <div className="absolute border-b-[1px] border-gray_902 border-solid sm:flex sm:flex-row h-[141px] inset-[0] justify-center m-[auto] w-[52%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_51 border-black_901 border-solid border-t-[1px] font-roboto md:h-[353px] h-[361px] md:ml-[0] ml-[168px] relative md:w-[100%] w-[92%]">
                <div className="absolute bg-gray_51 border-black_901 border-solid border-t-[1px] h-[353px] inset-y-[0] left-[0] my-[auto] w-[94%]"></div>
                <div className="absolute flex flex-col sm:flex-row gap-[26px] md:h-[auto] h-[max-content] inset-[0] items-start justify-start m-[auto] max-w-[1752px] sm:overflow-hidden pt-[36px] w-[100%]">
                  <div className="flex flex-row gap-[1167.1px] md:gap-[40px] items-start justify-start max-w-[1562px] sm:px-[20px] md:px-[40px] px-[48px] w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Leverandører
                      </Text>
                    </div>
                    <Text
                      className="bg-gray_300 font-medium h-[40px] justify-center pl-[27px] pr-[35px] sm:px-[20px] py-[10px] rounded-[8px] text-center text-gray_900 w-[114px]"
                      variant="body10"
                    >
                      Se alle
                    </Text>
                  </div>
                  <div className="flex md:flex-row md:gap-[23px] sm:gap-[] sm:gap-x-[] sm:gap-y-[] sm:hidden md:items-center items-start md:justify-center justify-start md:m-[1px] sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:overflow-auto md:overflow-scroll overflow-visible md:p-[1px] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] md:relative md:w-[100%] w-[auto]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-center justify-end md:m-[0] m-[1px] overflow-hidden p-[0] relative top-[3px] w-[100%]">
                      <div className="sm:absolute flex sm:flex-row gap-[20px] grid-cols-1 sm:grid-cols-[] sm:items-center sm:justify-start m-[0] sm:overflow-hidden p-[0] sm:p-[10px] relative md:w-[100%] w-[44%]">
                        <div className="flex flex-col gap-[9px] sm:hidden items-start justify-start my-[auto] w-[57%]">
                          <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left tracking-[0.03px] w-[auto]"
                              variant="body8"
                            >
                              altlokalt.com Databaser(minfuel)
                            </Text>
                          </div>
                          <div className="bg-gradient  flex items-center justify-start rounded-[8px] md:w-[100%] w-[86%]">
                            <div className="bg-gradient1  flex items-center justify-start rounded-[8px] w-[100%]">
                              <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.27px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <Img
                                  src="images/img_div_3.png"
                                  className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                  alt="div One"
                                />
                                <div className="absolute bg-gradient2  h-[180px] inset-[0] m-[auto] pb-[53px] pl-[46.69px] pr-[46.31px] pt-[52.2px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[320px]">
                                  <div className="flex flex-col gap-[14.8px] h-[100%] items-start justify-start m-[auto] w-[auto]">
                                    <Text
                                      className="text-left text-white_A700 tracking-[0.17px] w-[auto]"
                                      variant="body1"
                                    >
                                      Coming soon
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                      variant="body10"
                                    >
                                      2 days 16 hours and 22 minutes
                                    </Text>
                                  </div>
                                  <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="images/img_div_4.png"
                                      className="h-[180px] m-[auto] object-cover w-[320px]"
                                      alt="div Two"
                                    />
                                    <Text
                                      className="absolute bg-gray_900_7a font-medium h-[24px] justify-center pl-[28px] pr-[24px] sm:px-[20px] py-[3px] right-[3%] rounded-[4px] text-left text-white_A700 top-[4%] w-[90px]"
                                      variant="body12"
                                    >
                                      Gratis
                                    </Text>
                                    <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                      <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                        <Text
                                          className="font-medium text-center text-white_A700 w-[auto]"
                                          variant="body10"
                                        >
                                          Rask responder
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[9px] sm:hidden items-center justify-start ml-[-37px] my-[auto] w-[49%] z-[1]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left tracking-[0.03px] w-[auto]"
                              variant="body8"
                            >
                              Hobbyister
                            </Text>
                          </div>
                          <div className="bg-gradient  flex items-center justify-start rounded-[8px] w-[100%]">
                            <div className="bg-gradient1  flex items-center justify-start rounded-[8px] w-[100%]">
                              <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[228.69px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <Img
                                  src="images/img_div_13.png"
                                  className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                  alt="div Four"
                                />
                                <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_6.png"
                                    className="h-[180px] m-[auto] object-cover w-[320px]"
                                    alt="div Five"
                                  />
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[96%]">
                                    <Text
                                      className="bg-yellow_600 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_900 text-left text-shadow-ts w-[auto]"
                                      variant="body12"
                                    >
                                      Nytt
                                    </Text>
                                    <Text
                                      className="bg-gray_900_7a font-medium h-[24px] mt-[4px] pl-[3px] py-[3px] rounded-[4px] text-left text-white_A700 w-[83px]"
                                      variant="body12"
                                    >
                                      Leverandører
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                    <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                      <Text
                                        className="font-medium text-center text-white_A700 w-[auto]"
                                        variant="body10"
                                      >
                                        1 comment
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[44%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left tracking-[0.03px] w-[auto]"
                              variant="body8"
                            >
                              Leie inn Database
                            </Text>
                          </div>
                          <div className="bg-gradient  flex items-center justify-start rounded-[8px] w-[100%]">
                            <div className="bg-gradient1  flex items-center justify-start rounded-[8px] w-[100%]">
                              <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <Img
                                  src="images/img_div_14.png"
                                  className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                  alt="div Eight"
                                />
                                <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_8.png"
                                    className="h-[180px] m-[auto] object-cover w-[320px]"
                                    alt="div One"
                                  />
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[98%]">
                                    <Text
                                      className="bg-yellow_600 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_900 text-left text-shadow-ts w-[auto]"
                                      variant="body12"
                                    >
                                      Nyttig
                                    </Text>
                                    <Text
                                      className="bg-gray_900_7a font-medium h-[24px] mt-[4px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                      variant="body12"
                                    >
                                      Leverandører
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                    <div className="flex items-center justify-start pl-[4px] pr-[12.48px] py-[4px] w-[auto]">
                                      <Text
                                        className="font-medium text-center text-white_A700 w-[auto]"
                                        variant="body10"
                                      >
                                        4 comments
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_900 text-left tracking-[0.03px] w-[auto]"
                              variant="body8"
                            >
                              Kjøp Database
                            </Text>
                          </div>
                          <div className="bg-gradient  flex items-center justify-start rounded-[8px] w-[100%]">
                            <div className="bg-gradient1  flex items-center justify-start rounded-[8px] w-[100%]">
                              <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <Img
                                  src="images/img_div_15.png"
                                  className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                  alt="div Nine"
                                />
                                <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_10.png"
                                    className="h-[180px] m-[auto] object-cover w-[320px]"
                                    alt="div One One"
                                  />
                                  <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[97%]">
                                    <Text
                                      className="bg-yellow_600 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_900 text-left text-shadow-ts w-[auto]"
                                      variant="body12"
                                    >
                                      NYTT
                                    </Text>
                                    <Text
                                      className="bg-gray_900_7a font-medium h-[24px] mt-[4px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                      variant="body12"
                                    >
                                      Leverandører
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:w-[100%] w-[9%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900 text-left tracking-[0.03px] w-[auto]"
                            variant="body8"
                          >
                            servicerelatert
                          </Text>
                        </div>
                        <div className="bg-gradient  flex items-center justify-start rounded-[8px] w-[100%]">
                          <div className="bg-gradient1  flex items-start justify-start rounded-[8px] w-[auto]">
                            <div className="h-[180px] relative rounded-[8px] w-[100%]">
                              <Img
                                src="images/img_div_11.png"
                                className="h-[180px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                alt="div Ten"
                              />
                              <div className="absolute inset-[0] justify-center m-[auto] overflow-x-auto w-[100%]">
                                <div className="h-[180px] relative rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_12.png"
                                    className="h-[180px] ml-[auto] my-[auto] object-cover w-[100%]"
                                    alt="div Eleven"
                                  />
                                  <div className="absolute bg-gray_900_8e bottom-[14%] h-[80px] right-[9%] rounded-[50%] w-[80px]"></div>
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
              <div className="border-b-[1px] border-black_901 border-solid flex flex-col sm:flex-row font-inter items-start justify-start mt-[2px] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-normal sm:ml-[0] ml-[15px] not-italic text-gray_901 text-left w-[auto]"
                    variant="body4"
                  >
                    Alt på disse Populære Stedene
                  </Text>
                  <Button className="bg-black_901 cursor-pointer font-semibold min-w-[104px] pl-[17px] pr-[17.72px] py-[12px] rounded-[22px] text-[13px] text-center text-white_A700 w-[auto]">
                    Kom i gang
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row sm:gap-[111px] gap-[40px] grid-cols-6 items-start justify-start sm:m-[1px] sm:overflow-auto sm:p-[2px] pl-[16px] py-[40px] sm:relative sm:rounded-[1px] sm:top-[44px] md:w-[100%] w-[auto]">
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_popularnewyor.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="popularnewyor"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold left-[28%] min-w-[64px] pl-[17px] pr-[18.34px] py-[9px] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Oslo
                    </Button>
                  </div>
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_popularchicagodbe164cejpg.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="popularchicagodbe164cejpg"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[95px] mx-[auto] pl-[18px] pr-[16.84px] py-[9px] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Drammen
                    </Button>
                  </div>
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_popularlosang.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="popularlosang"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[109px] mx-[auto] pl-[16px] pr-[17.28px] py-[9px] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Tønsberg
                    </Button>
                  </div>
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_popularphilade.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="popularphilade"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold left-[24%] min-w-[97px] pl-[18px] pr-[17.63px] py-[9px] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Kongberg
                    </Button>
                  </div>
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_populardallas2b20bd78jpg.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="populardallas2b20bd78jpg"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold min-w-[98px] pl-[17px] pr-[16.86px] py-[9px] right-[21%] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Stavanger
                    </Button>
                  </div>
                  <div className="h-[310px] relative w-[100%]">
                    <Img
                      src="images/img_popularmiami0b1c9a99jpg.png"
                      className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="popularmiami0b1c9a99jpg"
                    />
                    <Button className="absolute bg-gray_51 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[81px] mx-[auto] pl-[18px] pr-[18.3px] py-[9px] rounded-[19px] text-[13px] text-black_901 text-center w-[auto]">
                      Bergen
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-black_901 border-solid flex font-inter items-center justify-start mt-[38px] pb-[16px] px-[16px] w-[100%]">
                <div className="bg-light_blue_900 flex items-center justify-start p-[40px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <div className="flex flex-col gap-[32px] items-center justify-start my-[16px] w-[100%]">
                    <div className="md:h-[148px] sm:h-[280px] h-[69px] relative w-[100%]">
                      <div className="absolute md:h-[148px] sm:h-[280px] h-[62px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <div className="absolute flex inset-x-[0] items-start justify-start mx-[auto] pr-[2px] pt-[2px] top-[0] w-[100%]">
                          <Text
                            className="not-italic text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Lokal bedriftskatalog etter bransjer
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-[4px] items-start justify-center sm:m-[1px] md:p-[50px] pb-[6.84px] pr-[8.3px] right-[5%] w-[auto]">
                          <Button className="bg-black_901 cursor-pointer font-semibold sm:hidden min-w-[117px] pb-[11.45px] pl-[17px] pr-[17.11px] pt-[9.55px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                            Get started
                          </Button>
                          <Img
                            src="images/img_appstorebadgeb853888asvg.svg"
                            className="h-[44px] sm:m-[90px] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] w-[131px]"
                            alt="appstorebadgeb853888asvg One"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[25px] inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                        <Text
                          className="font-normal sm:m-[-10px] not-italic sm:p-[-3px] text-left text-white_A700 w-[auto]"
                          variant="body11"
                        >
                          Bidra til å bringe liv igjen til de lokale
                          leverandørene
                        </Text>
                        <a
                          className="font-semibold sm:hidden text-[15px] text-center text-white_A700 underline w-[auto]"
                          href="javascript:"
                        >
                          Er dette din bedrift, nettside eller hva? Legg til
                          eller list det opp her.
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center sm:justify-around justify-end md:m-[0] m-[1px] p-[20px] w-[100%]">
                        <div className="flex flex-row items-start justify-evenly pb-[2px] w-[12%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body10"
                          >
                            Reisebyrå i
                          </Text>
                          <div className="flex flex-row gap-[9.06px] items-start justify-start pt-[2px] w-[auto]">
                            <a
                              className="font-semibold sm:m-[10px] sm:p-[22px] text-[15px] text-center text-white_A700 underline w-[auto]"
                              href="javascript:"
                            >
                              Horten, Norge
                            </a>
                            <Img
                              src="images/img_edit.svg"
                              className="h-[16px] w-[16px]"
                              alt="edit"
                            />
                          </div>
                        </div>
                        <div className="flex items-start justify-start ml-[12px] pb-[0.84px] pr-[6.7px] w-[auto]">
                          <Text
                            className="font-normal sm:hidden not-italic text-left text-white_A700 w-[auto]"
                            variant="body11"
                          >
                            | Startpris: 1.950 NOK
                          </Text>
                        </div>
                        <Button
                          className="bg-gray_51 border-[1px] border-light_blue_900 border-solid flex items-center justify-center ml-[34px] px-[25px] py-[19px] rounded-[27px] sm:px-[20px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_call.svg"
                              className="mr-[2px] text-center"
                              alt="call"
                            />
                          }
                        >
                          <div className="sm:bg-colors bg-transparent cursor-pointer sm:flex sm:flex-1 font-semibold sm:gap-[2px] sm:m-[2px] sm:p-[2px] sm:relative text-[14px] text-center text-light_blue_900 sm:w-[100%]">
                            Shuffle leverandører
                          </div>
                        </Button>
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <List
                          className="flex-col gap-[32px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 md:flex-col gap-[32px] grid-cols-4 items-center justify-between my-[0] overflow-hidden w-[100%]">
                            <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body14"
                                >
                                  Venues
                                </Text>
                                <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_af14be8c0e004.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="af14be8c0e004"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body11"
                                  >
                                    Etcetera Etcetera
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Thirteen"
                                />
                                <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                  <a
                                    className="font-semibold sm:ml-[0] ml-[172px] text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="mr-[170px] sm:mt-[0] mt-[2px] text-black_901 text-center w-[auto]"
                                    variant="body16"
                                  >
                                    Venues
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body13"
                                >
                                  Photographers
                                </Text>
                                <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_68c3c4d786114.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="68c3c4d786114"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-center justify-start pl-[122.88px] pr-[123.13px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-semibold text-black_901 text-center w-[auto]"
                                      variant="body11"
                                    >
                                      Photography By Verdi
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                      variant="body13"
                                    >
                                      Starting price $3,500
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div One Two"
                                />
                                <div className="flex flex-row gap-[9.34px] items-center justify-start pl-[149.56px] pr-[147.09px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <a
                                    className="font-semibold text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body14"
                                  >
                                    Photographers
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body13"
                                >
                                  Videographers
                                </Text>
                                <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="bg-gray_101 flex items-center justify-start w-[100%]">
                                        <Img
                                          src="images/img_7e23bd889f8a4.png"
                                          className="h-[286px] md:h-[auto] object-cover w-[100%]"
                                          alt="7e23bd889f8aFour"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-center justify-start pl-[78.38px] pr-[78.63px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-semibold text-black_901 text-center w-[auto]"
                                      variant="body11"
                                    >
                                      J&S Media Wedding Films & Photo
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                      variant="body13"
                                    >
                                      Starting price $4,500
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Two Two"
                                />
                                <div className="flex flex-row gap-[11.44px] items-center justify-start pl-[150.67px] pr-[151.89px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <a
                                    className="font-semibold text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body15"
                                  >
                                    Videographers
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body14"
                                >
                                  Catering
                                </Text>
                                <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_d7ed6a6f30eb4.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="d7ed6a6f30ebFour"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body11"
                                  >
                                    Pinch Food Design
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Three Two"
                                />
                                <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                  <a
                                    className="font-semibold sm:ml-[0] ml-[168px] text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="mr-[169px] sm:mt-[0] mt-[3px] text-black_901 text-center w-[auto]"
                                    variant="body16"
                                  >
                                    Catering
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                            <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body13"
                                >
                                  Cakes and desserts
                                </Text>
                                <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="bg-gray_101 flex items-center justify-start w-[100%]">
                                        <Img
                                          src="images/img_91d8f449edee4.png"
                                          className="h-[286px] md:h-[auto] object-cover w-[100%]"
                                          alt="91d8f449edeeFour"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body11"
                                  >
                                    Conti&#39;s Pastry Shoppe
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Fourteen"
                                />
                                <div className="flex flex-row gap-[11.55px] items-center justify-start pl-[136.42px] pr-[139.03px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <a
                                    className="font-semibold text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body15"
                                  >
                                    Cakes and desserts
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body14"
                                >
                                  Florists
                                </Text>
                                <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_8314d694e23e4.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="8314d694e23eFour"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-center justify-start pl-[18.61px] pr-[18.41px] pt-[16px] sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[366px] text-black_901 text-center"
                                      variant="body10"
                                    >
                                      Enchanted Designs Long Island (Photo
                                      Booths and Flower Walls)
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                      variant="body14"
                                    >
                                      Starting price $350
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div One Three"
                                />
                                <div className="flex flex-row gap-[10.61px] items-center justify-start pl-[175.06px] pr-[174.33px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <a
                                    className="font-semibold text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="text-black_901 text-center w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    Florists
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body13"
                                >
                                  Bands and DJs
                                </Text>
                                <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_b8dd716d4e614.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="b8dd716d4e614"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[341px] text-black_901 text-center"
                                    variant="body10"
                                  >
                                    VSmusic4u Professional Wedding Ceremony &
                                    Cocktail Musicians
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Two Three"
                                />
                                <div className="flex flex-row gap-[12.34px] items-center justify-start pl-[150.11px] pr-[151.55px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <a
                                    className="font-semibold text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body15"
                                  >
                                    Bands and DJs
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                                <Text
                                  className="capitalize font-normal not-italic text-black_901 text-center w-[auto]"
                                  variant="body14"
                                >
                                  Beauty
                                </Text>
                                <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                        <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                          <div className="bg-gray_101 h-[286px] relative w-[100%]">
                                            <Img
                                              src="images/img_f98dd40d09984.png"
                                              className="h-[286px] m-[auto] object-cover w-[100%]"
                                              alt="f98dd40d09984"
                                            />
                                            <PagerIndicator
                                              className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                              count={5}
                                              activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                              activeIndex={1}
                                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                              selectedWrapperCss="inline-block mx-[4.00px]"
                                              unselectedWrapperCss="inline-block mx-[4.00px]"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Text
                                    className="font-semibold text-black_901 text-center w-[auto]"
                                    variant="body11"
                                  >
                                    Alessarro Beauty
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_800.svg"
                                  className="h-[47px] w-[428px]"
                                  alt="div Three Three"
                                />
                                <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-center w-[100%]">
                                  <a
                                    className="font-semibold sm:ml-[0] ml-[173px] text-[14px] text-black_901 text-center underline w-[auto]"
                                    href="javascript:"
                                  >
                                    More
                                  </a>
                                  <Text
                                    className="mr-[172px] sm:mt-[0] mt-[3px] text-black_901 text-center w-[auto]"
                                    variant="body16"
                                  >
                                    Beauty
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-black_901 border-solid flex md:flex-col flex-row font-inter md:gap-[40px] items-start justify-between mt-[80px] w-[100%]">
                <div className="border-black_901 border-r-[1px] border-solid flex md:flex-1 items-center justify-start p-[16px] md:w-[100%] w-[67%]">
                  <div className="h-[767px] relative w-[100%]">
                    <Img
                      src="images/img_herobackground.png"
                      className="h-[767px] m-[auto] object-cover rounded-[16px] w-[100%]"
                      alt="herobackground"
                    />
                    <Img
                      src="images/img_heroforeground.png"
                      className="absolute h-[690px] inset-[0] justify-center m-[auto] object-cover w-[88%]"
                      alt="heroforeground"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[64px] pt-[5px] md:w-[100%] w-[30%]">
                  <Text
                    className="font-medium text-gray_901 text-left tracking-[-0.40px] w-[auto]"
                    variant="body9"
                  >
                    Alle lokale leverandører
                  </Text>
                  <div className="flex items-start justify-start mt-[28px] sm:w-[100%] w-[auto]">
                    <Text
                      className="leading-[48.00px] md:max-w-[100%] max-w-[469px] not-italic text-black_901 text-left tracking-[-1.92px]"
                      as="h4"
                      variant="h4"
                    >
                      La oss finne din perfekte tilbyder match
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start mt-[23px] sm:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start pr-[4px] py-[4px] w-[100%]">
                      <div className="bg-black_901 h-[8px] mb-[40px] sm:mt-[0] mt-[7px] rounded-[3px] w-[7px]"></div>
                      <Text
                        className="sm:flex-1 font-normal leading-[32.00px] not-italic text-gray_901 text-left sm:w-[100%] w-[95%]"
                        variant="body8"
                      >
                        Oppdag, forhør med og bokleverandører som passer for
                        ditt behov
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                      <div className="bg-black_901 h-[8px] sm:mt-[0] my-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-normal sm:mt-[0] mt-[4px] not-italic text-gray_901 text-left w-[auto]"
                        variant="body9"
                      >
                        Gjennomsiktige priser og leverandører etter ditt
                        budsjett
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start pr-[3px] py-[3px] w-[100%]">
                      <div className="bg-black_901 h-[8px] my-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_901 text-left w-[auto]"
                        variant="body9"
                      >
                        Direkte annonser fra realistisk tilbyderne
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-black_901 cursor-pointer font-semibold min-w-[127px] mt-[32px] pb-[17.42px] pl-[28px] pr-[27.52px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                    Leter etter
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inter md:gap-[20px] items-center justify-evenly mt-[56px] w-[100%]">
                <div className="border-b-[1px] border-black_901 border-solid flex md:flex-1 items-center justify-start p-[12px] md:w-[100%] w-[67%]">
                  <div className="bg-pink_700 flex items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[16px] w-[100%]">
                    <Img
                      src="images/img_heroforeground.png"
                      className="h-[832px] md:h-[auto] object-cover w-[86%]"
                      alt="details1c8e27f6fpng"
                    />
                  </div>
                </div>
                <div className="bg-white_A700 border-b-[1px] border-black_901 border-l-[1px] border-solid flex md:flex-1 flex-col md:gap-[40px] gap-[67px] items-center justify-end p-[40px] sm:px-[20px] md:w-[100%] w-[34%]">
                  <div className="flex items-start justify-start mt-[24px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium leading-[48.00px] md:max-w-[100%] max-w-[438px] text-black_901 text-left tracking-[-1.92px]"
                      as="h3"
                      variant="h3"
                    >
                      Bare forhåndsscreenede leverandører du kan stole på
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="border-b-[1px] border-black_901 border-solid flex flex-col gap-[16px] items-start justify-start py-[34px] sm:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[27px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_901 text-left w-[auto]"
                          variant="body11"
                        >
                          Den morsomme måten å finne
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[549px] not-italic text-black_901 text-left"
                        variant="body10"
                      >
                        Bruk våre smarte filtre for å finne akkurat det du vil
                        ha blant de endeløse leverandørene som passer eller kan
                        passe perfekt{" "}
                      </Text>
                      <Button className="bg-black_901 cursor-pointer font-semibold min-w-[120px] pb-[10.86px] pl-[20px] pr-[19.52px] pt-[10.14px] rounded-[22px] text-[14px] text-center text-white_A700 w-[auto]">
                        Ta meg ditt!
                      </Button>
                    </div>
                    <div className="border-b-[1px] border-gray_400 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[53%]">
                        <Text
                          className="font-normal not-italic text-gray_600 text-left w-[auto]"
                          variant="body12"
                        >
                          Only vendors who match our values
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_600.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright One"
                        />
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_400 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                      <div className="flex flex-row items-center justify-start md:w-[100%] w-[57%]">
                        <Text
                          className="font-normal not-italic text-gray_600 text-left w-[auto]"
                          variant="body11"
                        >
                          Curate and connect from one open tab
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_600.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Two"
                        />
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_400 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                      <div className="flex flex-row items-center justify-start md:w-[100%] w-[46%]">
                        <Text
                          className="font-normal not-italic text-gray_600 text-left w-[auto]"
                          variant="body11"
                        >
                          Get inspired by Real Weddings
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_600.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Three"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-end sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                      <div className="flex flex-row items-center justify-start mr-[auto] md:w-[100%] w-[26%]">
                        <Text
                          className="font-normal not-italic text-gray_600 text-left w-[auto]"
                          variant="body12"
                        >
                          Ask the experts
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_600.svg"
                          className="h-[22px] ml-[4px] w-[auto]"
                          alt="arrowright Four"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[1px] border-black_901 border-solid flex font-inter items-center justify-start mt-[23px] w-[100%]">
                <List
                  className="md:flex md:flex-col flex-row gap-[16.5px] grid sm:grid-cols-1 md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] sm:items-start justify-center sm:justify-start sm:m-[1px] sm:overflow-auto sm:p-[0] py-[16px] w-[99%]"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-row sm:h-[] md:ml-[0] relative w-[100%]">
                    <div className="bg-teal_300 h-[470px] my-[auto] sm:w-[100%] w-[470px]">
                      <div className="bg-teal_300 h-[470px] m-[auto] w-[99%]"></div>
                      <Img
                        src="images/img_promorealwedd.png"
                        className="absolute h-[470px] inset-[0] justify-center m-[auto] object-cover w-[470px]"
                        alt="promorealwedd"
                      />
                    </div>
                    <div className="bg-light_blue_900 flex flex-col items-start justify-center ml-[-6.84px] my-[auto] p-[20px] w-[50%] z-[1]">
                      <Text
                        className="leading-[44.00px] md:ml-[0] ml-[27px] mt-[63px] text-cyan_A100 text-left tracking-[0.20px] sm:w-[100%] w-[94%]"
                        as="h5"
                        variant="h5"
                      >
                        Kjenn priser og detaljer om alt
                      </Text>
                      <Text
                        className="font-normal leading-[22.86px] md:ml-[0] ml-[27px] mt-[14px] not-italic text-cyan_A100 text-left sm:w-[100%] w-[81%]"
                        variant="body10"
                      >
                        Utforsk for å finne ekte, nylige og awsome leverandører
                        bak favorittene dine.
                      </Text>
                      <Button className="bg-cyan_A100 cursor-pointer font-semibold mb-[123px] min-w-[89px] md:ml-[0] ml-[27px] mt-[32px] pb-[11.42px] pl-[18px] pr-[17.48px] pt-[9.58px] rounded-[22px] text-[15px] text-bluegray_900 text-center w-[auto]">
                        Endelig
                      </Button>
                    </div>
                  </div>
                  <Line className="self-center h-[502px] bg-black_901 w-[1px]" />
                  <div className="flex sm:grid md:ml-[0] relative w-[100%]">
                    <div className="bg-cyan_900 h-[470px] sm:h-[47px] my-[auto] sm:w-[100%] w-[470px]">
                      <div className="md:bg-colors1 bg-cyan_900 sm:flex h-[470px] sm:h-[] m-[auto] sm:w-[100px] w-[99%]"></div>
                      <Img
                        src="images/img_promosamples57d77cbbjpg.png"
                        className="absolute h-[470px] inset-[0] justify-center m-[auto] object-cover w-[470px]"
                        alt="promosamples57d77cbbjpg"
                      />
                    </div>
                    <div className="bg-cyan_900 flex flex-col items-start justify-start ml-[-6.84px] my-[auto] p-[48px] sm:px-[20px] md:px-[40px] w-[50%] z-[1]">
                      <Text
                        className="leading-[44.00px] mt-[52px] text-left text-light_green_100 tracking-[0.20px] sm:w-[100%] w-[93%]"
                        as="h5"
                        variant="h5"
                      >
                        Leverandører etter ditt budsjett
                      </Text>
                      <Text
                        className="font-normal mt-[7px] not-italic text-left text-light_green_100 w-[auto]"
                        variant="body10"
                      >
                        Premium kvalitet, perfekt priset
                      </Text>
                      <Button className="bg-light_green_100 cursor-pointer font-semibold mb-[74px] min-w-[187px] mt-[44px] pb-[11.42px] pl-[17px] pr-[17.69px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-cyan_900 w-[auto]">
                        Choose free samples
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-bluegray_900 flex items-center justify-center mt-[-42.25px] mx-[auto] p-[22px] sm:px-[20px] rounded-[16px] w-[99%] z-[1]">
              <div className="flex items-center justify-start mb-[81px] mt-[77px] w-[100%]">
                <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start pl-[49.11px] pr-[48.92px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-white_A700 tracking-[-1.92px] w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Vår kundeservice teamet er alltid her for å støtte og
                      fylle opp alle dine behov
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[58%]">
                    <div className="border-b-[1px] border-solid border-white_A700 flex items-center justify-start w-[100%]">
                      <SelectBox
                        className="font-normal not-italic py-[34px] sm:text-[38px] md:text-[44px] text-[48px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                        placeholderClassName="text-white_A700"
                        name="button One"
                        placeholder="FAQ"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700.svg"
                            className="h-[16px] mr-[0] w-[16px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <SelectBox
                      className="font-normal not-italic py-[34px] sm:text-[36px] md:text-[42px] text-[46px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                      placeholderClassName="text-white_A700"
                      name="button Two"
                      placeholder="Råd"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LadOnePage;
