import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const PaginateButtons = ({pages,page,keyword=''}) => {
  return (
      pages > 1 && <div>
          {[...Array(pages).keys()].map((p) => (
              <Link className='bg-blue-500' key={p + 1} to={`/?keyword=${keyword}&page=${p + 1}`} >
                  <NavLink className="bg-black" active={p + 1 === page} >{p +1 }</NavLink>
              </Link>
          ))}
   </div>
  )
}

export default PaginateButtons
