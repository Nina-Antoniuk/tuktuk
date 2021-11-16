import { useState } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Routs from './components/Routs';

function App() {
  const [firstVideo, setFirstVideo] = useState(''); // глобальний стейт потрібен лише для підміни відео

  const getFirstVideo = value => {
    setFirstVideo(value);
  };

  return (
    <div className="backGround">
      <div className="App">
        <Nav />
        <Routs getFirstVideo={getFirstVideo} firstVideo={firstVideo} />
      </div>
    </div>
  );
}

export default App;
