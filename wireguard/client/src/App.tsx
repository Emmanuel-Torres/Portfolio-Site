import React, { useEffect } from 'react';
import WireguardForm from './components/forms/WireguardForm';
import apiService from './services/api-service';

function App() {

  useEffect(()=> {
    apiService.testUrl().then(r => console.log(r)).catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      <WireguardForm />
    </div>
  );
}

export default App;
