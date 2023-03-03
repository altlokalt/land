import React from "react";

import { Text, Img, List, Line } from "components";

const KontaktPage = () => {
  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="border-colors2 flex flex-col items-center justify-start pt-[220px] md:w-[100%] w-[auto]">
          <div className="flex flex-col items-center justify-start max-w-[1260px] mx-[auto] pb-[58px] md:px-[20px] w-[100%]">
            <Text
              className="text-bluegray_910 text-left tracking-[-0.20px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Kontakt oss
            </Text>
            <div className="flex flex-col gap-[19px] items-center justify-start mt-[14px] sm:px-[20px] px-[23px] md:w-[100%] w-[auto]">
              <Text
                className="text-center text-gray_921 tracking-[-0.05px] w-[auto]"
                variant="body5"
              >
                Vi er her for deg.
              </Text>
              <Text
                className="leading-[39.06px] text-center text-gray_921 tracking-[-0.05px] w-[100%]"
                variant="body5"
              >
                <span className="md:text-[26px] sm:text-[24px] text-gray_921 text-[28px] font-inter font-medium">
                  Lurer du på noe, sjekk vårt{" "}
                </span>
                <a
                  href="javascript:"
                  className="md:text-[26px] sm:text-[24px] text-light_blue_800 text-[28px] font-inter font-normal underline not-italic"
                >
                  hjelpesenter
                </a>
                <span className="md:text-[26px] sm:text-[24px] text-gray_921 text-[28px] font-inter font-medium">
                  . Finner du ikke svar, ring oss på (+47) 462 80 188 eller send
                  en e-post til{" "}
                </span>
                <a
                  href="javascript:"
                  className="md:text-[26px] sm:text-[24px] text-light_blue_800 text-[28px] font-inter font-normal underline not-italic"
                >
                  post@folkeinvest.no
                </a>
              </Text>
            </div>
            <div className="flex items-center justify-start mt-[60px] pb-[40px] w-[100%]">
              <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[22px] md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="bg-green_400_19 flex md:flex-1 flex-col gap-[18px] items-start justify-start pb-[41.88px] pl-[84px] pr-[88.64px] pt-[84px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[30px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_910 text-left tracking-[-0.07px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Søke kapital
                    </Text>
                    <Text
                      className="leading-[33.48px] md:max-w-[100%] max-w-[427px] not-italic text-gray_921 text-left tracking-[-0.05px]"
                      variant="body6"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        Ønsker du å hente kapital? Du kan lese mer om hvordan
                        det fungerer{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        her
                      </a>
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        {" "}
                        eller{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        ta kontakt
                      </a>
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        {" "}
                        med oss hvis du lurer på noe mer.
                      </span>
                    </Text>
                  </div>
                  <div className="bg-light_blue_800_19 flex md:flex-1 flex-col gap-[18px] items-start justify-start pb-[41.88px] pl-[84px] pr-[107.33px] pt-[84px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[30px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_910 text-left tracking-[-0.07px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Tekniske problemer?
                    </Text>
                    <Text
                      className="leading-[33.48px] not-italic text-gray_921 text-left tracking-[-0.05px]"
                      variant="body6"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        Da kan du ta kontakt via mail eller ta kontakt per
                        telefon.
                        <br />
                        <br />
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        support@folkeinvest.no
                      </a>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[22px] md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="bg-light_blue_800_19 flex md:flex-1 flex-col gap-[17px] items-start justify-start pb-[42.34px] pl-[84px] pr-[92.74px] pt-[84px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[30px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_910 text-left tracking-[-0.07px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jobber du i media?
                    </Text>
                    <Text
                      className="leading-[33.48px] not-italic text-gray_921 text-left tracking-[-0.05px]"
                      variant="body6"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        Du kan lese våre pressemeldinger, samt finne informasjon
                        og bilder i vårt{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        presserom.
                        <br />
                      </a>
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        <br />
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        presse@folkeinvest.no
                      </a>
                    </Text>
                  </div>
                  <div className="bg-green_400_19 flex md:flex-1 flex-col gap-[18px] items-start justify-start pb-[75.34px] pl-[84px] pr-[105.17px] pt-[84px] sm:px-[20px] md:px-[40px] rounded-bl-[10px] rounded-br-[30px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_910 text-left tracking-[-0.07px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Fremtid i Folkeinvest?
                    </Text>
                    <Text
                      className="leading-[33.48px] not-italic text-gray_921 text-left tracking-[-0.05px]"
                      variant="body6"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-gray_921 text-[24px] font-inter font-normal">
                        Vi liker bra folk, personlighet trumfer det meste!
                        <br />
                        <br />
                      </span>
                      <a
                        href="javascript:"
                        className="md:text-[22px] sm:text-[20px] text-light_blue_800 text-[24px] font-inter font-normal underline"
                      >
                        post@folkeinvest.no
                      </a>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bluegray_910 flex flex-col gap-[10px] items-center justify-start pb-[70px] pt-[120px] sm:px-[20px] px-[226px] md:px-[40px] md:w-[100%] w-[auto]">
            <div className="flex items-center justify-start max-w-[1060px] mx-[auto] p-[9px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start mb-[31px] md:w-[100%] w-[97%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_folder_green_407.svg"
                    className="h-[89px] md:mt-[0] mt-[15px] w-[auto]"
                    alt="folder"
                  />
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[40px] items-end justify-start sm:w-[100%] w-[auto]">
                    <List
                      className="sm:flex-col flex-row gap-[39px] grid grid-cols-2 sm:w-[100%] w-[54%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start py-[5px] w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Kontakt
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Trondheim
                        </Text>
                        <Text
                          className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Molde
                        </Text>
                        <Text
                          className="font-normal mb-[2px] mt-[15px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Oslo
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[6px] w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Informasjon
                        </Text>
                        <Text
                          className="font-normal mt-[26px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Hjelp
                        </Text>
                        <Text
                          className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Investeringsrisiko
                        </Text>
                        <Text
                          className="font-normal mt-[14px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                          variant="body10"
                        >
                          Statistikk
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                        variant="body10"
                      >
                        Sosiale medier
                      </Text>
                      <div className="flex items-start justify-end pr-[7px] py-[7px] w-[100%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[95%]">
                          <div className="flex flex-row gap-[25px] items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              Facebook
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              LinkedIn
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[26px] items-center justify-start mt-[17px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              Instagram
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              Spotify
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[35px] items-center justify-start mt-[14px] md:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              YouTube
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                              variant="body10"
                            >
                              Twitter
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-[40px] gap-[79px] items-end justify-start w-[auto]">
                    <div className="flex flex-row gap-[7px] items-center justify-start py-[6px] w-[100%]">
                      <Img
                        src="images/img_arrowup_white_a700.svg"
                        className="h-[11px] w-[auto]"
                        alt="arrowup"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                        variant="body10"
                      >
                        Til toppen
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.05px] w-[auto]"
                      variant="body10"
                    >
                      Vilkår
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_621 h-[2px] w-[100%]" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[516.25px] items-end justify-start max-w-[1010px] mx-[auto] w-[100%]">
              <Text
                className="font-normal leading-[28.00px] not-italic text-bluegray_210 text-left tracking-[-0.05px]"
                variant="body12"
              >
                Folkeinvest er et uavhengig verdipapir- <br /> foretak under
                tilsyn av Finanstilsynet.
              </Text>
              <div className="flex sm:flex-1 flex-col items-end justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_210 text-right tracking-[-0.05px] w-[auto]"
                  variant="body12"
                >
                  © Folkeinvest 2023{" "}
                </Text>
                <Text
                  className="font-normal mt-[12px] not-italic text-bluegray_210 text-right tracking-[-0.05px] w-[auto]"
                  variant="body12"
                >
                  Alle rettigheter reservert.{" "}
                </Text>
                <Text
                  className="font-normal mt-[25px] not-italic text-bluegray_210 text-right tracking-[-0.05px] w-[auto]"
                  variant="body12"
                >
                  Organisasjonsnummer 916 545 061.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KontaktPage;
