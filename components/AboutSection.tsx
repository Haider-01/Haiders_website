import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "C/C++" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "Scala" },
  { skill: "SQL" },
  { skill: "Bash" },
  { skill: "MIPS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Haider and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in San Leandro, CA.
            </p>
            <br />
            <p>
              I graduated from San Jose State University in 2022 at the age of 20
              with my B.S. in Computer Science. Although it is a mild accomplishment, 
              my age in relation to when I completed my Bachelors is not to boast. 
              Instead, it is to serve as an indicator that when I put my mind to 
              something, I get it done; even if it means putting my mind to it for 
              4 years straight.
            </p>
            <br />
            <p>
            I am not looking for a place that will 
            “take a chance on me”. I am looking for a place that will 
            give me the opportunity to add value to it!
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              Whether it be reading, playing basketball, travelling, 
              or even studying new concepts, I am always seeking new experiences 
              and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and I am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/guywaving.webp"
              alt=""
              width={375}
              height={375}
              className="hidden md:block md:relative md:bottom+0 md:left-4 md:z-0 mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
