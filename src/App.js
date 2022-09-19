import Header from './components/Header';
import Footer from './components/Footer';
import FinalFantasyEdit from './pages/FinalFantasyEdit';
import FinalFantasyIndex from './pages/FinalFantasyIndex';
import FinalFantasyNew from './pages/FinalFantasyNew';
import FinalFantasyShow from './pages/FinalFantasyShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
   <Header />
   <Footer />
   <FinalFantasyEdit />
   <FinalFantasyIndex />
   <FinalFantasyNew />
   <FinalFantasyShow />
   <Home />
   <NotFound />
   </> 
   );
}

export default App;
