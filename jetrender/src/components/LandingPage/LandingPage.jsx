import "./LandingPageStyle.css";
import CloudvideoBg from "../../assets/videos/CloudvideoBg.mp4";

const LandingPage = () => {

    return (
        <>
        <div className='landingPage-Box'>
            <video src={CloudvideoBg} autoPlay loop muted className='cloudVideoBg'/>
            <div className='landingcontainer'>
            <h1 className='landingText' id="landingText">Hello sweetheart</h1>
            </div>
        </div>
        </>
    );
};

export default LandingPage