import Head from 'next/head'
import React from 'react'

interface Format {
  name: string
  description: string
  url: string
}

const Header: React.FC<Format> = ({ name, description, url }) => {
  return (
    <>
      <Head>
        <title>CyberSpiders | {name}</title>
        <meta name="title" content={name} />
        <meta name="description" content={description} />
        <meta name="image" content="https://imgur.com/a/5CPWsrm" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={'https://cyberspider.vercel.app/'.concat(url)}
        />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://imgur.com/a/5CPWsrm" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={'https://cyberspider.vercel.app/'.concat(url)}
        />
        <meta property="twitter:title" content={name} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://imgur.com/a/5CPWsrm" />
      </Head>
    </>
  )
}

export default Header
