import { createClient } from "contentful";

const getClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const getContentfulProducts = async () => {
  const client = getClient();

  const res = await client.getEntries({ content_type: "product" });
  console.log(res.items)
  // revalidate or webhook
  return res.items
   
};
export const getContentfulNavbar = async () => {
    const client = getClient();
  
    const res = await client.getEntries({ content_type: "navbar2" });
    // revalidate or webhook
    return res.items
  };
