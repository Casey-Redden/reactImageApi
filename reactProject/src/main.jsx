import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
/*import PhotoGallery from './Photogallery.jsx'*/
import SearchBar from './searchbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchBar />
  </StrictMode>,
)
