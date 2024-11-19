/* eslint-disable react-hooks/rules-of-hooks */
import { defineQuery, PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { notFound } from "next/navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import DirectionsWalkOutlinedIcon from "@mui/icons-material/DirectionsWalkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Datepicker } from "flowbite-react";
// import { useState } from "react";
// import { Tooltip } from 'react-tooltip'
// import { Tooltip, Button } from "flowbite-react";
import Tooltip from "../tooltip";

const SUMMARY_QUERY = defineQuery(`*[
    _type == "topSummary"
][0]{
    _id, 
    countryTitle, 
    year,
    summaryDesc->,
    accomodation->,
    meals->,
    activity->,
    itinerary->,
    summaryDetails,
    booking->,
    image,
    code,
    advantageList
  }`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Summary() {
  const { data: summaries } = await sanityFetch({ query: SUMMARY_QUERY });
//   const element = document.getElementsByClassName("trip-year svg");
//   console.log("element", element)
//   console.log("summary", summaries);
  //   console.log("summaryDetails", summaryDetail)

  if (!summaries) {
    notFound()
  }

  const {
    countryTitle,
    year,
    summaryDesc,
    accomodation,
    meals,
    activity,
    itinerary,
    summaryDetails,
    booking,
    image,
    code,
    advantageList,
  } = summaries;

  //   console.log("imageTitle", Array.isArray(summaries.image));
//   console.log("accomodation", accomodation);
  const topImage = image ? urlFor(image)?.width(1200).height(1200).url() : null;
  //   const [toolbar, setToolbar] = useState(true);

  return (
    <div className="flex flex-row">
      <div className="container mx-auto">
        <Image
          src={topImage || "https://via.placeholder.com/550x310"}
          alt={countryTitle || "Best Country"}
          className="mx-auto overflow-hidden object-cover object-center sm:w-full"
          height="1200"
          width="1200"
        />
      </div>
      <div className="container ml-12 text-gray-700">
        <div className="flex flex-col pl-3">
          <div className="flex flex-row mb-4">
            <CalendarMonthIcon fontSize="small" />
            <h4 className="font-medium ml-2 mr-4">Trip Year</h4>
            <Datepicker value={null} label="2024" className="trip-year" />
          </div>
          <h1 className="text-3xl font-bold">
            <PortableText value={summaryDesc?.title || []} />
          </h1>
          <p className="mt-4">
            <PortableText value={summaryDesc?.description || []} />
          </p>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <CalendarMonthIcon />
                <h5 className="font-semibold">{accomodation?.title}</h5>
              </div>
              <div className="flex flex-row">
                <p>{accomodation?.descriptionOne} </p>
                <Tooltip message={accomodation?.toolbar}>
                  <HelpOutlineOutlinedIcon fontSize="small" />
                </Tooltip>
                {/* <Tooltip content="Tooltip content">
                <Button>Default tooltip</Button>
                </Tooltip> */}
              </div>
              <p>{accomodation?.descriptionTwo}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <RestaurantOutlinedIcon />
                <h5 className="font-semibold">{meals?.title}</h5>
              </div>
              <p>{meals?.descriptionOne}</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <DirectionsWalkOutlinedIcon />
                <h5 className="font-semibold">{activity?.title}</h5>
              </div>
              <div className="flex flex-row">
                <p>{activity?.descriptionOne}</p>
                <Tooltip message={activity?.toolbar}>
                  <HelpOutlineOutlinedIcon fontSize="small" />
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col ml-48">
              <div className="flex flex-row">
                <PlaceOutlinedIcon />
                <h5 className="font-semibold">{itinerary?.title}</h5>
              </div>
              <p>{itinerary?.descriptionOne}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between border border-gray-200 rounded px-2 py-2 mt-6">
          <div className="flex flex-col mr-4">
            <h5 className="font-bold">{booking?.title}</h5>
            <p>{booking?.descriptionOne}</p>
          </div>
          <ArrowForwardIosOutlinedIcon />
        </div>
        <div className="flex flex-row mt-5">
          <h5 className="font-semibold mr-2">Trip Code:</h5>
          <p>{code}</p>
        </div>
      </div>
    </div>
  );
}

// export function Title() {
//     return (
//         <h1>
//             <span
//                     onMouseEnter={() => setToolbar(false)}
//                     onMouseLeave={() => setToolbar(true)}
//                 ></span>
//         </h1>
//     )

// }
