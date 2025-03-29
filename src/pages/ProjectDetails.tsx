import { useParams } from "react-router";

export default function ProjectDetails() {
  let { projectId } = useParams();
  return <div>Project Details Page : {projectId}</div>;
}
