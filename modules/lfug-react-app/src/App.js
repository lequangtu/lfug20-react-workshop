import React from 'react';
import Blog from './components/Blog';
import './css/App.css';

import '@clayui/css/lib/css/atlas.css';

function App() {
  return (
    <div className="lfug-react-app">
      <div className="container">
        <h1 className="text-center mb-4">Blogs</h1>
        <Blog />
      </div>
    </div>
  );
}

export default App;
