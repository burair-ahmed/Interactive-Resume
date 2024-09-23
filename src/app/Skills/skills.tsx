import "./skills.css";
import Progressbar from "../components/ProgressBar";
export default function Skills() {
  return (
    <div>
      <div className="container mx-auto w-3/5 ">
        <h1 className="text-center section-heading">Professional Skills</h1>
      </div>
      <div className="container mx-auto w-3/5 main-container-skills">
        <div className="grid grid-cols-12 gap-8 main-section-skills">
          <div className="col-span-6 test1">
          <Progressbar value={70} heading="Project Completion" />
            <Progressbar value={12} heading="Test" />
            <Progressbar value={32} heading="Project Completion" />
          </div>
          <div className="col-span-6 test1">
            <Progressbar value={95} heading="Project Completion" />
            <Progressbar value={35} heading="Test" />
            <Progressbar value={15} heading="Project Completion" />
          </div>
        </div>
      </div>
    </div>
  );
}
