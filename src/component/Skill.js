import "./skill.css";

const Skill = () => {
  return (
    <div className="container">
      <div className="innerBox">
        {/* <span>Skills</span> */}
        <h2 className="skill">My Skills</h2>
        <div className="skillWrap">
          <section>
            <h2>DESIGN SKILLS</h2>
            <div className="designWrap">
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/poto-logo.png" />
                </div>
                <div className="textBox">
                  <strong>PHOTOSHOP(70%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/illust-logo.png" />
                </div>
                <div className="textBox">
                  <strong>ILLUSTRATOR(75%)</strong>
                  <p></p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>FRONTEND SKILLS</h2>
            <div className="frontendWrap">
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/html5-logo.png" />
                </div>
                <div className="textBox">
                  <strong>HTML5(85%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/css3-logo.png" />
                </div>
                <div className="textBox">
                  <strong>CSS3(80%)</strong> 
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                  <img src="images/javascript-logo.png" />
                </div>
                <div className="textBox">
                  <strong>JAVASCRIPT(50%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                  <img src="images/jquery-logo.png" />
                </div>
                <div className="textBox">
                  <strong>JQUERY(70%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                  <img src="images/react-logo.png" />
                </div>
                <div className="textBox">
                  <strong>REACT(30%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                  <img src="images/github-logo.png" />
                </div>
                <div className="textBox">
                  <strong>GITHUB(10%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                  <img src="images/scss-logo.png" />
                </div>
                <div className="textBox">
                  <strong>SCSS(20%)</strong>
                  <p></p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2>BACKEND SKILLS</h2>
            <div className="backendWrap">
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/java-logo.png" /> 
                </div>
                <div className="textBox">
                  <strong>JAVA(30%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/sql-logo.png" />
                </div>
                <div className="textBox">
                  <strong>SQL(50%)</strong>
                  <p></p>
                </div>
              </div>
              <div className="box2">
                <div className="imgBox2">
                    <img src="images/jsp-logo.png" />
                </div>
                <div className="textBox">
                  <strong>JSP(30%)</strong>
                  <p></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skill;
