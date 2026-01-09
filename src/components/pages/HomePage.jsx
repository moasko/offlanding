import Hero from "../sections/Hero.jsx";
import Vision from "../sections/Vision.jsx";
import Features from "../sections/Features.jsx";
import Connectivity from "../sections/Connectivity.jsx";
import Community from "../sections/Community.jsx";
import Conditions from "../sections/Condition.jsx";
import Security from "../sections/Security.jsx";

function HomePage() {
    return (
        <>
            <Hero />
            <Security />
            <Features />
            <Connectivity />
            <Community />
            <Conditions />
        </>
    );
}


export default HomePage;
