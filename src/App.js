import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Profiles from './Components/Pages/Profiles/Profiles';
import Services from './Components/Pages/Services/Services';
import PlascticDoors from './Components/Pages/Services/PlasticDoors/PlasticDoors';
import BalconiasLoggias from './Components/Pages/Services/BalconiesLoggias/BalconiasLoggias';
import EntranceGroups from './Components/Pages/Services/EntranceGroups/EntranceGroups';
import Discounts from './Components/Pages/Discounts/Discounts';
import Reviews from './Components/Pages/Reviews/Reviews';
import Contact from './Components/Pages/Contact/Contact';
import Measurement from './Components/Pages/Measurement/Measurement';
import Works from './Components/Pages/Works/Works';

function App() {
  return (
    <Router>
        <div  className="App">
            <Header />
            <main className='main'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profiles' element={<Profiles />}/>
                <Route path='/services' element={<Services />} />
                <Route path='/plastic_windows' element={<PlascticDoors />} />
                <Route path='/balcony_lodges' element={<BalconiasLoggias />} />
                <Route path='/entrance_groups' element={<EntranceGroups/>} />
                <Route path='/discounts' element={<Discounts />} />
                <Route path='/reviews' element={<Reviews />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/measurement' element={<Measurement />} />
                <Route path='/our_works' element={<Works />}/>
              </Routes>
            </main>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
