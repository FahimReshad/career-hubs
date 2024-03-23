import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";
const Job = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    console.log(id, jobs);
    const handleApplyJob = () => {
        saveJobApplication(id);
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2>Job Details of: {id}</h2>

            <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default Job;