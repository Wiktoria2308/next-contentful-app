import { createClient } from 'contentful'
import { ShopstoryClient } from "@shopstory/core/client";
import { Shopstory, ShopstoryMetadataProvider } from "@shopstory/core/react";
import {shopstoryConfig} from "../../shopstory/config";
import {DemoShopstoryProvider} from "../../shopstory/provider";



const ShopstoryBlockPage= (props) => {
  return <DemoShopstoryProvider>
    <ShopstoryMetadataProvider meta={props.meta}>
      <Shopstory content={props.renderableContent} />
    </ShopstoryMetadataProvider>
  </DemoShopstoryProvider>
}

export const getStaticPaths = () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps = async (context) => {
  let { params, preview, locale = 'en-US' } = context

  if (!params) {
    return { notFound: true }
  }

  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? "master",
    accessToken: preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN,
    host: preview ? 'preview.contentful.com' : undefined
  })

  const entry = await contentfulClient.getEntry(params.entryId, {
    content_type: 'shopstoryBlock',
    locale,
  });

  

  const shopstoryClient = new ShopstoryClient(shopstoryConfig, { locale, contentful: { preview } });
  const renderableContent = shopstoryClient.add(entry.fields.content);
  const meta = await shopstoryClient.build();
  return {
    props: { renderableContent, meta },
    revalidate: 10
  }
}

export default ShopstoryBlockPage