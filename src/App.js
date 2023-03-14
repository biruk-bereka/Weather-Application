import { BrowserRouter } from 'react-router-dom';
import './App.css';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <BrowserRouter>
      <WeatherApp />
    </BrowserRouter>
  );
}

export default App;
