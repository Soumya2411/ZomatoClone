import React,{ useEffect, useState } from "react";
import './Searchbar.css';
import './FoodData'
import Form from 'react-bootstrap/Form'
import Fooddata from "./FoodData";
import Cards from "./Cards";

const search = () => {
const[fdata,setFdata] = useState(Fooddata);
//console.log(fdata);


const[copydata,setCopyData]=useState([]);
//console.log(copydata);

const changeData=(e)=>{
let getchangedata=e.toLowerCase();
if(getchangedata==' '){
setCopyData(fdata);
}else{
 let storedata=copydata.filter((ele,k)=>{
   return ele.rname.toLowerCase().match(getchangedata)
 })   

 setCopyData(storedata)
}

useEffect(()=>{

setTimeout(()=>{
    setCopyData(Fooddata)

},3000)


},[])


return(
    <div>
        <div className="container d-flex justify-content-between align-items-center">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" style={{width:'8rem', position:'relative', left:'2%', cursor:'pointer'}} alt="Zomato Logo" />
        <h2>Search</h2>

        </div>

        <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text" 
                    onChange={(e)=>changeData(e.target.value)}
                    placeholder="Search Restaurant" />
                </Form.Group>
               
            </Form>
<section className="item_section mt-4 container">
    <h2 className="px-4" style={{fontweight:400}}>Restauarnts in Delhiii</h2>
    <div className="row mt-2 d-flex justify-content-around align-items-center">


        //agr copydata m koi value hogi to dikhynge ni to 3 sec k liye delay//
       {copydata && copydata.length ? <Cards data={copydata} />:"empty"}
    </div>

</section>


</div>



)



}

export default search;