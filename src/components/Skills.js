import meter95 from "../assets/img/meter1.svg";
import meter85 from "../assets/img/meter85.svg";
import meter60 from "../assets/img/meter60.svg";
import meter75 from "../assets/img/meter75.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                        <p>Experienced Python Developer, proficient in Mobile Application Development, Full Stack Development Natural Language Processing and Computer Vision and Machine Learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
  <img src={meter85} alt="Python Icon" />  
  <h5>Python</h5>
</div>

<div className="item">
  <img src={meter85} alt="Dart Icon" />
  <h5>Flutter & Dart</h5>  
</div>

<div className="item">
  <img src={meter60} alt="Swift Icon" />
  <h5>Swift</h5>
</div>

<div className="item">  
  <img src={meter85} alt="Firebase Icon" />
  <h5>Flask</h5>
</div>

<div className="item">
  <img src={meter60} alt="React Icon" />
  <h5>NLP</h5>
</div>

<div className="item">
  <img src={meter85} alt="Machine Learning Icon" />
  <h5>Machine Learning</h5>  
</div>

<div className="item">
  <img src={meter85} alt="Computer Vision Icon" />
  <h5>Computer Vision</h5>
</div>
{/*https://nikitahl.github.io/svg-circle-progress-generator*/}


<div className="item">
  <img src={meter75} alt="Django Icon" />
  <h5>Django</h5>
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