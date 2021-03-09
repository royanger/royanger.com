import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='Web site created using create-react-app'
          />
          <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;