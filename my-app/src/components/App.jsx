import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  // const routeFreshness = useSelector(state => state.routeFreshness);
  const routeFragment = useSelector(state => state.routeFragment);

  useEffect(() => {

  }, []);

  useEffect(() => {
    if (typeof routeFragment === 'string') {
      window.location.hash = routeFragment;
    } else {
      window.location.hash = '';
    }
  }, [routeFragment]);


  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;