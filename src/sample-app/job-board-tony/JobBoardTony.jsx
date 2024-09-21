import React from 'react'

const limit = 3;

function JobBoardTony() {
  const [jobs, setJobs] = React.useState([]);
  const [jobIds, setJobIds] = React.useState(null);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    async function fetchJobIds() {
      let jobs = jobIds;
      if(!jobs) {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
        jobs = await res.json();
        setJobIds(jobs);
      }
      const start = page * limit; 
      const end = start + limit;
      // 0 -> start = 0, end = 3
      // 1 -> start = 3, end = 6
      // 2 -> start = 6, end = 9
      return jobs.slice(start, end);
    }

    async function fecthJobs() {
      const jobIdsPerPage = await fetchJobIds();
      const jobs = await Promise.all(
        jobIdsPerPage.map(jobId => fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(res => res.json()))
      )
      setJobs(prevState => [...prevState, ...jobs])
    }
   
    fecthJobs();
  }, [page])

  function handleLoadMore() {
    setPage(prevState => prevState + 1)
  }

  return (
    <div>
      <h1>Sample App: JobBoardTony</h1>

      {jobs.map(job => {
        return (
          <div key={job.id} className="post">
            <h2 className="post__title">{job.title}</h2>
            <p className="post__metadata">By {new Date(job.time * 1000).toLocaleString()}</p>
          </div>
        )
      })}
      <button 
        onClick={handleLoadMore}
        className="load-more-button"
      >
        Load more jobs
      </button>
    </div>
  )
}

export default JobBoardTony