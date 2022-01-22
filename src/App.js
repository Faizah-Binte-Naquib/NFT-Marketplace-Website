import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './components/TopMenu';
import Header from './components/Header';
import AmazeNFT from './components/AmazeNFT';
import CollectionOver from './components/CollectionOver';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <body>
        <div className='item'>
        <TopMenu/>
        </div>
        <br></br>
        <div className='item'>
        <Header/>
        </div>
        <br></br>
        <div className='item'>
        <AmazeNFT/>
        </div>
        <div className='item'>
        <CollectionOver/>
        </div>
        <div className='item'>
        <Footer/>
        </div>
    </body>
    </>
  );
}

export default App;
