import "../styles/styles.css";
import logo1 from "../assets/PD.png";
import logo2 from "../assets/AV.png";
import logo3 from "../assets/TS.png";
import logo4 from "../assets/GD.png";
import logo5 from "../assets/RA.png";
import logo6 from "../assets/DP.png";

const services = [
  { title: "Presentation Design", icon: logo1 },
  { title: "Audio - Visual Production", icon: logo2 },
  { title: "Translation Services", icon: logo3 },
  { title: "Graphic Design", icon: logo4 },
  { title: "Research & Analytics", icon: logo5 },
  { title: "Data Processing", icon: logo6 },
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="card-title">
            <img className="icon" src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio sed nemo accusamus.</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
