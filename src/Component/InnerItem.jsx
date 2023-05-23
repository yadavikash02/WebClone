import React from 'react'
function InnerItem({ logo, title, des ,para }) {

    return (
        <div>
            <div className="card text-bg-dark " >
                <img src={logo} className="card-img img-fluid viku" alt="..." />
                <div className="card-img-overlay my-5">
                    <h1 className="card-title text-center">{title}</h1>
                    <p className="card-text text-center">
                        {des}
                    </p>
                </div>
            </div>
            <div className="container text-center my-5">
                <h2>Collaborate   |   Speed  |  Innovate</h2>
                <p>{para}</p>
            </div>
        
            
        </div>
    )
}

export default InnerItem
