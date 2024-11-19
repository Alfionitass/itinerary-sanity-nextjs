// import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import Summary from "./section/summary"
import Itinerary from "./section/itinerary";
import About from "./section/about";
import Highlight from "./section/highlight";
import Faq from "./section/faq";
import Footer from "./section/footer";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const PAGES_QUERY = defineQuery(`*[
  _type == "page"
]{_id, title}`);

export default async function IndexPage() {
  const { data: pages } = await sanityFetch({ query: PAGES_QUERY });
  // console.log("pages", pages)

  

  // return(
  //   <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
  //     <h1 className="text-4xl font-bold tracking-tighter">Best of {Italy}</h1>
  //     <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
  //       {pages.map((item) => (
  //         <li className="bg-white p-4 rounded-lg" key={item._id}>
  //             <h2 className="text-xl font-semibold">{item?.title}</h2>
            
  //         </li>
  //       ))}
  //     </ul>
  //   </main>
  // );
  return(
    <div className="container mr-4 mb-8">
      {pages.map((item) => (
        <h1 className="text-4xl text-gray-700 font-bold tracking-tighter ml-8 my-4" key={item._id}>Best of {item.title}</h1>
      ))}
      <Summary />
      <Itinerary />
      <About />
      <Highlight />
      <Faq />
      <Footer />
    </div>
  )
}