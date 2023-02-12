import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actions } from '../redux';
function Shop() {
    const dispatch = useDispatch();
    // const action = bindActionCreators(actions, dispatch)
    const { withdrawMoney, depositMoney } = bindActionCreators(actions, dispatch)
    const store = useSelector((state) => state.amount)
    console.log(store)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className='btn btn-primary mx-2' onClick={() => { dispatch(actions.withdrawMoney(100)) }}>-</button>
            Update Balacne
            <button className='btn btn-primary mx-2' onClick={() => { dispatch(actions.depositMoney(100)) }}>+</button> */}
            <button className='btn btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
            Update Balacne :{store}
            <button className='btn btn-primary mx-2' onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop
