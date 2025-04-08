import Stack from "../../components/Stack";
import Typography from "../../components/Typography";

const HeroSection2 = () => {
  return (
    <Stack
      container="full-width"
      orientation="vertical"
      className=" w-full items-center"
      padding="default"
    >
      <Typography
        variant="h1"
        className="text-black text-center justify-center tracking-tight max-w-2xl"
      >
        Sample Feature Text Goes Here To Hook The Audience
      </Typography>
    </Stack>
  );
};

export default HeroSection2;
