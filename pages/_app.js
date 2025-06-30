import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AI Project Portfolio | Innovative AI Solutions</title>
        <meta name="description" content="Explore cutting-edge artificial intelligence projects including chatbots, image classification, sentiment analysis, and more." />
        <meta name="keywords" content="AI, artificial intelligence, machine learning, portfolio, projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AI Project Portfolio" />
        <meta property="og:description" content="Discover innovative artificial intelligence solutions" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}   