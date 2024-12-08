import React from "react";
import "./Stats.css";
import StatsGrow from "../../../assets/images/stats-grow.svg";
import StatsGrow1 from "../../../assets/images/1.png";
import StatsGrow2 from "../../../assets/images/2.png";
import StatsGrow3 from "../../../assets/images/3.png";
import StatsMap from "../../../assets/images/statsmap.jpg";
const statsData = [
  {
    percentage: "95%",
    title: "Efficiency Rate",
    text: "Delivering projects on time and within budget.",
    img: StatsGrow,
  },
  {
    percentage: "95%",
    title: "Client Satisfaction",
    text: "Exceeding expectations with quality and service.",
    img: StatsGrow1,
  },

  {
    percentage: "100",
    title: "Safety Record",
    text: "Prioritizing safety and compliance on every site.",
    img: StatsGrow2,
  },

  {
    percentage: "260k+",
    title: "Sustainable Practices",
    text: "Commitment to eco-friendly and sustainable construction.",
    img: StatsGrow3,
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-box-wrapper">
            {statsData.map((stat, index) => (
              <div key={index} className="stats-box">
                <div className="stats-top-inbox">
                  <p className="stats-percentage">{stat.percentage}</p>
                  <img className="stats-img" src={stat.img} alt="statsgrow" />
                </div>
                <h3 className="stats-inbox-title">{stat.title}</h3>
                <p className="stats-inbox-text">{stat.text}</p>
              </div>
            ))}
          </div>
          <img className="stats-map-img" src={StatsMap} alt="statsmap" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
