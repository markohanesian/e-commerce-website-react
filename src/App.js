import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
