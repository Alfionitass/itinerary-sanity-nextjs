import { defineQuery, PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import PlaceIcon from '@mui/icons-material/Place';
import { notFound } from "next/navigation";

const ABOUT_QUERY = defineQuery(`*[
    _type == "aboutTab"
][0]{
    _id, 
    title, 
    subtitle,
    aboutOffer[]->{details},
  }`);

  export default async function About() {
    const { data: about } = await sanityFetch({ query: ABOUT_QUERY });
    // const aboutDetails = about.aboutOffer.map((item) => item.details)
    // console.log("about", about)
    if (!about) {
        notFound()
    }

    const { title, subtitle, aboutOffer } = about;

    return(
        <div className="flex flex-row ml-8 mb-12 text-gray-700">
            <div className="flex flex-col w-full">
                <h4 className="text-3xl font-bold">{title}</h4>
                <h4 className="text-army text-xl font-bold mt-4">{subtitle}</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {aboutOffer?.map((item) => (
                    <div key={Math.random()} className="flex flex-row text-base">
                        <PlaceIcon className="text-army mr-4" fontSize="large" />
                        <PortableText value={item.details || []} />
                    </div>
                ))}
                
            </div>
        </div>
    )
  }