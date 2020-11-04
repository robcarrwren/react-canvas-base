import * as React from 'react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar/Sidebar';

export const App = () => {
  return (
    <div className='flex flex-row h-screen'>
      <div id='taskbar_container' className='h-screen w-64'>
        <p className='text-blue-500 hover:text-blue-700'>asasas</p>
        <Sidebar />
      </div>
      <div id='canvas_container' className='flex-grow relative'>
        <Canvas />
      </div>
    </div>
  );
};

export default App;
