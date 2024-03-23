import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if(jobs.length > 0){
            const appliedJobs = jobs.filter(job => )
        }
    }, [])
    return (
        <div>
            <h2>Applied JObs</h2>
        </div>
    );
};

export default AppliedJobs;