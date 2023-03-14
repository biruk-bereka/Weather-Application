import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import WeatherApp from './components/WeatherApp';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
