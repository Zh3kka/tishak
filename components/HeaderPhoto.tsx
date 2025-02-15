import Image from "next/image";

const HeaderPhoto = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      <Image
        src={`/photo/3.jpg`}
        alt="Header Photo"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 w-full h-[200px] object-cover"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="bg-black bg-opacity-20 py-20 px-10 backdrop-blur-sm rounded-xl">
          <h1 className="text-white text-xl md:text-2xl lg:text-[120px] uppercase">
            Photo production
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeaderPhoto;
