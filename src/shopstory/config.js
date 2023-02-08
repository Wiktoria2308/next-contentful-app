
import { contentfulPlugin } from "@shopstory/core/contentful";

export const shopstoryConfig = {
    
    plugins: [contentfulPlugin({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      })],
      components: [
        {
          id: "Card",
          label: "Card",
          type: "card",
          schema: [
            {
              prop: "color",
              label: "Color",
              type: "select",
              options: [
                "white", "purple", "green"
              ]
            },
            {
              prop: "noBorder",
              label: "Disable border",
              type: "boolean"
            },
            
          ]
        },
        {
          id: "CustomComponent",
          label: "Custom component",
          schema: [
            {
              prop: "color",
              label: "Color",
              type: "select",
              options: [
                "white", "purple", "green"
              ]
            },
            {
              prop: "noBorder",
              label: "Disable border",
              type: "boolean"
            },
          ]
        }
      ]
    
}