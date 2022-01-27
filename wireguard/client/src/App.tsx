import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WireguardForm from './components/forms/WireguardForm';
import ClientConfig from './models/clientConfig';
import apiService from './services/api-service';
import { StoreDispatch } from './store';
import { addConfig } from './store/client-config-slice';

function App() {
  const dispatch = useDispatch<StoreDispatch>();

  useEffect(()=> {
    apiService.testUrl().then(r => console.log(r)).catch(e => console.log(e));
  }, []);

  const submitConfigHandler = (config: ClientConfig) => {
    dispatch(addConfig(config))
      .then(r => {
        if (r.meta.requestStatus === 'fulfilled') {

        }
        else {
          alert("Failed to post config");
        }
      })
  }

  return (
    <div className="App">
      <WireguardForm onSubmit={submitConfigHandler}/>
    </div>
  );
}

export default App;
