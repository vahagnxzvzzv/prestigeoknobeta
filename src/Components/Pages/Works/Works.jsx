import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Works.module.css'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); 
  const [totalPhotos, setTotalPhotos] = useState(0);

  useEffect(() => {
    fetchPhotos(currentPage, itemsPerPage);
  }, [currentPage]);

  const fetchPhotos = async (page, limit) => {
    try {
      const response = await fetch(`http://localhost:3000/photos?page=${page}&limit=${limit}`);
      const data = await response.json();
      setPhotos(data.data);
      setTotalPhotos(data.totalPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalPhotos / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={classes.portfolioContainer}>
      <h1>Наши работы</h1>
      <div className={classes.photo_grid}>
        {photos.map((photo, index) => (
          <img className={classes.photo} key={index} src={photo}  alt={`Photo ${index + 1}`} />
        ))}
      </div>
      <div className={classes.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Предыдущий
        </button>
        <span>{` Страница ${currentPage} из ${Math.ceil(totalPhotos / itemsPerPage)} `}</span>
        <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(totalPhotos / itemsPerPage)}>
        Следующий
        </button>
      </div>
    </div>
  );
};
export default PhotoGallery;
