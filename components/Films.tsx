"use client";

const Films = () => {
  const videos = [
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjq5uQbmOzv9L7gHnMBhYu2V8OZbTKQp4R05wy",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjkgd78W1r4GN6UH2bDVJatgp9mRc5BC0XSA1P",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjmOHteNlx7QUukiVvmqRFJEfTsjbzXreI0ZS5",
    "https://hpisixztqp.ufs.sh/f/rLSjidNURJqjxWta6EC4BmU38K01WjQfOAr2htRVv5MTlLN7",
  ];

  const handleVideoClick = (index: number) => {
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center uppercase mb-12 tracking-wide">
        Films & Music Clips
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative bg-gray-800 aspect-video rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => handleVideoClick(index)}
          >
            {/* Видео */}
            <video
              id={`video-${index}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loop
              controls={false}
            >
              <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-16 h-16 text-white opacity-70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
