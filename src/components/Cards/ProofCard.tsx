type ProofCardT = {
  title?: string;
  content?: string;
};
const ProofCard = ({
  title = "Years of Experience",
  content = "16xp",
}: ProofCardT) => {
  return (
    <div className=" p-6 bg-[#44C4F5]/10 flex flex-col justify-between h-[350px] max-w-[410px] text-black">
      <h4>{title}</h4>
      <h1>{content}</h1>
    </div>
  );
};

export default ProofCard;
