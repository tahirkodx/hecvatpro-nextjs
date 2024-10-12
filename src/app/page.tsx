import Image from "next/image";
import Banner from "@/components/banner";
import { Button } from "@/components/inputs";
import TextContent from "@/components/textContent";
import TestimonialCard from "@/components/testimonialCard";
import Testimonial from "@/components/testimonialCard/testimonial";
import Brands from "@/components/brands";
import formatMessage from "@/helpers/formattedMessage";
import { Content } from "@/constants/index";
import { Card, CardBodyContent, Footer } from "@/components/global";
import FooterMenu from "@/components/menu/footerMenu";

export default function Home() {
  return (
    <div className="grid justify-items-center bg-gray-default">
      <Banner>
        <div className="text-center lg:pt-32 pt-10">
          <h1 className="text-white lg:text-7xl text-4xl font-bold">
            {Content.TITLE}
          </h1>
          <h2 className="text-gray-50 lg:text-3xl text-lg font-medium lg:py-16 py-2 px-6">
            {Content.SUB_TITLE}
          </h2>
        </div>
        <Button className="font-bold lg:text-2xl text-base m-5">
          {Content.DISCOVERY_CALL}
        </Button>
        <TestimonialCard
          names={formatMessage(Content.TESTIMONIAL.NAMES, { count: 17 })}
          description={Content.TESTIMONIAL.DESCRIPTION}
          linkText={Content.TESTIMONIAL.LINKTEXT}
          linkUrl="#"
          isDark
        />
        <Brands />
      </Banner>
      <TextContent
        title={Content.WHY_US.TITLE}
        subTitle={Content.WHY_US.SUB_TITLE}
        htmlContent={Content.WHY_US.HTML_CONTENT}
        prose="lg:prose"
      />
      <Card>
        <CardBodyContent
          title={Content.WANT_TO.TITLE}
          list={Content.WANT_TO.LIST}
          buttonText={Content.DISCOVERY_CALL}
        />
      </Card>
      <TestimonialCard
        names={formatMessage(Content.WANT_TO.TESTIMONIAL.NAMES, { count: 8 })}
        description={Content.WANT_TO.TESTIMONIAL.DESCRIPTION}
        linkText={Content.WANT_TO.TESTIMONIAL.LINKTEXT}
        linkUrl="#"
      />
      <div className="grid bg-black-default justify-items-center rounded-[30px] mb-8 mx-4">
        <h1 className="text-yellow-50 text-xl font-semibold py-8">
          {Content.CASE_STUDY.TITLE}
        </h1>
        <h2 className="text-white lg:w-1/2 w-4/5 lg:text-4xl text-xl font-bold pb-4 pl-4">
          {Content.CASE_STUDY.SUB_TITLE}
        </h2>
        <div
          className="lg:w-[850px] text-gray-50 lg:text-2xl text-base font-medium pl-2 prose"
          dangerouslySetInnerHTML={{ __html: Content.CASE_STUDY.CONTENT }}
        ></div>
        <Button
          className="font-bold lg:text-xl text-base m-5 my-20 justify-self-center text-white"
          varient="outline"
        >
          {Content.CASE_STUDY.BUTTON_TEXT}
        </Button>
      </div>

      <Testimonial />
      <TextContent
        title={Content.ABOUT_ME.TITLE}
        subTitle={Content.ABOUT_ME.SUB_TITLE}
        htmlContent={Content.ABOUT_ME.HTML_CONTENT}
        imageSrc="dave.jpg"
        prose="prose"
      />

      <Card className="mb-24">
        <CardBodyContent
          title={Content.DO_NEED.TITLE}
          list={Content.DO_NEED.LIST}
          buttonText={Content.DISCOVERY_CALL}
          note={Content.DO_NEED.NOTE}
        />
      </Card>

      <Footer>
        <TextContent
          title={Content.FOOTER.CONTENT.TITLE}
          subTitle={Content.FOOTER.CONTENT.SUB_TITLE}
          htmlContent={Content.FOOTER.CONTENT.HTML_CONTENT}
          prose="prose-dark"
          dark
        />
        <Card dark className="mb-8">
          <CardBodyContent
            title={Content.FOOTER.WANT_TO.TITLE}
            list={Content.FOOTER.WANT_TO.LIST}
            buttonText={Content.DISCOVERY_CALL}
            dark
          />
        </Card>
        <div className="grid justify-items-center">
          <FooterMenu />
          <h3 className="lg:text-5xl text-xl text-gray-30 font-bold lg:pt-24 pt-8">
            The HECVAT Pro effect
          </h3>
        </div>
      </Footer>
    </div>
  );
}
