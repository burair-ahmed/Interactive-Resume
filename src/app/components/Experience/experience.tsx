import "./experience.css";
import Timeline from "../timeline/Timeline";

export default function Experience() {
  return (
    <div>
      <div className="container mx-auto w-3/5 ">
        <h1 className="text-center section-heading">Experience</h1>
      </div>
      <div className="container mx-auto w-3/5 main-container-experience">
        <div className="grid grid-cols-12 gap-8 main-section-experience">
            <div className="col-span-12"><Timeline /></div>
            
        </div>
      </div>
    </div>
  );
}