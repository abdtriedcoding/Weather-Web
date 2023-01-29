import Header from "@/components/Homepage/Header"
import { getWeatherData } from "@/lib/allApi";
import Feed from "@/components/Homepage/Feed";
import Head from "next/head";

const index = ({ weather }) => {
  return (
    <div>
      {/* Head meta-tags */}
      <Head>
        <title>Weather Web</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" name="title" content="Weather web" />
        <meta property="og:description" name="description" content="Get accurate and up-to-date weather information for locations around the world on weather web website" />
        <meta property="og:image" content="/metaImage.jpeg" />
        <meta property="og:description" name="twitter:card" content="Get accurate and up-to-date weather information for locations around the world on weather web website" />
      </Head>
      <Header />
      <Feed weather={weather} />
    </div>
  )
}
// Serverside rendering to get the weather.
export async function getServerSideProps() {
  const weather = await getWeatherData();
  return {
    props: {
      weather,
    },
  };
}
export default index