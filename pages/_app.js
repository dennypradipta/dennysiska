import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>#DennySiskaUntukSelamanya</title>
        <meta name="title" content="#DennySiskaUntukSelamanya" />
        <meta
          name="description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Andika Fransiskayana dan Denny Aditya Pradipta."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://denny-siska.vercel.app" />
        <meta property="og:title" content="#DennySiskaUntukSelamanya" />
        <meta
          property="og:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Andika Fransiskayana dan Denny Aditya Pradipta."
        />
        <meta
          property="og:image"
          content="https://denny-siska.vercel.app/images/landing.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://denny-siska.vercel.app" />
        <meta property="twitter:title" content="#DennySiskaUntukSelamanya" />
        <meta
          property="twitter:description"
          content="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami: Andika Fransiskayana dan Denny Aditya Pradipta."
        />
        <meta
          property="twitter:image"
          content="https://denny-siska.vercel.app/images/landing.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
