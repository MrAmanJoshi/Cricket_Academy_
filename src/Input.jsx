import React from "react"

const Input = ({
type,
placeholder,
name,
touched,
error,
id,
  ...rest

}) => {

  return (
    <div className="mb-4 sm:mr-4">
      <label className="font-lg text-gray-700 mb-1">{placeholder}:</label>
  <input 
    placeholder= {placeholder} 
    type={type}     
    name={name}
    id={id}
    {...rest}
    className={`sm:w-64 h-10  w-full ${touched && error ? "border border-red-500" : "border border-gray-800 "}`  }/>
      
      { touched && error && <p className="text-red-500 text-sm sm:text-lg">{error}</p>}
  </div>
  )
}

export default Input;