import WelcomePage from "@/components/WelcomePage";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>ARMA: Pioneering Sustainable Living Spaces for the Future</title>
        <meta
          name="description"
          content="ARMA is a trailblazer in the realm of sustainable construction, dedicated to creating innovative living buildings and houses. Our projects are more than just structures; they are eco-friendly habitats that promote sustainable living. With a keen focus on environmental consciousness, we incorporate green technologies and energy-efficient designs, ensuring our buildings not only look good but also contribute positively to the environment. Join us in our journey towards a greener, more sustainable future."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WelcomePage />
      </main>
    </>
  );
}

export default Home;
