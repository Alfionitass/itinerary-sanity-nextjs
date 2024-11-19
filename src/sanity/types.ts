/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question?: string;
  answer?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Highlight = {
  _id: string;
  _type: "highlight";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  details?: string;
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  details?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Meals = {
  _id: string;
  _type: "meals";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Accomodation = {
  _id: string;
  _type: "accomodation";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Welcome = {
  _id: string;
  _type: "welcome";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Transfer = {
  _id: string;
  _type: "transfer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type ItineraryDetails = {
  _id: string;
  _type: "itineraryDetails";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  imageTitle?: string;
  subtitle?: string;
  tag?: "included with trip" | "additional cost applies";
  age?: "Adults" | "Kids";
  price?: string;
  additionalBook?: string;
};

export type Itinerary = {
  _id: string;
  _type: "itinerary";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  itineraryTitle?: string;
  experience?: string;
  subtitle?: string;
  town?: string;
  schedule1?: string;
  schedule2?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  imageDescription?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  details?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "transfer";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "welcome";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "accomodation";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "meals";
  }>;
  details2?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "itineraryDetails";
  }>;
};

export type Advantage = {
  _id: string;
  _type: "advantage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  summary?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "topSummary";
  };
  itinerarySection?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "itineraryTab";
  };
  aboutSection?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "aboutTab";
  };
  highlightSection?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "highlightTab";
  };
  faqSection?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "faqTab";
  };
};

export type FaqTab = {
  _id: string;
  _type: "faqTab";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  faqOffer?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faq";
  }>;
};

export type HighlightTab = {
  _id: string;
  _type: "highlightTab";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  subtitle?: string;
  linkName?: string;
  link?: string;
  highlightOffer?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "highlight";
  }>;
};

export type AboutTab = {
  _id: string;
  _type: "aboutTab";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  subtitle?: string;
  aboutOffer?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "about";
  }>;
};

export type ItineraryTab = {
  _id: string;
  _type: "itineraryTab";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  subtitle?: string;
  instructions1?: string;
  instructions2?: string;
  itineraryOffer?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "itinerary";
  }>;
};

