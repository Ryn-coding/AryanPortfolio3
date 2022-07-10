import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Heroimg2 from "../Components/Heroimg2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Contact." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
