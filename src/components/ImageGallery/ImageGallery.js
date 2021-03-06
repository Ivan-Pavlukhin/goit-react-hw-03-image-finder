import { ImageGalleryItem } from "../ImageGalleryItem"

export const ImageGallery = ({ images }) => {
    return (
      <ul className="ImageGallery">
        {images.map(image => <ImageGalleryItem image={image} key={image.id} />)}
      </ul>
    )
}