import React,{ useState } from "react";
import './Searchbar.css';
import './FoodData'
import Form from 'react-bootstrap/Form'
import Fooddata from "./FoodData";
import Cards from "./Cards";

const search = () => {
const[fdata,setFdata] = useState(Fooddata)
return(
    <div>
        <div className="container d-flex justify-content-between align-items-center">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" style={{width:'8rem', position:'relative', left:'2%', cursor:'pointer'}} alt="Zomato Logo" />
        <h2>Search</h2>

        </div>

        <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>
<section className="item_section mt-4 container">
    <h2 className="px-4" style={{fontweight:400}}>Restauarnts in Delhiii</h2>
    <div className="row mt-2 d-flex justify-content-around align-items-center">
        <Cards data={fdata} />
    </div>

</section>


</div>



)



}

export default Searchbar;