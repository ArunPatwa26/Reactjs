import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   {/* <Navbar title="Arun" aboutus="Its Forme" /> */}
   {/* <Navbar/> */}
   <div className="container">

   <TextForm heading="Enter Your Text To Convert"/>
   </div>
   </>
  );
}

export default App;
