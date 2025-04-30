import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/PassportPhoto_1080HD.jpg" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a passionate Full Stack Developer (Fresher) with a strong
                foundation in web development, problem-solving, and data
                structures & algorithms (DSA). My expertise lies in building
                scalable, high-performance applications using modern
                technologies. I love crafting user-friendly interfaces,
                optimizing backend systems, and ensuring seamless user
                experiences. With a problem-solving mindset and a continuous
                learning approach, I enjoy tackling challenges, writing clean,
                efficient code, and collaborating with teams to bring innovative
                ideas to life. My goal is to contribute to impactful projects
                while continuously enhancing my skills in both frontend and
                backend development. Key Skills: <br></br>Programming Languages: C,
                Java (DSA) ✅ Frontend: HTML5, CSS3, JavaScript, React.js,
                Bootstrap, Tailwind CSS ✅ Backend: Node.js, Express.js ✅
                Database: MySQL, MongoDB ✅ Version Control: Git, GitHub ✅
                Tools: VS Code, Postman, IntelliJ IDEA, npm
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
