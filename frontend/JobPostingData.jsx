import React from 'react';
import InputField from './src/components/InputField';

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  const generateDate = (daysAgo) => {
    const date = new Date(now - daysAgo * 24 * 60 * 60 * 1000);
    return date.toISOString().slice(0, 10);
  };

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='dateFilter' value='' onChange={handleChange} />
          <span className='checkmark'></span> All time
        </label>
        <InputField handleChange={handleChange} value={generateDate(1)} title='Last 24 Hours' name='dateFilter' />
        <InputField handleChange={handleChange} value={generateDate(7)} title='Last 7 days' name='dateFilter' />
        <InputField handleChange={handleChange} value={generateDate(30)} title='Last Month' name='dateFilter' />
      </div>
    </div>
  );
};

export default JobPostingData;
