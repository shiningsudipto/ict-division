import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomMenuProps } from "@/types";
import { Link } from "react-router-dom";

const CustomMenu: React.FC<CustomMenuProps> = ({ options, label }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-poppins">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2">
            {options.map((menu, menuIndex) => (
              <Accordion
                key={menuIndex}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem
                  value={`item-${menuIndex}`}
                  className="w-[180px] border-0"
                >
                  <AccordionTrigger className="h-[40px] max-h-[50px] p-1 rounded-md text-start hover:bg-primary-foreground hover:text-white">
                    {menu.title || label}
                  </AccordionTrigger>
                  <AccordionContent>
                    {menu.links.map((subMenu, subMenuIndex) => (
                      <div key={subMenuIndex} className="pl-4">
                        <ul>
                          <li>
                            <Link
                              to={subMenu.href}
                              className="block py-1 hover:text-primary"
                            >
                              {subMenu.label}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
