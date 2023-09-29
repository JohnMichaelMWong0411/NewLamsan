import './App.css';
import "@fontsource/poppins";
import Navbar from './Component/Navbar/Navbar';
import AboutUs from './Component/AboutUs/AboutUS';
import History from './Component/History/History';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function App() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <History />
    </div>
  );
}

export default App;
