import AboutUs from "../AboutUs/AboutUs";
import AdvancedTechnology from "../AdvancedTechnology/AdvancedTechnology";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import OurProcess from "../OurProcess/OurProcess";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner/>
            <AdvancedTechnology/>
            <AboutUs/>
            <Services/>
            <Testimonials/>
            <Blog/>
            <OurProcess/>
        </div>
    );
};

export default Home;