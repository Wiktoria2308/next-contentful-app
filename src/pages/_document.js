import { Html, Head, Main, NextScript } from 'next/document'
import { shopstoryGetStyleTag } from '@shopstory/core/react'

export default function Document() {
  return (
    <Html lang="en">
      <Head>{shopstoryGetStyleTag()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
