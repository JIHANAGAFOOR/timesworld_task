import { useState } from "react";

function ImageCarousel() {
  const [index, setIndex] = useState<number>(0);

  const images: string[] = [
    "https://img.freepik.com/free-photo/sunset-fog-lake_395237-229.jpg?uid=R182202618&ga=GA1.1.22162105.1725358686&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-vector/landscape-with-trees_1048-209.jpg?uid=R182202618&ga=GA1.1.22162105.1725358686&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/3d-render-palm-tree-island-ocean-against-sunset-sky_1048-15239.jpg?uid=R182202618&ga=GA1.1.22162105.1725358686&semt=ais_hybrid&w=740",
  ];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (dotIndex: number) => {
    setIndex(dotIndex);
  };

  return (
    <div className="relative w-full h-[40vh] bg-gray-100 overflow-hidden">
      {/* Image */}
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Top Controls Overlay */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3 px-4">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="bg-transparent border-none text-black text-xl font-bold cursor-pointer hover:opacity-70"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-3 items-center">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`w-2.5 h-2.5 rounded border-none cursor-pointer ${
                index === dotIndex ? "bg-black" : "bg-white hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="bg-transparent border-none text-black text-xl font-bold cursor-pointer hover:opacity-70"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
