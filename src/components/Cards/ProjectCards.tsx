import { Badge } from "../Buttons/Badge";
import Stack from "../Stack";
import Typography from "../Typography";

type ProjectCardT = {
  title: string;
  badgeText: string;
};

const ProjectCards = ({ title, badgeText }: ProjectCardT) => {
  return (
    <div className=" space-y-4">
      <div className="w-full h-full max-sm:aspect-[2/2.8] min-h-[600px] bg-black/70 rounded-xl">
        <img src="" alt="" />
      </div>
      <Stack
        container="none"
        orientation="horizontal"
        className="w-full items-center justify-between"
      >
        <Typography variant="h4">{title}</Typography>
        <Badge type="covered" textColor="white">
          {badgeText}
        </Badge>
      </Stack>
    </div>
  );
};

export default ProjectCards;
