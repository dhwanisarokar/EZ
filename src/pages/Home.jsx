// import Header from "../components/Header";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <section>
        <header className="header">
          <img className="logo" src={logo} alt="logo"/>
          <h2 className="subtitle">Suite Of Business Support Services</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
        </header>
        <ContactForm />
      </section>
      <Services />
    </div>
  );
};

export default Home;
