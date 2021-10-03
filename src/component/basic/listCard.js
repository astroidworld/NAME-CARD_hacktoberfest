import React from 'react'

const ListCard = ({listdata}) => {
    console.log(listdata)
    return (
        <>
        {listdata.map((curElement,) => {
            return (
<>
<div class="card" key={curElement.id}>               
<div class="box">
<div class="content">
<img src={curElement.image} alt="avtar"></img>                     
<h3>{curElement.firstName} {curElement.lastName}</h3> 
<h4>Now I'm a open source contributer.</h4>                    
<a href={curElement.link} target="_blank" rel="noreferrer">Visit</a>
</div>
</div>
</div>  
</>
            )
        })}

        </>
    )
}

export default ListCard
