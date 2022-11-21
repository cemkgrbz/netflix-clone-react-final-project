import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";

function Slider1({ movies }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  console.log(movies);
  // movies && console.log(movies[2]?.poster_path);
  return (
    // <div className="carousel-container">
    <Carousel
      partialVisible={false}
      showDots={false}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={6000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass={"carousel-item-padding-40-px"}
    >
      {movies?.map((movie, idx) => (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path} `}
          alt="film"
          className="image item"
        />
      ))}
    </Carousel>
  );
}
export default Slider1;
