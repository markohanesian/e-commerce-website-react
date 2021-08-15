import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Services from './components/Services';
import {servicesData} from './components/Services/data'

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Hero />
        <Services heading='Choose your option' data={servicesData} />
      </Router>
    </div>
  );
}

export default App;
