import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Works.module.css'
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
      <title>Наши работы | Okna-Prestige34</title>
        <meta
          name="description"
          content="Посмотрите наши работы по установке окон, балконов, лоджий и входных групп. Примеры выполненных проектов компании Okna-Prestige34."
        />
        <meta
          name="keywords"
          content="работы Okna-Prestige34 в Волгограде, примеры окон, балконов и лоджий, выполненные работы по установке окон, портфолио окон и балконов, проекты входных групп в Волгограде, качественные работы по остеклению лоджий, фотогалерея выполненных проектов Okna-Prestige34, услуги установки окон и лоджий с примерами, лучшие проекты окон в Волгограде, монтаж входных групп и лоджий, примеры остекления и утепления балконов, реализованные проекты пластиковых окон и дверей, фото наших работ по установке окон, лоджий и балконов, работы по остеклению в частных домах и квартирах, успешные проекты компании Okna-Prestige34, работы Okna-Prestige34, примеры окон, балконов, лоджий, входных групп, выполненные работы, портфолио"
        />
        <meta property="og:title" content="Наши работы | Okna-Prestige34" />
        <meta
          property="og:description"
          content="Изучите портфолио компании Okna-Prestige34. Мы специализируемся на установке окон, балконов, лоджий и входных групп. Убедитесь в качестве наших услуг!"
        />
        <link rel="canonical" href="localhost:3000/our_works" />
      </Helmet>
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
