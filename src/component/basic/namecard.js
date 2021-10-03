import React, { useState } from 'react'
import "./style.css"
import List from "./listApi.js"
import ListCard from './listCard'
const Namecard1 = () => {

  const [listdata , setListdata] = React.useState(List);

    return (
        <> 
        <div class="container">
<header><h1><div>NAME-CARD</div></h1></header>
<main>   
<div class="mainheading"><h1><div> Successfull contributers list</div></h1></div>
<div class="container2">
    <ListCard listdata={listdata}/>
</div> 
</main>
</div>        
        </>
    )
}

export default Namecard1;
