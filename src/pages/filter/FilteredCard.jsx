import React from 'react'
import './Filtered.css'

function FilteredCard(props) {
    return (
        <div className='container d-inline-grid col-lg-6 justify-content-center align-items-center mt-5'>
            <div className='row justify-content-center'>
                <div class="Card gap-1" >
                    <card className="box">
                        
                     <img className="logo" src={props.imgsrc} alt="" />
                       
                      <div className="contant-box ">
                         <div>
                           <div className='d-flex gap-1 '>
                                <span>Name:</span>
                                <span className='bg-primary'>{props.names}</span>
                           </div>
                           <div className='d-flex gap-1 mt-1 '>
                              <span>Expriance:</span>
                               <span>{props.expriance} </span>
                            </div>
                            <div className='d-flex gap-1 mt-1'>
                                <span>Casting:</span>
                                <span>{props.cast}</span>
                            </div>
                            <div className='d-flex gap-1 mt-1'>
                                <span>Contact Us:</span>
                                <span>{props.contact}</span>
                            </div>
                          </div>
                        </div>
                    </card>
                </div>

            </div>
           
        </div>

    )
}

export default FilteredCard