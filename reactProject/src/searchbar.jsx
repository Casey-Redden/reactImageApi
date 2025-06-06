import { useState } from 'react';
import PhotoGallery from './Photogallery.jsx';
import './searchbar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('landscape');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (value) {
      setSearchTerm(value);
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSearch} className="form">
        <input className="searchbar" type="text" name="search" placeholder="Search photos..." />
        <button className="submit" type="submit">Search</button>
      </form>

      <PhotoGallery 
      query={searchTerm} 
      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage}
      />
    </div>
  );
}

export default SearchBar;


