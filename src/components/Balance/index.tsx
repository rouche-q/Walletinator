import React, { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";


const Balance = () => {
    const { account, library, chainId } = useWeb3React<Web3Provider>()
    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0))

    useEffect(() => {
        if (library && account)
            library.getBalance(account).then((balance: BigNumber) => {
                setBalance(balance)
                console.log(balance)
            }).catch(() => {
                setBalance(BigNumber.from(0))
            })
        return () => {
            setBalance(BigNumber.from(0))
        }
    }, [account, library, chainId])

    return (
        <div>
            <p><b>Your balance : </b>{balance !== undefined && formatEther(balance)} BNB</p>
        </div>
    )
}

export default Balance