import { Badge } from "../../components/Buttons/Badge";
import { Button } from "../../components/Buttons/Button";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";

const AboutSection = () => {
  return (
    <Stack
      orientation="vertical"
      container="default"
      className="items-start justify-start"
      padding="large"
    >
      <Stack
        orientation="horizontal"
        gap="large"
        container="none"
        className="flex-col md:flex-row h-fusll"
      >
        <div className="flex-1 max-w-2xl space-y-4 md:sticky md:top-[64px] h-fit">
          <Badge type="underline" textColor="black">
            Who we are
          </Badge>
          <Typography variant="h2" className=" leading-[1.2] tracking-tighter">
            The Space Between Creative and Innovation
          </Typography>
          <Typography variant="subtitle1">
            At eleventhspace, we don’t settle for ordinary, we settle for
            extraordinary.
          </Typography>
          <Button variant="primary" color="black">
            Learn more about us
          </Button>
        </div>
        <div className="flex-1 bg-black rounded-xl min-h-[400px] md:min-h-[800px]">
          hello
        </div>
      </Stack>
    </Stack>
  );
};

export default AboutSection;
