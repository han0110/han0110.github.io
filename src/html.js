// @flow

import React from 'react';
import favicon from './assets/favicon.ico';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // $FlowIgnore
    stylesStr = require('!raw-loader!../public/styles.css'); // eslint-disable-line
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

type Props = {
  headComponents: Object,
  preBodyComponents: Object,
  postBodyComponents: Object,
  body: string,
};

export default (props: Props) => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Jason Jian's portfolio" />
        <link rel="shortcut icon" href={favicon} />
        <title>Jason Jian</title>
        {props.headComponents}
        {css}
      </head>
      <body>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
