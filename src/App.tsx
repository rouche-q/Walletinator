import React from 'react';
import { useWeb3React } from '@web3-react/core'
import './App.css';
import { Web3Provider } from '@ethersproject/providers';
import Button from './components/Button';
import { injected } from './connector'
import Balance from './components/Balance';
import Account from './components/Account';

const App = () => {
  const { activate, active, deactivate } = useWeb3React<Web3Provider>()

  const onClickConnect = () => {
    activate(injected)
  }

  const onClickDisconnect = () => {
    deactivate()
  }

  return (
    <div className='App'>
      <div className='Card'>
        <Account />
        <Balance />
        {active ?
          <Button label='Disconnect' onClick={onClickDisconnect} /> :
          <Button label='Connect' onClick={onClickConnect} />
        }
      </div>
    </div>
  )
}

export default App;
