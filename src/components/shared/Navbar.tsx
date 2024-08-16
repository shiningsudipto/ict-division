import CustomMenu from "../ui/CustomMenu";

const aboutUs = [
  {
    title: "About Division",
    links: [
      { href: "/", label: "History & Activities" },
      { href: "/", label: "Vision & Mission" },
      { href: "/", label: "Honorable Adviser" },
      { href: "/", label: "List of Ex-Ministers" },
      { href: "/", label: "Secretary" },
      { href: "/", label: "List of Ex-Secretaries" },
      { href: "/", label: "Organogram" },
      { href: "/", label: "Allocation of Business" },
      { href: "/", label: "Principal Function" },
      { href: "/", label: "Work Distribution" },
      { href: "/", label: "Member Nomination" },
    ],
  },
  {
    title: "Manpower",
    links: [
      { href: "/", label: "Officers" },
      { href: "/", label: "Work Distribution" },
      { href: "/", label: "Information Officer" },
      { href: "/", label: "GRS and Appellate Officer" },
      { href: "/", label: "Focal Point Officers" },
    ],
  },
  {
    title: "Services of Divisions",
    links: [
      { href: "/", label: "Citizen Charter" },
      { href: "/", label: "List of Citizen e-Services" },
    ],
  },
  {
    title: "Committees of Ministry/Division",
    links: [
      {
        href: "/",
        label:
          "Committees chaired by Honorable PM & Honorable Minister Regarding Ministry/Division",
      },
    ],
  },
];

const institutions = [
  { title: "", links: [{ href: "/", label: "List of Offices/Institutions" }] },
];
const galleryMenu = [
  {
    title: "",
    links: [
      { href: "/", label: "Photo Gallery" },
      { href: "/", label: "Video Gallery" },
    ],
  },
];
const policyMenu = [
  {
    title: "",
    links: [
      { href: "/", label: "Acts" },
      { href: "/", label: "Policy" },
      { href: "/", label: "Guidelines and Strategies" },
      { href: "/", label: "Draft Acts, Rules and Policy" },
    ],
  },
];
const servicesMenu = [
  {
    title: "",
    links: [
      { href: "/", label: "Casual Leave Management" },
      { href: "/", label: "Smart Dashboard" },
      { href: "/", label: "Get Your Freelancer ID" },
      { href: "/", label: "Fellowship & Innovation Fund Application" },
      { href: "/", label: "e-Nothi" },
      { href: "/", label: "Web mail" },
      { href: "/", label: "Online Salary Submission" },
      { href: "/", label: "e-Tendering(e-GP)" },
      { href: "/", label: "Mygov" },
      { href: "/", label: "GRP" },
      { href: "/", label: "Project Monitoring System" },
      { href: "/", label: "Online ACR" },
      { href: "/", label: "Online Recruitment" },
      { href: "/", label: "EMPORIA" },
    ],
  },
];

const projectMenu = [
  {
    title: "Project",
    links: [
      { href: "/", label: "On going Projects" },
      { href: "/", label: "Procurement Plan" },
      { href: "/", label: "Completed Projects" },
    ],
  },
  {
    title: "Programme",
    links: [{ href: "/", label: "Completed Programme" }],
  },
];
const contactAndCommentMenu = [
  {
    title: "Contact",
    links: [{ href: "/", label: "Office Address" }],
  },
  {
    title: "Comment",
    links: [{ href: "/", label: "Your Question & Comment" }],
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-primary-foreground/10 text-black flex items-center justify-between px-[60px]">
      <p className="font-bold text-2xl">
        <span className="text-primary">ICT</span>{" "}
        <span className="text-primary-foreground">Division</span>
      </p>
      <div>
        <ul className="flex items-center gap-x-3">
          <li>
            <CustomMenu options={aboutUs} label="About us" />
          </li>
          <li>
            <CustomMenu options={institutions} label="Institutions" />
          </li>
          <li>
            <CustomMenu options={projectMenu} label="Projects" />
          </li>
          <li>
            <CustomMenu options={galleryMenu} label="Gallery" />
          </li>
          <li>
            <CustomMenu
              options={contactAndCommentMenu}
              label="Contact & Comment"
            />
          </li>
          <li>
            <CustomMenu options={policyMenu} label="Policy" />
          </li>
          <li>
            <CustomMenu options={servicesMenu} label="e-Services" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
