import PageLayout from "@/components/page-layout";

import { mockData } from "@/utils";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const { banners } = mockData;

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PageLayout>
      {/* <Carousel infiniteLoop autoPlay showThumbs={false}>
        {banners.map((banner) => (
          <div key={banner.setCode}>
            <img className="h-60" src={banner.image} alt={banner.name} />
            <p className="legend">{banner.name}</p>
          </div>
        ))}
      </Carousel> */}
      <div className="slider-container">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`bg-[url('${banner.image}')] w-full h-48`}
            >
              <p className="text-white">{banner.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </PageLayout>
  );
};

export default Home;
