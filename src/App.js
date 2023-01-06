import NavBar from './components/Navbar/NavBar';
import { action ,tv_series,comedy,horror} from './urls';
import Banner from './components/Banner/Banner';
import Itemlist from './components/ItemList/Itemlist'

import './App.css';

function App() {
  return(
    <div>
    <NavBar/>
    <Banner/>
    <Itemlist url={tv_series} title ="TV series"  />
    <Itemlist url={action} title = "Action" isSmall />
    <Itemlist url={comedy} title="Comedy" isSmall />
    <Itemlist url={horror} title ="Horror" isSmall />
    </div>
  )
    
}

export default App;
