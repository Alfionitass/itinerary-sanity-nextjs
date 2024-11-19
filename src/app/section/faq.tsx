import { defineQuery, PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { notFound } from "next/navigation";

const FAQ_QUERY = defineQuery(`*[
    _type == "faqTab"
][0]{
    _id, 
    title, 
    faqOffer[]->{question, answer},
  }`);

export default async function Faq() {
  const { data: faq } = await sanityFetch({ query: FAQ_QUERY });
  //   console.log("faq", faq);

  if (!faq) {
    notFound();
  }

  const {title, faqOffer } = faq;
  //   console.log("faqOffer", faqOffer);
  //   const gg = faqOffer?.map((item) => item.question);
  // const titles= faq?.title

  return (
    <div className="ml-8 mb-12 text-gray-700">
      <h4 className="text-3xl font-bold mb-6">{title}</h4>
      {faqOffer?.map((item) => (
        <Accordion key={Math.random()} className="faq mb-2 rounded-none" collapseAll={true}>
          <AccordionPanel className="">
            <AccordionTitle className="text-gray-700 text-lg font-bold pl-8 py-4">{item.question}</AccordionTitle>
            <AccordionContent className="text-gray-700 text-lg pl-8 py-4">
              <PortableText value={item.answer || []} />
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      ))}
    </div>
  );
}
