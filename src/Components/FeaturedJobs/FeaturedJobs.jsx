import { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])




    return (
        <div className="text-center space-y-8 my-16">
            <div>
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <JobDetails key={job.id} job={job}></JobDetails>)
                }
            </div>
            <div className={dataLength=== jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-[#7E90FE] text-white font-bold text-xl">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;