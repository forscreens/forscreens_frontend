import React from 'react'
import FilteredCard from './FilteredCard'
import './Filtered.css'
import FilterDataStorage from './FilterDataStorage'

const FilteredData = () => {
  return (
    <>
    <div className='container justify-content-center align-items-center mt-5'>
        <div className='row justify-content-center my-3'>
      <div className="search w-75">
        <div className="row">
          <div className="col-md-6">
            <div className="search-1">
              {/* <BsSearchAlt /> */}
              <input type="text" placeholder="Actor" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="search-2">
                {/* <BxsMap /> */}
                <input type="text" placeholder="Filter Actors" />
                <button>Search</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <FilteredCard
    imgsrc={FilterDataStorage[0].imgsrc}
    names={FilterDataStorage[0].names}
    contact={FilterDataStorage[0].contact}
    expriance={FilterDataStorage[0].expriance}
    cast={FilterDataStorage[0].cast}
    /> 
      <FilteredCard
    imgsrc={FilterDataStorage[0].imgsrc}
    names={FilterDataStorage[0].names}
    contact={FilterDataStorage[0].contact}
    expriance={FilterDataStorage[0].expriance}
    cast={FilterDataStorage[0].cast}
    /> 
      <FilteredCard
    imgsrc={FilterDataStorage[0].imgsrc}
    names={FilterDataStorage[0].names}
    contact={FilterDataStorage[0].contact}
    expriance={FilterDataStorage[0].expriance}
    cast={FilterDataStorage[0].cast}
    /> 
     <FilteredCard
    imgsrc={FilterDataStorage[0].imgsrc}
    names={FilterDataStorage[0].names}
    contact={FilterDataStorage[0].contact}
    expriance={FilterDataStorage[0].expriance}
    cast={FilterDataStorage[0].cast}
    /> 
     <FilteredCard
    imgsrc={FilterDataStorage[0].imgsrc}
    names={FilterDataStorage[0].names}
    contact={FilterDataStorage[0].contact}
    expriance={FilterDataStorage[0].expriance}
    cast={FilterDataStorage[0].cast}
    /> 
      </div>
    </>
  )
}

export default FilteredData