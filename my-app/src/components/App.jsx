import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

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
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;