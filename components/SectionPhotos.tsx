import Image from "next/image"; // Убедитесь, что импортируете Image из Next.js

const images = [
  "/photo/3.jpg",
  "/photo/7.jpg",
  "/photo/8.jpg",
  "/photo/10.jpeg",
  "/photo/11.jpg",
  "/photo/12.jpg",
  "/photo/13.jpeg",
  "/photo/14.jpeg",
  "/photo/15.jpeg",
  "/photo/16.jpeg",
  "/photo/17.jpeg",
  "/photo/18.jpeg",
  "/photo/19.jpeg",
  "/photo/20.webp",
  "/photo/21.webp",
  "/photo/22.jpeg",
  "/photo/23.jpeg",
  "/photo/24.webp",
  "/photo/25.webp",
  "/photo/26.webp",
  "/photo/2.jpg",
  "/photo/1.jpeg",
  "/photo/28.webp",
  "/photo/29.webp",
];

const SectionPhotos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl shadow-sm transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionPhotos;
