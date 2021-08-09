import './App.css';
import HomePage from './pages/HomePage'
import MenuBar from './components/MenuBar'
import SideMenu from './components/SideMenu';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import '../node_modules/primeflex/primeflex.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="content">
        <SideMenu/>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
