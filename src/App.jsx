import './App.css';
import About from './components/About/About';
import Cursor from './components/Cursor/Cursor';
import Glitch from './components/Glitch/Glitch';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ResultExperience from './components/ResultExperience/ResultExperience';
import Stack from './components/Stack/Stack';
import StagesDevelopment from './components/StagesDevelopment/StagesDevelopment';
import Technologies from './components/Technologies/Technologies';

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <div className="container">
          <Home />
          <About />
          <Technologies />
          <ResultExperience />
          <Stack />
          <Glitch />
          <StagesDevelopment />
      </div>
    </>
  );
}

export default App;
