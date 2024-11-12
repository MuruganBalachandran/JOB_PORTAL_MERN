import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChangeBtn,handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2 mb-4'>Salary</h4>
      <div className='flex flex-row gap-1'>
      <Button onClickHandler={handleChange} value={""} title={"Hourly"}/>
      <Button onClickHandler={handleChange} value={"Monthly"} title={"Monthly"}/>
      <Button onClickHandler={handleChange} value={"Yearly"} title={"Yearly"}/>
      </div>
  
  <div>
  <label className='sidebar-label-container mt-3'>
        <input type='radio' name="test" id="test"  value="" onChange={handleChange}/>
        <span className='checkmark'></span>All
    </label>
    <InputField handleChange={handleChange} value={30} title={"< 30000k"} name="test1" />
    <InputField handleChange={handleChange} value={50} title={"< 50000k"} name="test1" />
    <InputField handleChange={handleChange} value={80} title={"< 80000k"} name="test1" />
    <InputField handleChange={handleChange} value={100} title={"< 100000k"} name="test1" />
  </div>
    </div>
  )
}

export default Salary
