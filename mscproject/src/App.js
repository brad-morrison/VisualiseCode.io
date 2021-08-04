import './App.css';
import Hero from './components/Hero';
import UserBar from './components/UserBar'

function App() {
  return (
    <div className="App">
      <UserBar/>
      <Hero/>
      <div className='spacer'></div>
    </div>
  );
}

export default App;
