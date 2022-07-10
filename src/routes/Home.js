import React from "react";
import Footer from "../Components/Footer";
import Heroimg from "../Components/Heroimg";
import Navbar from "../Components/Navbar";
import Work from "../Components/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
