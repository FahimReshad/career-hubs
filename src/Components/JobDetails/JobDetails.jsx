import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
const JobDetails = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-8 border">
      <figure className="h-14 w-32 flex justify-start">
        <img className=""
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3 mt-3">
        <h2 className="card-title text-[#474747] font-semibold">{job_title}</h2>
        <p className="card-title text-[#757575] font-medium">{company_name}</p>
        <div className="space-x-4 card-title">
            <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
        </div>
        <div className="flex gap-4">
            <div className="flex gap-2 items-center text-[#757575] font-medium text-xl"><CiLocationOn /> <span>{location}</span></div>
            <div className="flex gap-2 items-center text-[#757575] font-medium text-xl"><AiOutlineDollar /> <span>{salary}</span></div>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#7E90FE] text-white font-bold text-xl">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
