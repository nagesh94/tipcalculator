import React, { useState } from 'react'
import './Input.css';

export default function Input(props) {

    const [jason, setJason] = useState({
        amount: "",
        service: "",
        customer: "",
        tipAmount: ''

    })

    function changeHandler(event) {
        setJason({ ...jason, [event.target.name]: event.target.value })

    }

    function tipamt(event)
    {
        
            if (event.target.value == "Excellent") {
                setJason({ ...jason, tipAmount: (jason.amount) * (20 / 100) })
            }
            
            else if (event.target.value == "Moderate") {
                setJason({ ...jason, tipAmount: (jason.amount) * (10 / 100) })
            }
            else {
                setJason({ ...jason, tipAmount: (jason.amount) * (5 / 100) })
            }
    }


function sendData() {

    
    props.getData(jason)
}

console.log(jason)
return (
    <div className='input'>
        <h3>ENTER BILL AMOUNT !!!!!</h3>
        <input type="number" className='text' name='amount' onChange={changeHandler} />
        <hr />
        <div className='customerInput'>

            <label htmlFor="option">How Was The service ?</label>
            <select id='option' name='service' onChange={changeHandler} onClick={tipamt} >
                <option>choose... </option>
                <option>Excellent </option>
                <option>Moderate</option>
                <option>Bad</option>
            </select>
            <input type="text" placeholder='Customer Name' name='customer' onChange={changeHandler} className='customerName' />
            <button className='addCustomer' onClick={sendData}>Add customer</button>
        </div>


    </div>
)
}
