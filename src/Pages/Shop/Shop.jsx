import React from 'react'
import { NavLink } from 'react-router-dom'

const arrProduct = [
  {id:1,price:1000,name:'product 1'},
  {id:2,price:2000,name:'product 2'},
  {id:3,price:3000,name:'product 3'},
]



export default function Shop(props) {




  return (
    <div className='container'>
      <div className='text-center'>Product list</div>
      <div className='row'>
        {arrProduct.map((item,index)=>{
          return <div className='col-4' key={index}>
            <div className='card'>
              <img src={`https://picsum.photos/id/${item.id}/200/200`} alt={'...'} />
              <div className='card-body'>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <NavLink to={`/detail/${item.id}`} className='btn btn-success'>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}
