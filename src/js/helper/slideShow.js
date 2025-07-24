import React from 'react';
 

export function Slideshow(props) {
  const images = props.images;
  const type = props.type;
  const [currentIndex, setCurrentIndex] = React.useState(0);


  // Function to move the first image to the end of the array
  const switchImages = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    })
  };

  // useEffect to switch images every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(switchImages, 8000); // 1000ms = 1 seconds
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} height="100vh"
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      title={type}></img>
    </div>
  );
}


// legacy code
export function SlideshowLegacy(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const images = props.images;
  const delay = 25000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((img, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={img} alt="images" height="100vh"/>
          </div>
        ))}
      </div>
      {/* <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}