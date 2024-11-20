import { userDetail } from '../const';

export const VideoTab = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {userDetail.video.map((video) => (
          <div
            key={video.id}
            className="flex flex-col gap-3 p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
          >
            {/* Видео */}
            <iframe
              className="w-full h-52 sm:h-60 lg:h-72 rounded-lg"
              src={video.video}
              title={video.caption}
              allowFullScreen
            ></iframe>
            {/* Подпись */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 text-center">
              {video.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
