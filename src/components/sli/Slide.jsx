import React, { useState, useEffect, useRef } from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import OrientationMessage from "../orientationmessage/OrientationMessage";
import gelie from "../../assets/gelie.svg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import CountDown from "../countdown/CountDown";
import twitter from "../../assets/twitter.png";
import "./Slide.css";

function Slide() {
  const images = [slider1, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const slidePanelRef = useRef(null);

  useEffect(() => {
    const autoSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (slidePanelRef.current) {
      slidePanelRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="h-[100vh] w-[100%] relative overflow-hidden">
      <img
        src={gelie}
        alt="Logo"
        className="absolute top-10  md:w-28 md:left-14 md:h-16  vvsm:w-16 vvsm:ml-7 vvsm:h-5   object-contain"
      />
      <OrientationMessage />
      <div className="absolute top-32 sm:left-20 text-white font-semibold vvsm:left-7">
        <div className="vvsm:text-[20px] ssm:text-3xl sm:text-4xl vvsm:-mt-11 vsm:-mt-10 md:text-4xl lg:text-5xl xl:text-5xl font-Montserrat sm:mt-6">
          {" "}
          A new ERA is loading!!
        </div>
        <div className="font-Montserrat vvsm:text-[10px] ssm:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">
          Prepare for an adventure like no other.
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-white ">
        <CountDown countdownTimestampMs={1643673600000} />
      </div>
      {/*social media */}
      <div>
        <div
          className="flex absolute bottom-[90px] right-10 sm:right-20 vvsm:right-0 sm:mb-[-25px] icons"
          style={{ alignItems: "center" }}
        >
          <a
            href="https://in.linkedin.com/company/zesdrotechnologies"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="mr-5 social-icon "
            />
          </a>
          <a
            href="https://www.facebook.com/"
          
          >
            <img
              src={facebook}
              alt="Facebook"
              className="mr-5 social-icon "
             
            />
          </a>
          <a
            href="https://www.instagram.com/"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="mr-5 social-icon "
            />
          </a>
          <a
            href="https://twitter.com/"
          
          >
            <img
              src={twitter}
              alt="Twitter"
              className="social-icon "
             
            />
          </a>
        </div>
      </div>
      <div className="page-container h-screen">
        <div className="content w-screen h-screen">
          <div
            className="prev"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
          ></div>
          <div className="slide-panel h-screen" ref={slidePanelRef}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-screen w-screen slide"
              />
            ))}
          </div>
          <div
            className="next"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
