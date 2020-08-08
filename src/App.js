import React from 'react';
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Recomded from './component/Recomded' 
import './App.css';

function App() {
  return (
    <div >
      <Header/>
      <div className='app_pages'>
        <Sidebar/>
        <Recomded/>
      </div>
      {/* sidebar */}
      {/* main/recomed vidio */}
    </div>
  );
}

export default App;
