import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';
function Item({logo,title,text,link,location}) {
  return (
    <div className="container card mb-3" >
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">
        {text}
        </p>
      </div>
    </div>
    <div className="col-md-4 ">
      <img src={logo} className="img-fluid rounded-start" alt="..." />
    </div>
  </div>
  <Link className="nav-link active" aria-current="page" to={location}>
            {link}
          </Link>
   
</div>

  )
}

export default Item
