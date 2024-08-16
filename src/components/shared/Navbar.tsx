import { Link } from "react-router-dom";
import CustomMenu from "../ui/CustomMenu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./style.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  aboutUs,
  contactAndCommentMenu,
  galleryMenu,
  institutions,
  policyMenu,
  projectMenu,
  servicesMenu,
} from "@/utils/menuLinks";

import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

const menuLinks = [
  {
    title: "About us",
    subMenus: [
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
    ],
  },
  {
    title: "Institutions",
    subMenus: [
      {
        title: "",
        links: [{ href: "/", label: "List of Offices/Institutions" }],
      },
    ],
  },
  {
    title: "Gallery",
    subMenus: [
      {
        title: "",
        links: [
          { href: "/", label: "Photo Gallery" },
          { href: "/", label: "Video Gallery" },
        ],
      },
    ],
  },
  {
    title: "Policy",
    subMenus: [
      {
        title: "",
        links: [
          { href: "/", label: "Acts" },
          { href: "/", label: "Policy" },
          { href: "/", label: "Guidelines and Strategies" },
          { href: "/", label: "Draft Acts, Rules and Policy" },
        ],
      },
    ],
  },
  {
    title: "Services",
    subMenus: [
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
    ],
  },
  {
    title: "Projects",
    subMenus: [
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
    ],
  },
  {
    title: "Contract & Comment",
    subMenus: [
      {
        title: "Contact",
        links: [{ href: "/", label: "Office Address" }],
      },
      {
        title: "Comment",
        links: [{ href: "/", label: "Your Question & Comment" }],
      },
    ],
  },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isEnglish, setEnglish] = useState(false);
  return (
    <>
      <div className="h-[30px] flex items-center justify-between bg-primary-foreground text-white md:px-[70px] px-5">
        <div className="flex items-center gap-x-2 text-white">
          <RiFacebookCircleLine className="text-[20px] cursor-pointer hover:text-primary" />{" "}
          <TiSocialTwitterCircular className="text-[23px] cursor-pointer hover:text-primary" />{" "}
          <FaRegCirclePlay className="text-[17px] cursor-pointer hover:text-primary" />
        </div>
        <div className="flex items-center gap-x-3">
          <div>
            {darkMode ? (
              <MdOutlineLightMode
                onClick={() => setDarkMode(!darkMode)}
                className="text-[20px] cursor-pointer hover:text-primary"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => setDarkMode(!darkMode)}
                className="text-[20px] cursor-pointer hover:text-primary"
              />
            )}
          </div>
          <div>
            {isEnglish ? (
              <p
                onClick={() => setEnglish(!isEnglish)}
                className="cursor-pointer hover:text-primary"
              >
                বাংলা
              </p>
            ) : (
              <p
                onClick={() => setEnglish(!isEnglish)}
                className="cursor-pointer hover:text-primary"
              >
                English
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-primary-foreground/10 text-secondary flex items-center justify-between md:px-[70px] px-5">
        <p className="font-bold text-2xl font-poppins">
          <span className="text-primary">ICT</span>{" "}
          <span className="text-primary-foreground">Division</span>
        </p>
        <div>
          <div className="lg:hidden block">
            <Drawer direction="right">
              <DrawerTrigger>
                <IoMenu className="text-2xl" />{" "}
              </DrawerTrigger>
              <DrawerContent className="">
                <DrawerClose className="flex justify-end m-2">
                  <AiOutlineCloseSquare className="text-3xl p-1" />
                </DrawerClose>
                <div className="flex flex-col w-[250px] gap-y-3 font-medium px-4 max-h-screen overflow-y-scroll font-poppins">
                  {menuLinks.map((menu, menuIndex) => (
                    <Accordion
                      key={menuIndex}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem value={`item-${menuIndex}`} className="">
                        <AccordionTrigger className="h-[40px] text-start">
                          {menu.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          {menu.subMenus.map((subMenu, subMenuIndex) => (
                            <div key={subMenuIndex} className="pl-4">
                              {subMenu.title ? (
                                <Accordion type="single" collapsible>
                                  <AccordionItem
                                    value={`subItem-${subMenuIndex}`}
                                  >
                                    <AccordionTrigger className="text-start">
                                      {subMenu.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <ul>
                                        {subMenu.links.map(
                                          (link, linkIndex) => (
                                            <li key={linkIndex}>
                                              <Link
                                                to={link.href}
                                                className="block py-1"
                                              >
                                                {link.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <ul>
                                  {subMenu.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <Link
                                        to={link.href}
                                        className="block py-1"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <ul className="items-center gap-x-3 hidden lg:flex font-poppins">
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
    </>
  );
};

export default Navbar;
