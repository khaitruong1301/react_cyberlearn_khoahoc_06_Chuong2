import React from 'react'
import { useLocation, useMatch, useParams } from 'react-router-dom'

export default function Detail(props) {
 
    const params = useParams();
    const match = useLocation();

    console.log(params)
    console.log(match);



  return (
    <div>
        <h3>Detail page</h3>
        <p>{params.id}</p>
    </div>
  )
}


