import React from 'react'
import Bike from '../assests/boy-bike.png'

const Herosection = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-5 col-xs-12 d-flex  justify-content-center flex-column'>
                    <h1 className='fs-1 fw-lighter fw-normal text-dark'>Fair price ride</h1>
                    <h1 className='fs-1 fw-bold text-dark my-4'>Rent our <span className='text-warning'>Scooter</span></h1>
                    <p className='text-secondary fw-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type 
                         specimen book. </p>
                </div>
                <div className='col-md-2 d-none d-sm-none d-md-block'></div>
                <div className='col-md-5 col-xs-12 d-flex justify-content-center mt-5'>
                    <img src={Bike} alt="Bike img" />
                </div>
            </div>
        </div>
    )
}

export default Herosection