import HeaderPhoto from "@/components/HeaderPhoto";
import SectionPhotos from "@/components/SectionPhotos";

const PhotoPage = () => {
  return (
    <>
      <HeaderPhoto />
      <section className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mt-10 mb-10">
          Photos
        </h1>
        <SectionPhotos />
      </section>
    </>
  );
};

export default PhotoPage;
