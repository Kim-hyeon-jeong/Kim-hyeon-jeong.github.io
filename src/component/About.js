import "./about.css";

const About = () => {
  return (
    <div className="innerBox">
      <div className="container">
        {/* <span>About</span> */}
        <h2>About</h2>
        <div className="aboutWrap">
          <div className="box">
            <div className="tablecell">
                <div className="imgBox"><img src="../images/name.png"/></div>
                <div className="textBox">
                <strong>Name</strong>
                <p>Kim hyeonjeong</p>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="tablecell">
                <div className="imgBox"><img src="../images/telephone.png"/></div>
                <div className="textBox">
                <strong>Tel</strong>
                <p>010-4129-7538 / (비상)010-4181-1305</p>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="tablecell">
                <div className="imgBox"><img src="../images/home.png"/></div>
                <div className="textBox">
                <strong>Address</strong>
                <p>경기도 부천시 춘의동 길주로 371-15 101-901</p>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="tablecell">
                <div className="imgBox"><img src="../images/email.png"/></div>
                <div className="textBox">
                <strong>Email</strong>
                <p>guswjd7538@gmail.com</p>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="tablecell">
                <div className="imgBox"><img src="../images/goal.png"/></div>
                <div className="textBox">
                <strong>Career</strong>
                <p className="career">방송정보국제교육원 교육 수료 2022.03 ~ 2022.09</p>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="tablecell">
                <div className="imgBox schoolimg"><img src="../images/school.png"/></div>
                <div className="textBox school">
                <strong>Education</strong>
                <div className="school1">
                    <p>신한대학교(편입학) 안경광학과 학사 졸업 2016 ~ 2018</p>
                </div>
                <div className="school2">
                    <p>상명대학교(서울) 생명과학과 3학년 수료 2011 ~ 2015</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
