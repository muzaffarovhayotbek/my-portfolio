import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Me from './pages/me/Me';
import ErrorPage from './pages/Error/ErrorPage';
import Social from './pages/Social/Social';

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <MainLayouts>
              <Home></Home>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <MainLayouts>
              <Blog></Blog>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/me"
          element={
            <MainLayouts>
              <Me></Me>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/social"
          element={
            <MainLayouts>
              <Social></Social>
            </MainLayouts>
          }
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
