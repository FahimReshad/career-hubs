import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const appliedJobs = jobs.filter(job => storedJobsId.includes(job.id));
      const appliedJobs = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setJobsApplied(appliedJobs);
    }
  }, []);
  return (
    <div>
      <h2>Applied JObs: {jobsApplied.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li><a>Onsite</a></li>
        </ul>
      </details>
      <ul>
        {jobsApplied.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name} {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
