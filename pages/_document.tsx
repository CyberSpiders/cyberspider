import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-black dark:bg-dark_bg dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