export type TopSummary = {
  _id: string;
  _type: "topSummary";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  countryTitle?: string;
  year?: string;
  summaryDesc?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDescription";
  };
  accomodation?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDetails";
  };
  meals?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDetails";
  };
  activity?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDetails";
  };
  itinerary?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDetails";
  };
  booking?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "summaryDetails";
  };
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  code?: string;
  advantageList?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "advantage";
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type SummaryDetails = {
  _id: string;
  _type: "summaryDetails";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  toolbar?: string;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SummaryDescription = {
  _id: string;
  _type: "summaryDescription";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Faq | Highlight | About | Meals | Accomodation | Welcome | Transfer | ItineraryDetails | Itinerary | Advantage | Page | FaqTab | HighlightTab | AboutTab | ItineraryTab | TopSummary | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | SummaryDetails | Slug | SummaryDescription;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../itinerary-nextjs/src/app/page.tsx
// Variable: PAGES_QUERY
// Query: *[  _type == "page"]{_id, title}
export type PAGES_QUERYResult = Array<{
  _id: string;
  title: string | null;
}>;

// Source: ../itinerary-nextjs/src/app/section/about.tsx
// Variable: ABOUT_QUERY
// Query: *[    _type == "aboutTab"][0]{    _id,     title,     subtitle,    aboutOffer[]->{details},  }
export type ABOUT_QUERYResult = {
  _id: string;
  title: string | null;
  subtitle: string | null;
  aboutOffer: Array<{
    details: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
} | null;

// Source: ../itinerary-nextjs/src/app/section/faq.tsx
// Variable: FAQ_QUERY
// Query: *[    _type == "faqTab"][0]{    _id,     title,     faqOffer[]->{question, answer},  }
export type FAQ_QUERYResult = {
  _id: string;
  title: string | null;
  faqOffer: Array<{
    question: string | null;
    answer: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
} | null;

// Source: ../itinerary-nextjs/src/app/section/highlight.tsx
// Variable: HIGHLIGHT_QUERY
// Query: *[    _type == "highlightTab"][0]{    _id,     title,     subtitle,    linkName,    link,    highlightOffer[]->{details},  }
export type HIGHLIGHT_QUERYResult = {
  _id: string;
  title: string | null;
  subtitle: string | null;
  linkName: string | null;
  link: string | null;
  highlightOffer: Array<{
    details: string | null;
  }> | null;
} | null;

// Source: ../itinerary-nextjs/src/app/section/itinerary.tsx
// Variable: ITINERARY_QUERY
// Query: *[    _type == "itineraryTab"][0]{    _id,     title,     subtitle,    instructions1,    instructions2,    itineraryOffer[]  }
export type ITINERARY_QUERYResult = {
  _id: string;
  title: string | null;
  subtitle: string | null;
  instructions1: string | null;
  instructions2: string | null;
  itineraryOffer: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "itinerary";
  }> | null;
} | null;
// Variable: ITINERARY_QUERY2
// Query: *[    _type == "itinerary"]{    _id,     orderId,    itineraryTitle,     experience,    subtitle,    town,    schedule1,    schedule2,    image,    imageDescription,    details[]->{title},    details2[]-> {image, imageTitle, subtitle, tag, age, price, additionalBook},  } | order(orderId asc)
export type ITINERARY_QUERY2Result = Array<{
  _id: string;
  orderId: null;
  itineraryTitle: string | null;
  experience: string | null;
  subtitle: string | null;
  town: string | null;
  schedule1: string | null;
  schedule2: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  imageDescription: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  details: Array<{
    title: string | null;
  }> | null;
  details2: Array<{
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    imageTitle: string | null;
    subtitle: string | null;
    tag: "additional cost applies" | "included with trip" | null;
    age: "Adults" | "Kids" | null;
    price: string | null;
    additionalBook: string | null;
  }> | null;
}>;

// Source: ../itinerary-nextjs/src/app/section/summary.tsx
// Variable: SUMMARY_QUERY
// Query: *[    _type == "topSummary"][0]{    _id,     countryTitle,     year,    summaryDesc->,    accomodation->,    meals->,    activity->,    itinerary->,    summaryDetails,    booking->,    image,    code,    advantageList  }
export type SUMMARY_QUERYResult = {
  _id: string;
  countryTitle: string | null;
  year: string | null;
  summaryDesc: {
    _id: string;
    _type: "summaryDescription";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  } | null;
  accomodation: {
    _id: string;
    _type: "summaryDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    toolbar?: string;
    slug?: Slug;
  } | null;
  meals: {
    _id: string;
    _type: "summaryDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    toolbar?: string;
    slug?: Slug;
  } | null;
  activity: {
    _id: string;
    _type: "summaryDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    toolbar?: string;
    slug?: Slug;
  } | null;
  itinerary: {
    _id: string;
    _type: "summaryDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    toolbar?: string;
    slug?: Slug;
  } | null;
  summaryDetails: null;
  booking: {
    _id: string;
    _type: "summaryDetails";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    descriptionOne?: string;
    descriptionTwo?: string;
    toolbar?: string;
    slug?: Slug;
  } | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  code: string | null;
  advantageList: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "advantage";
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[\n  _type == \"page\"\n]{_id, title}": PAGES_QUERYResult;
    "*[\n    _type == \"aboutTab\"\n][0]{\n    _id, \n    title, \n    subtitle,\n    aboutOffer[]->{details},\n  }": ABOUT_QUERYResult;
    "*[\n    _type == \"faqTab\"\n][0]{\n    _id, \n    title, \n    faqOffer[]->{question, answer},\n  }": FAQ_QUERYResult;
    "*[\n    _type == \"highlightTab\"\n][0]{\n    _id, \n    title, \n    subtitle,\n    linkName,\n    link,\n    highlightOffer[]->{details},\n  }": HIGHLIGHT_QUERYResult;
    "*[\n    _type == \"itineraryTab\"\n][0]{\n    _id, \n    title, \n    subtitle,\n    instructions1,\n    instructions2,\n    itineraryOffer[]\n  }": ITINERARY_QUERYResult;
    "*[\n    _type == \"itinerary\"\n]{\n    _id, \n    orderId,\n    itineraryTitle, \n    experience,\n    subtitle,\n    town,\n    schedule1,\n    schedule2,\n    image,\n    imageDescription,\n    details[]->{title},\n    details2[]-> {image, imageTitle, subtitle, tag, age, price, additionalBook},\n  } | order(orderId asc)": ITINERARY_QUERY2Result;
    "*[\n    _type == \"topSummary\"\n][0]{\n    _id, \n    countryTitle, \n    year,\n    summaryDesc->,\n    accomodation->,\n    meals->,\n    activity->,\n    itinerary->,\n    summaryDetails,\n    booking->,\n    image,\n    code,\n    advantageList\n  }": SUMMARY_QUERYResult;
  }
}