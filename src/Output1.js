import React,{useState} from 'react'

export default function Output1(props) {

    
    return (
        <div>
            <div className="customerList">
                <h1 className='custlist'>Customer List</h1>
                <hr />
                <ol className='listOfCustomer'>
                   {props.xyz.map((item)=>
                   {
                       return <li>{item.customer} is offering a tip of {item.tipAmount} rupee</li>
                   })}
                </ol>
            </div>
        </div>
    )
}
