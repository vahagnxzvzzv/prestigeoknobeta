import React, { useState } from "react";
import classes from './Header.module.css';
import logo from '../Assets/prestige_okno_logo_white.svg';
import phone_icon from '../Assets/phone_icon.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();  // useNavigate from react-router-dom

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Array of options
    const options = [
        { label: 'Пластиковые окна', link: '/plastic_windows' },
        { label: 'Балконы и лоджии', link: '/balcony_lodges' },
        { label: 'Входные группы', link: '/entrance_groups' },
    ];

    // Only pass labels to the Dropdown
    const dropdownOptions = options.map(option => option.label);

    // Handle selection by finding the corresponding link
    const handleSelect = (selectedOption) => {
        const selected = options.find(option => option.label === selectedOption.value);  // Map the label back to its corresponding object
        if (selected && selected.link) {
            navigate(selected.link);  // Use navigate with the link
        } else {
            console.error('Link not found in the selected option');
        }
    };

    return (
      <div>
        <header className={classes.header}>
          <div className={classes.location_name}>
            <h2>
              Оконная компания <br />
              Волжский /Волгоград
            </h2>
          </div>
          <img className={classes.logo} src={logo} alt="Logo" />
          <div className={classes.contact_info}>
            <img className={classes.phone_icon} src={phone_icon} alt="Phone Icon" />
            <div className={classes.phoneNumber}>
              <h2>8 (909) 380-09-09</h2>
              <h2>8 (8443) 21-07-08</h2>
            </div>
          </div>
        </header>
        <nav className={classes.navbar}>
          <button className={classes.menu_icon} onClick={toggleMenu}>
            <span>Навигационная Панель</span>
          </button>
          <ul className={`${classes.nav_links} ${isOpen ? classes.show : ""}`}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/profiles">Профили</Link></li>
            <div className={classes.dropdown}>
              <li>
                <Dropdown
                  options={dropdownOptions}  // Pass only labels
                  onChange={handleSelect}    // Handle selection
                  value={null}
                  placeholder="Услуги для вас"
                  placeholderClassName={classes.dropdown_placeholder}
                  controlClassName={classes.dropdown_menu}
                  arrowClassName={classes.dropdown_arrow}
                  menuClassName={classes.dropdownMenu}
                />
              </li>
            </div>
            <li><Link to="/discounts">Новости и акции</Link></li>
            <li><Link to="/reviews">Отзывы</Link></li>
            <li><Link to="/our_works">Наши работы</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;
