import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./portfolio.css";
// import "slick-carousel/slick/"
//Link는 컴포넌트끼리 연결할때씀
const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="innerBox">
      <div className="container">
        {/* <span>기여도 100%</span> */}
        <h2>Portfolio</h2>
        <div className="portfolioWrap">
          <Slider {...settings}>
            <div>
              <h3>1. 안경진정성 : 프랜차이즈 안경원 웹사이트를 제작하였습니다.</h3>
              <img src="images/glass-mockup.jpg" />
              <p><a href="https://kim-hyeon-jeong.github.io/jinjungsung/">사이트보기</a></p>
            </div>
            <div>
              <h3>2. 맘스터치 : 햄버거 프랜차이즈 맘스터치 사이트를 제작하였습니다.</h3>
              <img src="images/moms-mockup.jpg" />
              <p><a href="https://kim-hyeon-jeong.github.io/momstouch/">사이트보기</a></p>
            </div>
            <div>
              <h3>3. 폴스부띠끄 : 가방 브랜드 폴스부띠끄 웹사이트를 제작하였습니다.</h3>
              <img src="images/paulsboutique-mockup.jpg" />
              <p><a href="https://kim-hyeon-jeong.github.io/paulsboutique/">사이트보기</a></p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
