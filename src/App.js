import MovieReview from './Components/MovieReview';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center',fontSize:'60px',marginBottom:'0px'}}>
        Movie Review App</h1>
      <p style={{textAlign:'center',fontSize:'20px',color:'grey',marginBottom:'50px'}}>
        - Using The NewYork Times API -</p>
         <MovieReview/>
    </div>
  );
}

export default App;
