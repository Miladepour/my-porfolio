const Intro = () => {
  return (
    <div>
      <div className="heroSection">
        <p className="heroFristP">
          Hi, my name is<span> 👋🏼 </span>
        </p>
        <div className="nameAnimation">
          <h1 className="typewriter">{"{Milad E-Pour}"}</h1>
          <h2 className="textBelowName">I build things for the web.</h2>
        </div>
        <p className="heroSecondP">
          I’m a Jr <span>software developer</span> specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on improving my skill with backend and database.
        </p>
      </div>
    </div>
  );
};

export default Intro;
