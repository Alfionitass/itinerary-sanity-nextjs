import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import { notFound } from "next/navigation";

const HIGHLIGHT_QUERY = defineQuery(`*[
    _type == "highlightTab"
][0]{
    _id, 
    title, 
    subtitle,
    linkName,
    link,
    highlightOffer[]->{details},
  }`);

export default async function Highlight() {
  const { data: highlight } = await sanityFetch({ query: HIGHLIGHT_QUERY });

  //  const hDetails = highlight.highlightOffer.map((item) => item.details)
  // console.log("highlight", hDetails)

  if (!highlight) {
    notFound();
  }

  const { title, subtitle, linkName, link, highlightOffer } = highlight;

  return (
    <div className="flex flex-row ml-8 mb-12">
      <div className="flex flex-col w-4/5">
        <h4 className="text-2xl font-bold text-red-800">{title}</h4>
        <h4 className="text-gray-500 text-sm my-4">{subtitle}</h4>
        <button className="bg-red-800 w-2/5 py-4">
          <Link className="" href={link || "#"}>
            <h2 className="text-base font-semibold text-white">{linkName}</h2>
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {highlightOffer?.map((item) => (
          <div key={Math.random()} className="flex flex-row">
            <CheckIcon
              className="text-red-800 mr-4 font-bold"
              fontSize="large"
            />
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
