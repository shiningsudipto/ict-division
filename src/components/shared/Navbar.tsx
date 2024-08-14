import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const aboutUs = [
  {
    title: "Division",
    links: [
      {
        href: "/",
        label: "History",
      },
      {
        href: "/",
        label: "Vision",
      },
    ],
  },
  {
    title: "Manpower",
    links: [
      {
        href: "/",
        label: "History",
      },
      {
        href: "/",
        label: "Vision",
      },
    ],
  },
];

export default function Navbar({ options }) {
  return (
    <div className="">
      <Menu __demoMode>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
        </MenuButton>
        <MenuItems className="flex">
          {aboutUs?.map((items, index) => {
            return (
              <div key={index}>
                <p>{items?.title}</p>
                {items?.links?.map((links, index) => {
                  return (
                    <MenuItem key={index}>
                      <button className="group flex w-full items-center gap-2 rounded-lg data-[focus]:bg-white/10">
                        {links.label}
                      </button>
                    </MenuItem>
                  );
                })}
              </div>
            );
          })}
        </MenuItems>
      </Menu>
    </div>
  );
}
