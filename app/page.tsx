import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import UpperMenu from "@/components/UpperMenu";

export default function Home() {
  return (
    <>
      <UpperMenu />
      <section className="w-full h-[400px] flex items-center justify-center mb-[350px] relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="absolute top-0 w-full h-[700px] object-cover"
        >
          <source
            src="https://hpisixztqp.ufs.sh/f/rLSjidNURJqjpR3kgajiOVP0Z5gswAucWmH9v24EtXUQ6RMK"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center text-center mt-60">
          <Image
            src="/tishak.JPG"
            alt="Tishkevich Danila"
            width={300}
            height={300}
            className="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="mt-4 p-4 bg-black bg-opacity-50 border border-white rounded-lg">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
              Tishkevich Danila
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Filmmaker & Photographer
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <div className="">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
            About me
          </h1>
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
            Hi! My name is Danila Tishkevich, and I am a videographer and
            photographer with six years of experience. I graduated from the
            Moscow Film School with a degree in cinematography. <br />
            I have worked on music videos, commercials, TV series, films, and
            social media content. I love shooting in an anamorphic format,
            capturing depth and atmosphere. In photography, I strive to show
            life as it is—authentic and cinematic. <br />
            Filmmaking and photography are not just my profession but a way of
            life. I can’t imagine myself without a camera and am always
            searching for new stories to tell through the lens.
          </p>
        </div>
      </section>

      {/* Блоки PHOTOS и VIDEOS */}
      <section className="container mx-auto p-4">
        <div className="flex flex-col gap-4">
          {/* PHOTOS */}
          <Link href="/photo">
            <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-105 rounded-md">
              <Image
                src="/photo/3.jpg"
                alt="Header Photo"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-black bg-opacity-30 py-20 px-10 backdrop-blur-sm rounded-xl">
                  <h1 className="text-white text-xl sm:text-[50px] md:text-[67px] lg:text-[90px] uppercase transition-all duration-300 group-hover:scale-105">
                    Photo production
                  </h1>
                </div>
              </div>
            </section>
          </Link>

          {/* VIDEOS */}
          <Link href="/video">
            <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-105 rounded-md">
              {/* Видео-фон */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full min-h-full min-w-full object-cover"
              >
                <source
                  src="https://hpisixztqp.ufs.sh/f/rLSjidNURJqjpR3kgajiOVP0Z5gswAucWmH9v24EtXUQ6RMK"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-black bg-opacity-30 py-20 px-10 backdrop-blur-sm rounded-xl">
                  <h1 className="text-white text-xl sm:text-[50px] md:text-[67px] lg:text-[90px] uppercase transition-all duration-300 group-hover:scale-105">
                    Video production
                  </h1>
                </div>
              </div>
            </section>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
