import { SocialIcon } from "react-social-icons";
const AboutMe = () => {
  return (
    <div className="sectionAboutMe">
      <section className="aboutMe">
        <h3 className="aboutMeTitle">
          <span className="aboutMeTitle">01.</span>About Me
        </h3>
        <hr className="dashed"></hr>
        <p className="aboutMeText">
          Hello! My name is Milad E-pour and I enjoy creating things that live
          on the internet. My interest in web development started back in 2015
          when I decided to try editing websites using WordPress and Wix.
        </p>
        <p className="aboutMeText">
          My main focus these days is building accessible, inclusive products
          and digital experiences at Upstatement for a variety of clients.
        </p>
        <SocialIcon
          url="https://github.com/Miladepour"
          className="socialmedia"
          bgColor="#009290"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/milad-e-pour-a7a8a5239/"
          className="socialmedia"
        />
      </section>
      <section className="leftSideSection">
        <p className="aboutMeText">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="aboutMeList">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>WordPress</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
        <img
          src="https://cynoco.co.uk/wp-content/uploads/2022/06/Untitled-design2.png"
          alt="Milad Ebrahimpour"
          className="personlImage"
        />
      </section>
    </div>
  );
};

export default AboutMe;
