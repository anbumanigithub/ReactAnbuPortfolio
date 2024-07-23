import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import tailwind from "../assets/experience/tailwind.png";
import react from "../assets/experience/react.png";
import NextjsImg from "../assets/experience/Next js.png";
import github from "../assets/experience/github.png";
import javascript from "../assets/experience/js.png";
import mongodb from "../assets/experience/mongodb.png";
import nodejs from "../assets/experience/node.png";
import AntDesign from "../assets/experience/Ant design.jpeg";
import Bootstrap from "../assets/experience/Bootstrap.jpeg";
import Redux from "../assets/experience/Redux.png";

const Exprience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-300 ",
    },
    {
      id: 4,
      src: AntDesign,
      title: "Antdesign",
      style: "shadow-green-800",
    },
    {
      id: 5,
      src: Bootstrap,
      title: "Bootstrap 5",
      style: "shadow-green-800",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
   
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 8,
      src: Redux,
      title: "Redux",
      style: "shadow-green-800",
    },

    {
      id: 9,
      src: NextjsImg,
      title: "Next Js",
      style: "shadow-yellow-800",
    },
   
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12 ,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-800",
    },
 
   
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 capitalize border-b-4 inline border-gray-500">
            skills
          </p>
          <p className="py-6">
            These are the technologies I have experience with.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 py-8 text-center mb-20">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg hover:scale-95 duration-500 py-2 ${style}`}
            >
              <img src={src} alt="" className="w-25 mx-auto h-20 " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exprience;
