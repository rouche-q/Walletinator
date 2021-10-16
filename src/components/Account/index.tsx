import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';

const Account = () => {
    const {account} = useWeb3React<Web3Provider>()
    return (
        <div>
           <p> <b>Your wallet adress :</b> {account ?`${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Unknow'} </p>
        </div>
    )
}

export default Account
