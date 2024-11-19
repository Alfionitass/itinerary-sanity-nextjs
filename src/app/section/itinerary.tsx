import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Card,
} from "flowbite-react";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";
import CheckIcon from "@mui/icons-material/Check";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import PrintIcon from "@mui/icons-material/Print";

const ITINERARY_QUERY = defineQuery(`*[
    _type == "itineraryTab"
][0]{
    _id, 
    title, 
    subtitle,
    instructions1,
    instructions2,
    itineraryOffer[]
  }`);

const ITINERARY_QUERY2 = defineQuery(`*[
    _type == "itinerary"
]{
    _id, 
    orderId,
    itineraryTitle, 
    experience,
    subtitle,
    town,
    schedule1,
    schedule2,
    image,
    imageDescription,
    details[]->{title},
    details2[]-> {image, imageTitle, subtitle, tag, age, price, additionalBook},
  } | order(orderId asc)`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Itinerary() {
  const { data: itinerary } = await sanityFetch({ query: ITINERARY_QUERY });
  const { data: itineraryList } = await sanityFetch({
    query: ITINERARY_QUERY2,
  });
  //   console.log("itinerary", itinerary);
  //   console.log("itineraryList", itineraryList);

  if (!itinerary || !itineraryList) {
    notFound();
  }

  // const { image } = itineraryList

  const getImage = (image: any) => {
    return image ? urlFor(image)?.url() : null;
  };
  //   console.log(getDetailIcon)
  //   const image = getImage
  //   console.log("image", image)
  //   const customTheme: CustomFlowbiteTheme = {
  //     h2: {
  //       width: 100%
  //     }
  //   };

  return (
    <div className="text-gray-700 ml-8 my-12">
      <h4 className="text-3xl font-bold">{itinerary.title}</h4>
      <p className="mt-2 font-medium text-gray-500">{itinerary.subtitle}</p>
      <div className="flex flex-row text-tosca font-semibold mt-7 mb-6">
        <h6 className="mx-4">
          <SimCardDownloadIcon />
          {itinerary.instructions1}
        </h6>
        <h6>
          <PrintIcon />
          {itinerary.instructions2}
        </h6>
      </div>
      {itineraryList?.map((item) => (
        <Accordion
          key={Math.random()}
          collapseAll={true}
          className="itinerary bg-white-500 hover:bg-white-600 text-gray-700 rounded-md mb-4"
        >
          <AccordionPanel className="bg-white-500 hover:bg-white-600 md-absolute w-full">
            <AccordionTitle className="accordion">
              <div className="flex flex-row">
                <Image
                  src={
                    getImage(item.image) ||
                    "https://via.placeholder.com/550x310"
                  }
                  alt={item.subtitle || "Best Country"}
                  className="aspect-video overflow-hidden sm:w-3/12"
                  height="300"
                  width="300"
                />
                <div className="flex flex-col items-start justify-center ml-6">
                  <h5 className="font-bold mb-3.5">{item.itineraryTitle}</h5>
                  <div className="flex flex-row mb-3.5">
                    <p className="text-gray-700 font-bold">{item.subtitle}</p>
                    <p className="text-sm font-normal p-0.5 ml-6">
                      {item.town}
                    </p>
                  </div>
                  <div className="flex flex-row">
                    {item.schedule1 ? (
                      <p className="mr-6">
                        {" "}
                        <DirectionsBusOutlinedIcon className="mr-3" />
                        {item.schedule1}
                      </p>
                    ) : (
                      ""
                    )}
                    {item.schedule2 ? (
                      <p>
                        <Diversity3OutlinedIcon className="mr-3" />
                        {item.schedule2}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </AccordionTitle>
            <AccordionContent key={Math.random()} className="mx-8">
              <div className="flex flex-row justify-between text-gray-700 my-8">
                <div className="flex flex-col">
                  <h5 className="font-bold">{item.itineraryTitle}</h5>
                  <h4 className="text-2xl font-bold mt-4 mb-8">
                    {item.subtitle}
                  </h4>
                  {item.details?.map((detail) => (
                    <div key={Math.random()} className="flex flex-row mb-4">
                      {detail.title && detail.title.indexOf("Transfer") > -1 ? (
                        <DirectionsBusOutlinedIcon />
                      ) : detail.title &&
                        detail.title.indexOf("Welcome") > -1 ? (
                        <Diversity3OutlinedIcon />
                      ) : detail.title &&
                        detail.title.indexOf("Accommodation") > -1 ? (
                        <DarkModeOutlinedIcon />
                      ) : detail.title && detail.title.indexOf("Meals") > -1 ? (
                        <FlatwareOutlinedIcon />
                      ) : (
                        ""
                      )}
                      <p className="ml-2">{detail.title}</p>
                    </div>
                  ))}
                </div>
                <Image
                  src={
                    getImage(item.image) ||
                    "https://via.placeholder.com/550x310"
                  }
                  alt={item.subtitle || "Best Country"}
                  className="aspect-video rounded-md overflow-hidden"
                  height="550"
                  width="550"
                />
              </div>
              {!item.details2 ? (
                ""
              ) : (
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    Included and optional experiences
                  </h4>
                  <div className="flex flex-row">
                    {item.details2?.map((value) => (
                      <Card
                        key={Math.random()}
                        className="max-w-sm mr-4 mb-6"
                        renderImage={() => (
                          <Image
                            width={500}
                            height={500}
                            src={
                              getImage(value.image) ||
                              "https://via.placeholder.com/550x310"
                            }
                            alt={value.imageTitle || "image"}
                            className="aspect-video h-52"
                          />
                        )}
                        horizontal
                      >
                        <div className="mx-4 my-4">
                          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                            {value.imageTitle}
                          </h5>
                          <p className="font-normal dark:text-gray-400">
                            {value.subtitle}
                          </p>
                          <p className="font-bold text-gray-900 mt-6">
                            <CheckIcon fontSize="medium" className="mr-2" />
                            {value.tag}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      ))}
    </div>
  );
}
