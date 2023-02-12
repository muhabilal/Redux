
import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shop from './component/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
