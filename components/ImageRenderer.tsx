import GalleryImage from "./Gallery_Image";

interface ImageRendererProps {
    images: string[],
    onClick: (index: number) => void;
}

export const ImageRenderer: React.FC<ImageRendererProps> = ({ images, onClick }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: images.length }, (_, index) => (
              <GalleryImage className="gallery-view" key={index} src={images[index]} alt={`Gallery Image ${index + 1}`} onClick={onClick} index={index} />
            ))}
        </div>
    )
}