import React from "react";
import CricketImage from "../assets/cricket2.jpg";
import VolleyballImage from "../assets/volleyball.jpg";
import throwballImage from "../assets/throwball.jpg";
import  runningImage from "../assets/running.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black py-8 px-4 md:px-0 h-full "
    >
      <div className=" mx-auto max-w-screen-lg h-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-400 text-center mb-6">
          Welcome to my corner of the digital realm! I'm a MERN Stack aficionado
          with a penchant for adventure and a love for all things code. When I'm
          not immersed in the world of web development, you'll often find me
          chasing adrenaline rushes and embracing the great outdoors.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-1">
            <img
              src={CricketImage}
              alt=" Cricket"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-2">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Cricket
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left">
            First Prize in Indoor College Level Cricket.
            Man of the Match: Captained the team, took three wickets, and scored 40 runs.
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-2">
            <img
              src={VolleyballImage}
              alt=" Volleyball"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-1">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Volleyball
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left">
            Awarded First Prize as the hitter and center of the volleyball team.
            Captain and primary server, leading the team to victory.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mb-20">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-1">
            <img
              src={throwballImage}
              alt="Throw ball"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-2">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
              Throw ball
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left ">
            In 12th grade, I led my school’s throw ball team to win first prize at the indoor school level as the hitter, center, captain, and main server. My leadership and skills were pivotal in securing our victory.
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 pr-4 md:pr-0 md:order-2">
            <img
              src={runningImage}
              alt="Running"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 md:order-1">
            <h3 className="text-2xl font-bold mb-2 mt-4 md:mt-0 text-center md:text-left text-white">
            Running
            </h3>
            <p className="text-lg text-gray-400 text-center md:text-left">
           
Running is my passion and a vital part of my daily routine. It keeps me fit, focused, and energized. Whether it's a quick jog or a long-distance run, I embrace every stride as a step towards personal growth and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
