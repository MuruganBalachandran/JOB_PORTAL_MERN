import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Jobs from '../components/jobs';
import Card from '../components/Card';
import SideBar from '../SideBar/SideBar';
import NewsLetter from '../components/NewsLetter';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when query changes
  };

  // Calculate start and end indices for the current page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Move to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Move to the previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filter jobs by title and selected category
  const filteredItems = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const handleChangeBtn = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const filteredData = () => {
    let filteredJobs = [...filteredItems];
  
    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => {
        const selectedDate = new Date(selectedCategory);
        const jobDate = new Date(postingDate);
  
        return (
          jobLocation?.toLowerCase() === selectedCategory.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selectedCategory) ||
          (postingDate && jobDate >= selectedDate) || 
          salaryType?.toLowerCase() === selectedCategory.toLowerCase() ||
          employmentType?.toLowerCase() === selectedCategory.toLowerCase() ||
          experienceLevel.toLowerCase()===selectedCategory.toLowerCase()
        );
      });
    }
  
    // Get data for the current page
    const { startIndex, endIndex } = calculatePageRange();
    return filteredJobs.slice(startIndex, endIndex);
  };
  

  const result = filteredData();

  return (
    <div className="flex flex-col items-center">
      {/* Container for Banner and main grid */}
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-14 px-4 py-12 w-full'>
        
        {/* Left Sidebar */}
        <div className='bg-white rounded p-4 flex items-start'>
          <SideBar handleChange={handleChange} handleChangeBtn={handleChangeBtn} />
        </div>
        
        {/* Job Display Section */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            result.length > 0 ? (
              <>
                <Jobs result={result.map((data, i) => <Card key={i} data={data} />)} />
              </>
            ) : (
              <div className='text-center'>
                <h3 className='text-lg font-bold mb-2'>No jobs found</h3>
                <p>Please adjust your search or filter criteria.</p>
              </div>
            )
          )}

          {/* Pagination */}
          {filteredItems.length > itemsPerPage && (
            <div className='flex justify-center mt-4 space-x-8'>
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className='hover:underline'
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {Math.floor(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                className='hover:underline'
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
       <NewsLetter/>
      </div>
    </div>
  );
}

export default Home;
