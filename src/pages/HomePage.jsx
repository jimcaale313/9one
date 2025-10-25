import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import FreshPicks from "@/components/FreshPicks";
import CraftingMoments from "@/components/CraftingMoments";
import CustomerFeedback from "@/components/CustomerFeedback";
import Contact from "../components/contact";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>9one Cafe - Premium Coffee Experience in Hargeisa</title>
        <meta
          name="description"
          content="Experience the finest coffee and modern ambiance at 9one Cafe in Hargeisa, Somaliland. Premium beverages, delicious food, and exceptional service."
        />
      </Helmet>
      <Hero />
      <Gallery />
      <FreshPicks />
      <CraftingMoments />
      <CustomerFeedback />
      <Contact />
    </>
  );
};

export default HomePage;
