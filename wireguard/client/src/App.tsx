import { useDispatch } from 'react-redux';
import WireguardForm from './components/forms/WireguardForm';
import ClientConfig from './models/clientConfig';
import { StoreDispatch, useStoreSelector } from './store';
import { addConfig, restartService } from './store/client-config-slice';

function App() {
  const state = useStoreSelector(state => state.clientConfig.wg_status);

  const dispatch = useDispatch<StoreDispatch>();

  const restartClicked = () => {
    dispatch(restartService());
  }

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
      <pre>{state}</pre>
      <button type='button' onClick={restartClicked}>Restart Service</button>
    </div>
  );
}

export default App;
