import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function Resume() {
  const skills = [
    { name: "HTML/CSS", level: "95%" },
    { name: "React JS", level: "70%" }, 
    { name: "Web Design", level: "90%" },
    { name: "Next.JS", level: "70%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "JavaScript", level: "60%" },
    { name: "Bootstrap", level: "80%" },
    { name: "GitHub", level: "90%" },
  ];

  return (
    <section className="bg-[#101010]">
      <div className="container px-[50px]">
        {/* Cross Icon */}
        <Link
          to="/"
          className="fixed top-4 right-4 text-white text-5xl font-normal"
        >
          &times;
        </Link>
        <p className="text-center text-[#7E7E7E] text-lg pt-[70px]">
          Check out my Resume
        </p>
        <h1 className="text-center text-white text-5xl font-bold py-4">
          Resume
        </h1>
        <div className="flex justify-center">
          <div className="bg-customGreen h-1 animate-continuousExpand"></div>
        </div>

        <div className="row md:py-10 pt-10">
          <div className="col-lg-6">
            <h4 className="text-2xl font-semibold text-white text-start py-3">
              Education
            </h4>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">High School</h2>
              <p class="text-sm text-gray-400 pt-3">
                Prasadi Academy / 2018 - 2020
              </p>
              <p class="mt-2 text-gray-400">
                I completed my higher secondary education at Prasadi Academy,
                renowned as one of the best high schools in Nepal.
              </p>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">Bachelor Degree</h2>
              <p class="text-gray-400 text-sm pt-3">
                Presidential Graduate School / 2024 - Present
              </p>
              <p class="mt-2 text-gray-400">
                Passionately Pursuing an IT degree, while working to enhance my
                skill set and industry experience.
              </p>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">Frontend Development</h2>
              <p class="text-sm text-gray-400 pt-3">
                Broadway Infosys / 2024 - Just Completed Training
              </p>
              <p class="mt-2 text-gray-400">
                I completed a 3-month training program in Frontend Development
                at Broadway Infosys, one of the premier IT institutes in Nepal.
              </p>
            </div>
          </div>

          <div className="col-lg-6 py-10 md:py-0">
            <h4 className="text-2xl font-semibold text-white text-start py-3">
              Experience
            </h4>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">Fresher</h2>
              <p class="text-sm text-gray-400 pt-3">Adobe / 2015 - 2017</p>
              <p class="mt-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">Fresher</h2>
              <p class="text-sm text-gray-400 pt-3">Google / 2017 - 2018</p>
              <p class="mt-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                quo repudiandae.
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-customGreen">
              <div class="absolute -left-3.5 top-3 bg-customGreen w-4 h-4"></div>
              <h2 class="text-lg font-bold text-white">Fresher</h2>
              <p class="text-sm text-gray-400 pt-3">Discord / 2019 - Present</p>
              <p class="mt-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                quo repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
          </div>
        </div>

        <p className=" text-[#7E7E7E] md:text-lg text-base text-center pt-[70px]">
          My level of knowledge in some tools
        </p>
        <h1 className=" text-white text-3xl text-center md:text-start md:text-4xl font-bold md:py-4 py-2">
          My Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md;py-0 py-5 gap-12">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-[#dedada]">{skill.name}</span>
                <span className="text-[#dedada]">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full">
                <div
                  className="bg-customGreen h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:flex text-white md:py-[120px] py-10 items-center gap-5">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="md:text-3xl text-2xl font-bold mb-4">
              Take a tour of my office
            </h2>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quia cum
              quasi assumenda culpa praesentium consectetur voluptatibus
              expedita. Voluptatem tempore, aspernatur rem facilis, distinctio
              nemo! Odio velit, nemo dolorem voluptas!
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Laudantium qui aspernatur unde mollitia, in laborum.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.1naML_Xlv5imdtY9HEA8DQHaEK&pid=Api&P=0&h=220"
              alt="Office"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-black p-4 rounded-full shadow-lg">
                <FaPlay className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
