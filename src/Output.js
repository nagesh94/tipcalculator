import React, { useState } from 'react'
import './Output.css';
import Output1 from './Output1';


export default function Output(props) {

    const [tip, setTip] = useState(0)
    const [tipDetails, setTipDetails] = useState({
        totalCustomer: ''
    })
    const [tipamt, settipamt] = useState({
        totalTip: ''
    })
    const [cust, setcust] = useState([])
    function tips() {
        setTipDetails({ ...tipDetails, totalCustomer: props.value.length })
        var total = props.value.reduce((accum, current) => {
            return accum + current.tipAmount;
        }, tip)
        settipamt({ ...tipamt, totalTip: total })

        setcust(props.value)

    }



    console.log(props.value)



    return (
        <div>
            <Output1 xyz={cust} />
            <button className='tipCalculate' onClick={tips} >Calculate Tip & customer</button>
            <table >
                <thread>
                    <tr>
                        <th className='x'>Total Customer</th>

                        <th className='y'>Tip</th>

                    </tr>
                    <hr style={{width:90}} />
                </thread>
                
                <tbody>
                    <tr>
                        <td className='x'>{tipDetails.totalCustomer}</td>
                        <td className='y'>{tipamt.totalTip}</td>
                    </tr>
                    
                </tbody>


            </table>

        </div>
    )
}



{/* {props.value.length>0?
    props.value.map((item) =>
    {
        return <td>{item.parseInt(amount)}</td>
        <td>{item.service}</td>
    }
    )
    :""
} */}
