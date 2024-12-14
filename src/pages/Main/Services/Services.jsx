import React from "react";
import "./Services.css";
import Card from "../../../assets/components/Card/Card";
import Residential from "../../../assets/images/Residential.png"
import Commercial from "../../../assets/images/Commercial.png"
import Project from "../../../assets/images/Project.png"
import Renovation from "../../../assets/images/Renovation.png"
import General from "../../../assets/images/General.png"
import Sustainable  from "../../../assets/images/Sustainable.png"

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-title-box">
          <h2 className="services-title">Services</h2>
        </div>
        <div className="services-wrapper">

          <Card title={"Residential Construction"} intitle={"Residential Construction"} text={"Specializing in building custom homes, renovations, and remodels, offering personalized designs to meet each client’s needs and preferences."} img={Residential}/>


          <Card title={"Commercial Construction"} intitle={"Commercial Construction"} text={"Expertise in constructing office buildings, retail spaces, and other commercial properties, providing efficient, high-quality builds that align with business goals."} img={Commercial}/>

          <Card title={"Project Management"} intitle={"Project Management"} text={"Full-service project management that ensures the timely and budget-friendly completion of construction projects, from design to final delivery."} img={Project}/>

          <Card title={"Renovation and Remodeling"} intitle={"Renovation and Remodeling"} text={"High-quality renovation services for homes and commercial properties, including kitchen, bathroom, and full home remodels to update and transform existing spaces."} img={Renovation}/>

          <Card title={"General Contracting"} intitle={"General Contracting"} text={"Providing general contracting services, overseeing construction activities, coordinating subcontractors, and ensuring smooth project execution from start to finish."} img={General}/>

          <Card title={"Sustainable and Green Building"} intitle={"Sustainable and Green Building"} text={"Offering eco-friendly building solutions and sustainable construction practices, focusing on energy-efficient designs, environmentally friendly materials, and minimizing the carbon footprint."} img={Sustainable}/>
          </div>
      </div>
    </section>
  );
};

export default Services;
