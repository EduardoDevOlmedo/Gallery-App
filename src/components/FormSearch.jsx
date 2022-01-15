import React from 'react'
import PropTypes from 'prop-types'

const FormSearch = ({handleSubmit}) => {
  


    return (
        <>
        <form onSubmit={handleSubmit}> 
            <label className='w-100'>
             Buscar: <input  className='w-100' type="text" name="inputText"></input>
             </label>
             <button type='submit' className='btn btn-warning'>
                 <span className='material-icons'>Search</span>
             </button>
        </form>
        </>
    )

}

FormSearch.propTypes = {
    handleSubmit: PropTypes.func
}

export default FormSearch
