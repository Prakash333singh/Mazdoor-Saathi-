import { photos } from "./photos";
const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24 mb-5">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={photo.src}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-150"
          />
        </div>
      ))}
    </div>
  );
};

export { Gallery };
