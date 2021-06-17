export const ImageGalleryItem = ({image}) => {
    return (
        <li className="ImageGalleryItem" >
            <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" data-src={image.largeImageURL}/>
        </li>
    ) 
}