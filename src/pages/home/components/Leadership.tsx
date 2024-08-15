import manImg1 from "@/assets/sidebar/s6-removebg-preview.png";
import manImg2 from "@/assets/sidebar/s7-removebg-preview.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Leadership = () => {
  const leaders = [
    {
      img: manImg1,
      name: "Md. Nahid Islam",
      title: "Honorable Adviser",
      about:
        "Nahid Islam, born in 1998 in Dhaka, is a prominent Bangladeshi student activist and adviser on ICT to the interim government of Bangladesh. He gained national attention as one of the key coordinators of the 2024 Anti-Discrimination Students Movement, which played a significant role in the Bangladesh quota reform movement. This movement eventually escalated into a non-cooperation movement that contributed to the overthrow of Prime Minister Sheikh Hasina’s government, despite initial dismissals of the protesters as Razakar. Currently, Nahid serves under Chief Adviser and Nobel Peace Prize laureate, Muhammad Yunus, as part of the interim government formed following these events. A sociology student at the University of Dhaka, Nahid completed his intermediate education at Govt. Science College in Tejgaon. He comes from a humble background, with his father working as a teacher and his mother as a homemaker. Nahid is married and has a younger brother, Nakib, who is also studying at the University of Dhaka.",
    },
    {
      img: manImg2,
      name: "Md. Shamsul Arefin",
      title: "Secretary",
      about:
        "Mr. MD SHAMSUL AREFIN, at present, the Secretary of Information and Communication Technology (ICT) Division. Prior to that, he served as Secretary, Coordination and Reforms, Cabinet Division. Also, he served as Additional Secretary and Joint Secretary at the same Division. He started his career on 1 April 1993 as Assistant Commissioner and Magistrate at Manikganj District. He is a member of Bangladesh Civil Service (Administration) cadre and belongs to BCS-11th batch. He obtained B. Com (Hons.) and M. Com from Department of Finance, Dhaka University. Mr. Arefin has served in almost all the core posts of the field administration like Magistrate, Assistant Commissioner (Land), UNO, DC in different parts of the country. Besides, he served as Deputy Director, Accommodation Directorate, Senior Assistant Secretary, Food and Disaster Management Ministry, Deputy Secretary-Economic Relations Division, Director-Rajdhani Unnayon Kotripokhho (RAJUK). He also worked as Assistant Commissioner (Land), Thana Election Officer and Returning Officer of National and Local Govt. level elections.",
    },
  ];
  return (
    <div className="p-[70px]">
      <div className="text-center mb-10">
        <h2 className="heading">Leadership Spotlight</h2>
        <h3 className="subHeading">Meet Our Honorable Adviser and Secretary</h3>
      </div>
      <div className="flex justify-center gap-x-5">
        {leaders.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex gap-x-5 w-full border rounded-md p-4"
            >
              <div className="space-y-2 flex-1">
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
              <div className="w-[300px]">
                <p>
                  {item.about.slice(0, 550)}...{" "}
                  <span className="flex items-center text-primary font-medium">
                    Read more
                    <MdOutlineKeyboardDoubleArrowRight className="text-primary ms-1 mt-1" />
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leadership;
