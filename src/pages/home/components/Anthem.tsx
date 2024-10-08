import anthemAudio from "@/assets/assets/bd_national_anthem.mp3";

const Anthem = () => {
  return (
    <div className="anthem flex justify-center flex-col items-center">
      <div className="text-center mb-10 text-white">
        <h2 className="heading text-white">National Anthem</h2>
        <h3 className="subHeading text-white">
          Listen to the sacred anthem that unites our nation.
        </h3>
      </div>
      <audio controls>
        <source src={anthemAudio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Anthem;
