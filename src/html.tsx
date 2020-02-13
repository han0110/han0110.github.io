import * as React from 'react'
import Helmet from 'react-helmet'

interface HtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any
}

export default ({ headComponents, body, postBodyComponents }: HtmlProps) => {
  const head = Helmet.rewind()

  return (
    <html lang="en">
      <head>
        {headComponents}
        <title>My website</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
      </head>
      <body>
        <div
          id="___gatsby"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}
