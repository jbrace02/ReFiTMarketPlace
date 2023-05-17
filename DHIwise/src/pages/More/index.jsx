import React from "react";

import { Text } from "components";

const MorePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-start justify-start mx-auto p-[110px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-start justify-start mb-[145px] md:ml-[0] ml-[35px] w-[48%] md:w-full">
          <Text
            className="text-black_900 text-left tracking-[-0.20px]"
            as="h1"
            variant="h1"
          >
            <>
              Need more pages?
              <br />
              or custom UX/UI service
            </>
          </Text>
          <Text
            className="font-medium mt-6 text-black_900 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Contact me
          </Text>
          <div className="flex flex-row gap-3 items-start justify-start mt-[17px] w-[51%] md:w-full">
            <Text
              className="font-normal not-italic text-blue_gray_300 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Email:
            </Text>
            <Text
              className="font-normal not-italic text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              vosidiy@gmail.com
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start mt-[7px] w-[52%] md:w-full">
            <Text
              className="font-normal not-italic text-blue_gray_300 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Chat:
            </Text>
            <a
              href="https://t.me/vosidiy"
              className="font-normal not-italic text-base text-black_900 text-left underline w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text className="">https://t.me/vosidiy</Text>
            </a>
          </div>
          <div className="flex flex-row gap-5 items-start justify-start mt-[7px] w-[55%] md:w-full">
            <Text
              className="font-normal not-italic text-blue_gray_300 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Web:
            </Text>
            <a
              href="https://dribbble.com/vosidiy"
              className="font-normal not-italic text-base text-black_900 text-left underline w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text className="">dribbble.com/vosidiy</Text>
            </a>
          </div>
          <div className="flex flex-row gap-[31px] items-start justify-start mt-[7px] w-[83%] md:w-full">
            <Text
              className="font-normal not-italic text-blue_gray_300 text-left w-auto"
              as="h2"
              variant="h2"
            >
              CV:
            </Text>
            <a
              href="https://www.linkedin.com/in/vosidiy "
              className="font-normal not-italic text-base text-black_900 text-left underline w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text className="">https://www.linkedin.com/in/vosidiy </Text>
            </a>
          </div>
          <Text
            className="font-medium mt-[22px] text-blue_gray_300 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Example:
          </Text>
          <Text
            className="font-normal mt-[9px] not-italic text-black_900 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Subject: Hire you for project
          </Text>
          <Text
            className="font-normal mt-2 not-italic text-black_900 text-left"
            as="h2"
            variant="h2"
          >
            <>
              Message: Hi I would like to hire you for _____ project.The project
              is about _______
              <br />
              Need to design following pages ______ <br />
              Could you send me information about cost estimation and timing....
              <br />
              Thanks
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default MorePage;
