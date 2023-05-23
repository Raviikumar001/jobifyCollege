
import main from "../assets/images/main-alternative.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components/Index'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pug small batch butcher tote bag kale chips, chicharrones
            photo booth pitchfork. Viral banjo etsy palo santo. Live-edge shabby
            chic marxism, humblebrag tonx beard whatever portland tilde organic
            cupping unicorn yuccie blue bottle. Church-key PBR&B aesthetic tilde
            8-bit gastropub bicycle rights literally. Twee cardigan bushwick,
            cronut authentic PBR&B cloud bread craft beer food truck skateboard
            master cleanse woke tote bag roof party venmo.
          </p>

          <button className="btn btn-hero ">
            Login/Register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" /> 
      </div>
    </Wrapper>
  );
};



export default Landing;
