import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Characters, Main, Nav, NotFoundPage } from './components';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
