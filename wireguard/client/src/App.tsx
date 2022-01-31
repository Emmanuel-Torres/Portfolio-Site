import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import WireguardForm from './components/forms/WireguardForm';
import ClientConfig from './models/clientConfig';
import { StoreDispatch, useStoreSelector } from './store';
import { addConfig, getPeers, getStatus, removePeer, restartService } from './store/client-config-slice';

function App() {
  const state = useStoreSelector(state => state.clientConfig.wg_status);
  const peers = useStoreSelector(state => state.clientConfig.peers);

  const [peerPublicKey, setPeer] = useState('');

  const dispatch = useDispatch<StoreDispatch>();

  useEffect(() => {
    dispatch(getStatus());
    dispatch(getPeers());
  }, [dispatch, getStatus])

  const restartClicked = () => {
    dispatch(restartService());
  }

  const peerChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPeer(event.target.value);
  }

  const removePeerHandler = () => {
    dispatch(removePeer(peerPublicKey));
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
      <WireguardForm onSubmit={submitConfigHandler} />
      <pre>{state}</pre>
      <h2>Connected Peers</h2>
      {peers.map(p => <p>{p}</p>)}
      <div>
        <label>Remove Peer:</label>
        <input type='text' onChange={peerChangedHandler} />
        <button type='button' onClick={removePeerHandler}>Remove Peer</button>
      </div>
      <button type='button' onClick={restartClicked}>Restart Service</button>
    </div>
  );
}

export default App;
