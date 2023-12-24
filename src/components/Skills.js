import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Experienced Python Developer, proficient in Mobile Application Development, Full Stack Developmen Natural Language Processing and Computer Vision and Machine Learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
  <img src={meter1} alt="Python Icon" />  
  <h5>Proficient in Python</h5>
</div>

<div className="item">
  <img src={meter1} alt="Dart Icon" />
  <h5>Experienced with Dart</h5>  
</div>

<div className="item">
  <img src={meter1} alt="Flutter Icon" />
  <h5>Skilled in Flutter development</h5>
</div>

<div className="item">
  <img src={meter1} alt="SQL Icon" />
  <h5>Knowledge of SQL and NoSQL databases</h5>
</div>

<div className="item">  
  <img src={meter1} alt="Firebase Icon" />
  <h5>Familiar with Firebase</h5>
</div>

<div className="item">
  <img src={meter1} alt="React Icon" />
  <h5>React.js web development</h5>
</div>

<div className="item">
  <img src={meter1} alt="Machine Learning Icon" />
  <h5>Machine learning and deep learning</h5>  
</div>

<div className="item">
  <img src={meter1} alt="Computer Vision Icon" />
  <h5>Computer vision techniques</h5>
</div>

<div className="item">
  <img src={meter1} alt="Android Icon" />
  <h5>Android mobile app development</h5>
</div>

<div className="item">
  <img src={meter1} alt="Django Icon" />
  <h5>Full stack web development with Django and React.js</h5>
</div> 
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )

}