import Image from "next/image";

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
  "/photo/20.jpeg",
  "/photo/21.jpeg",
  "/photo/22.jpeg",
  "/photo/23.jpeg",
  "/photo/24.jpg",
  "/photo/25.JPG",
  "/photo/26.JPG",
  "/photo/2.jpg",
  "/photo/1.jpeg",
  "/photo/28.webp",
  "/photo/27.webp",
];

const SectionPhotos = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 grid-flow-dense">
      {/* Первая строка */}
      <div className="relative w-full h-[500px] col-span-2 row-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[0]}
          alt={`Image 1`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] row-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[1]}
          alt={`Image 2`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Первая строка */}

      {/* Вторая строка */}
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[2]}
          alt={`Image 3`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[3]}
          alt={`Image 4`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[4]}
          alt={`Image 5`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Вторая строка */}

      {/* Третья строка */}
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[5]}
          alt={`Image 6`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] col-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[6]}
          alt={`Image 7`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Третья строка */}

      {/* Четвертая строка */}
      <div className="relative w-full h-[500px] col-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[19]}
          alt={`Image 20`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[7]}
          alt={`Image 8`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Четвертая строка */}

      {/* Пятая строка */}
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[8]}
          alt={`Image 9`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[9]}
          alt={`Image 10`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>

      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[10]}
          alt={`Image 11`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Пятая строка */}

      {/* Шестая строка */}
      <div className="relative w-full h-[500px] col-span-2 row-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[11]}
          alt={`Image 12`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[12]}
          alt={`Image 13`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Шестая строка */}

      {/* Седьмая строка */}
      <div className="relative w-full h-[500px] row-span-2 col-span-1 mt-4 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[13]}
          alt={`Image 14`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[14]}
          alt={`Image 15`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>

      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[15]}
          alt={`Image 16`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Седьмая строка */}

      {/* Восьмая строка */}
      <div className="relative w-full h-[500px] col-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[17]}
          alt={`Image 17`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>

      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[16]}
          alt={`Image 18`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Восьмая строка */}

      {/* Девятая строка */}
      <div className="relative w-full h-[500px] transition-transform duration-300 hover:scale-105">
        <Image
          src={images[20]}
          alt={`Image 18`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      <div className="relative w-full h-[500px] col-span-2 row-span-2 transition-transform duration-300 hover:scale-105">
        <Image
          src={images[18]}
          alt={`Image 17`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl shadow-sm"
        />
      </div>
      {/* Девятая строка */}
    </div>
  );
};

export default SectionPhotos;

// className =
//   "relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl shadow-sm transition-transform duration-300 hover:scale-105";
