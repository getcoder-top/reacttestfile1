import React from 'react'
import "./invoice.css"
import { useState } from "react"
import axios from "axios"

function Invoicegenerator(){

    const[input,setInput]= useState({
        cname:"",
        phone:"",
        sno:"",
        itemname:"",
        quantity:"",
        price:""
    })


    function handleChange(event){
        const {name,value} = event.target;       
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    function onSubmit(event){
        event.preventDefault();
        const newNote={
            cname: input.cname,
            phone: input.phone,
            sno: input.sno,
            itemname: input.itemname,
            quantity:input.quantity,
            price: input.price
        }

        axios.post("https://localhost:4000/create", newNote)
        .then(res=>console.log("posted")).catch((error)=>console.log("not posted"))


    }

    
    // function add(n){
    //     var tr=n.parentNode.parentNode.cloneNode(true);
    //     document.getElementById("table").appendChild(tr);
    // };


  return (
    <>
     <div className="div1">
  <form>
    <h1>invoice generator</h1>
    <div className="customerdetails">
      <div className="customer1">
        <input
          type="text"
          name="cname"
          placeholder="Customer Name"
          id="name"
          onChange={handleChange}
          defaultValue={input.cname}
        />
        <br />
        <input
          type="number"
          name="phone"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          defaultValue={input.phone}
        />
      </div>
      <div className="customer2">
        <h4 className="invoiceno">
          invoice number :
          <input type="number" name="invoiceno" id="invoiceno" onChange={handleChange} defaultValue={input.invoiceno} />
        </h4>
        <h4 className="invoicedate">
          invoice date :<input type="date" name="date" id="invoicedate" />
        </h4>
      </div>
    </div>
    <div>
      <table id="table">
        <tbody>
          <tr className="th">
            <th>s.no.</th>
            <th>item name</th>
            <th>unit</th>
            <th>quantity</th>
            <th>price</th>
            <th>tax</th>
            <th>amount</th>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="sno"
                className="sno"
                onChange={handleChange}
                defaultValue={input.sno}
              />
            </td>
            <td>
              <input
                type="text"
                name="itemname"
                className="itemname"
                onChange={handleChange}
                defaultValue={input.itemname}
              />
            </td>
            <td>
              <select name="unit" className="unit">
                <option>NONE</option>
                <option>GRAMS</option>
                <option>KILOGRAMS</option>
                <option>NO</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                name="quantity"
                className="quantity"
                onChange={handleChange}
                defaultValue={input.quantity}
              />
            </td>
            <td>
              <input
                type="text"
                name="price"
                className="price"
                onChange={handleChange}
                defaultValue={input.price}
              />
            </td>
            <td>
              <select name="tax" className="tax">
                <option>NONE</option>
                <option>GST@ 0%</option>
                <option>IGST@ 0%</option>
              </select>
            </td>
            <td>
              <input
                type="number"
                name="amount"
                className="amount"
                onChange={handleChange}
                defaultValue={input.price}
              />
            </td>
            <td>
              <input type="button" defaultValue="add" className="button" />
            </td>
            {/* {/* <td><button onclick="add(this)">add</button></td> * /} */}
          </tr>
          <tr className="tfooter">
            <td />
            <td className="total1">total</td>
            <td className="total1" />
            <td className="total1" />
            <td className="total1" />
            <td className="total1" />
            <td className="total1" />
          </tr>
        </tbody>
      </table>
      <div className="total">
        TOTAL :
        <input type="number" name="total" className="total" placeholder={0} />
      </div>
      <button type="submit" onClick={onSubmit} className="submit">
        submit
      </button>
      <hr />
      <footer>
        <div className="footer">
          <h4>name : auto generated</h4>
          <h4>email : auto generated</h4>
          <h4>phone : auto generated</h4>
          <h4>account holder : auto generated</h4>
          <h4>website : auto generated</h4>
        </div>
      </footer>
    </div>
  </form>
</div>
    </>
  )
}

export default Invoicegenerator