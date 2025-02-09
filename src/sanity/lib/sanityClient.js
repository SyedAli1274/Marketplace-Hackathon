import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wy64mgw1", 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",  
  useCdn: true,                                                     
  apiVersion: "2025-02-06",                                        
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
});

export default client;
