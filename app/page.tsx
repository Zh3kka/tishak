import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Круглая фотография с бордером и оконтовкой */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 transition-transform duration-300 hover:scale-105 rounded-full border-4 border-white shadow-[0_0_0_4px_rgba(0,0,0,1)] overflow-hidden">
            <Image
              src="/tishak.JPG"
              alt="Tishak"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About me</h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
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
