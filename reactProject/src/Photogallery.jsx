import { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import './Photogallery.css';

const client = createClient('WkryOmUX60zHDlyL6j1c7KE8Ac98e4MZONs5NPNA6Bl5OPMyj42MGVTM');

function PhotoGallery({query, selectedImage, setSelectedImage }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    client.photos.search({ query, per_page: 20 })
      .then(response => {
        console.log('Fetched photos:', response);
        setPhotos(response.photos); // Save photos to state
      })
      .catch(err => console.error('Pexels error:', err));
  }, [query]);

  return (
    <>
      <div className="photo-grid">
        {photos.map(photo => (
          <img className="photo" 
          key={photo.id} 
          src={photo.src.medium} 
          alt={photo.alt} 
          onClick={() => setSelectedImage(photo.src.large)}/>
        ))}
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Fullscreen" className="modal-image" />
        </div>
      )}
    </>
  );
}

export default PhotoGallery;
