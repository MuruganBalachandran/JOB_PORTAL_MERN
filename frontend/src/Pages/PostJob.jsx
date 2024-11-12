import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';
const PostJob = () => {
  const skills = [
    { id: 0, value: 'JavaScript', label: 'JavaScript' },
    { id: 1, value: 'React', label: 'React' },
    { id: 2, value: 'Node.js', label: 'Node.js' },
    { id: 3, value: 'Python', label: 'Python' },
    { id: 4, value: 'CSS', label: 'CSS' },
    { id: 5, value: 'HTML', label: 'HTML' },
    { id: 6, value: 'TypeScript', label: 'TypeScript' },
    { id: 7, value: 'Java', label: 'Java' },
    { id: 8, value: 'Ruby', label: 'Ruby' },
    { id: 9, value: 'PHP', label: 'PHP' },
    { id: 10, value: 'C++', label: 'C++' },
    { id: 11, value: 'C#', label: 'C#' },
    { id: 12, value: 'Go', label: 'Go' },
    { id: 13, value: 'Swift', label: 'Swift' },
    { id: 14, value: 'Kotlin', label: 'Kotlin' },
    { id: 15, value: 'SQL', label: 'SQL' },
    { id: 16, value: 'MongoDB', label: 'MongoDB' },
    { id: 17, value: 'Docker', label: 'Docker' },
    { id: 18, value: 'Kubernetes', label: 'Kubernetes' },
    { id: 19, value: 'AWS', label: 'AWS' },
    { id: 20, value: 'Azure', label: 'Azure' },
    { id: 21, value: 'GraphQL', label: 'GraphQL' },
    { id: 22, value: 'Firebase', label: 'Firebase' },
    { id: 23, value: 'Spring Boot', label: 'Spring Boot' },
    { id: 24, value: 'Flutter', label: 'Flutter' },
    { id: 25, value: 'TensorFlow', label: 'TensorFlow' },
    // Add more skills as needed
  ]

  const [selectedOption, setSelectedOption] = useState(null)
  const { register, handleSubmit, setValue } = useForm()

  register("requiredSkills")
  const onSubmit = (data) => console.log(data)

  const handleSkillsChange = (selectedOptions) => {
    setSelectedOption(selectedOptions)
    setValue("requiredSkills", selectedOptions)
  }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-14 px-2'>
      <div className='bg-[#FAFAFA] my-4 py-12 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input
                type='text'
                placeholder='Job Title'
                {...register("jobTitle")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input
                type='text'
                placeholder='Company Name'
                {...register("companyName")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
          </div>

          {/* Second Row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input
                type='number'
                placeholder='Minimum Salary'
                {...register("minSalary")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input
                type='number'
                placeholder='Maximum Salary'
                {...register("maxSalary")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
          </div>

          {/* Third Row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select
                {...register("salaryType")}
                className='block w-full border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              >
                 <option value="">Choose your Salary type</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="hourly">Hourly</option>
              </select>
            </div>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input
                type='text'
                placeholder='Job Location'
                {...register("jobLocation")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Posting Date</label>
              <input
                type='date'
                {...register("postingDate")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Experience level</label>
              <select
                {...register("salaryType")}
                className='block w-full border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              >
  <option value="">Choose your experience</option>
<option value="No Experience">Hourly</option>
<option value="Internship">Internship</option>
<option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* Fifth Row: Required Skills */}
          <div className='w-full mt-4'>
            <label className='block mb-2 text-lg'>Required Skills</label>
            <CreatableSelect
              isMulti
              value={selectedOption}
              options={skills}
              onChange={handleSkillsChange}
              placeholder="Select or add skills"
              className='block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
            />
          </div>

          {/* Sixth Row */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Company Logo</label>
              <input
                type='url'
                placeholder='paste your company logo URL:https://example.com/img.png'
                {...register("companyLogo")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
            <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Experience level</label>
              <select
                {...register("salaryType")}
                className='block w-full border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              >
  <option value="">Choose your experience</option>
<option value="Full-time">Full-time</option>
<option value="Part-time">Part-time</option>
<option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className='w-full mt-4'>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea
              placeholder='Job Description'
              {...register("jobDescription")}
              className='block w-full border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              rows={4}
            ></textarea>
          </div>
          <div className='lg:w-1/2 w-full mt-4'>
              <label className='block mb-2 text-lg'>Job posted by</label>
              <input
                type='email'
                placeholder='example@gmail.com'
                {...register("gmail")}
                className='block w-full flex-1 border bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm'
              />
            </div>
          {/* Submit Button */}
          <div className='w-full mt-6'>
            <input type="submit" className='px-6 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostJob
