import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Badge } from "../../components/Buttons/Badge";
import { Button } from "../../components/Buttons/Button";
import TeamProfileCard from "../../components/Cards/TeamProfileCard";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";

// import { Virtual, Autoplay } from "swiper/modules";

const dummyTeamMembers = [
  {
    name: "Franklin Gyan Jr",
    designation: "Founder",
    image: "/team/franklin.jpg",
    imageHover: "/team/franklin-hovered.jpg",
  },
  {
    name: "Nii Amar Amartey",
    designation: "Photographer",
    image: "/team/Nii.jpg",
    imageHover: "/team/Nii-hover.jpg",
  },
  {
    name: "Afrakuma Lartey",
    designation: "Community Lead",
    image: "/team/afrakuma.jpg",
    imageHover: "/team/afrakuma-hover.jpg",
  },
  {
    name: "Benedicta Odoom",
    designation: "Community Lead",
    image: "/team/korea.jpg",
    imageHover: "/team/korea-hover.jpg",
  },
  {
    name: "Jason Amedzah",
    designation: "Videographer",
    image: "/team/jason.jpg",
    imageHover: "/team/Jason-hover.jpg",
  },
  {
    name: "Mustapha Mubarak",
    designation: "Videographer",
    image: "/team/mustapha.jpg",
    imageHover: "/team/mustapha-hover.jpg",
  },
  {
    name: "Simon Blay",
    designation: "Traffic Manager",
    image: "/team/Simon.jpg",
    imageHover: "/team/simonhover.jpg",
  },
];

const TeamSection = () => {
  return (
    <Stack
      orientation="vertical"
      gap="large"
      container="default"
      padding="large"
    >
      <Stack
        orientation="horizontal"
        className=" w-full items-end justify-between flex-col md:flex-row"
        container="none"
      >
        <div className="space-y-4 w-full max-w-[600px]">
          <Badge type="underline" textColor="black">
            Our Team
          </Badge>
          <Typography variant="h2" className=" leading-[1.2]">
            The Team Behind Our Creativity
          </Typography>
        </div>

        <div className=" space-y-4 w-full max-w-[400px]">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            animi optio neque. Saepe, atque doloribus!
          </Typography>
          <Button variant="secondary" color="black">
            Join our team
          </Button>
        </div>
      </Stack>

      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTeamMembers.map((team, tIndex) => (
          <TeamProfileCard
            key={tIndex}
            name={team.name}
            image={team.image}
            imageHover={team.imageHover}
            position={team.designation}
          />
        ))}
        <div className="w-full h-[90%] rounded-lg bg-black/10 col-span-2 text-center flex flex-col items-center justify-center gap-4">
          <h3 className=" max-w-[500px] leading-[1.2]">
            Join Our Creative team to bring your talent to light
          </h3>
          <Button variant="primary" color="black">
            Join the team
          </Button>
        </div>
      </div>
      {/* <div className="">
        <Swiper
          modules={[Virtual, Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={4}
        >
          {dummyTeamMembers.map((team, tIndex) => (
            <SwiperSlide className="w-fit max-w-[300px]" virtualIndex={tIndex}>
              <TeamProfileCard
                name={team.name}
                image={team.image}
                position={team.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </Stack>
  );
};

export default TeamSection;
