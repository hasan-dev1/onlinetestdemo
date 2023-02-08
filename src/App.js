import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="parent">
      <div className='child'>
        <Header></Header>
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
