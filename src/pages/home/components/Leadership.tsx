import manImg1 from "@/assets/sidebar/s6-removebg-preview.png";
import manImg2 from "@/assets/sidebar/s7-removebg-preview.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";

const Leadership = () => {
  const leaders = [
    {
      img: manImg1,
      name: "Md. Nahid Islam",
      title: "Honorable Adviser",
    },
    {
      img: manImg2,
      name: "Md. Shamsul Arefin",
      title: "Secretary",
    },
  ];
  return (
    <div className="p-[70px]">
      <div className="text-center mb-10">
        <h2 className="heading">Leadership Spotlight</h2>
        <h3 className="subHeading">Meet Our Honorable Adviser and Secretary</h3>
      </div>
      <div className="flex justify-center gap-x-[70px]">
        {leaders.map((item, idx) => {
          return (
            <div key={idx} className="space-y-2">
              <img
                src={item.img}
                alt=""
                className="w-[250px] h-[290px] object-cover border rounded-md bg-primary-foreground"
              />
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-lg font-medium">{item.name}</p>
              <div className="flex items-center gap-x-2 text-primary">
                <RiFacebookCircleLine className="text-[24px] cursor-pointer hover:text-primary-foreground" />
                <TiSocialTwitterCircular className="text-[26px] cursor-pointer hover:text-primary-foreground" />
                <MdAlternateEmail className="text-[22px] cursor-pointer hover:text-primary-foreground" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
