import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={"scroll-smooth"}>
      <Head />
      <body className="min-h-screen font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
