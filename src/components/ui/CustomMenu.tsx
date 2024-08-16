import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CustomMenuProps } from "@/types";

const CustomMenu: React.FC<CustomMenuProps> = ({ options, label }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={`flex justify-between gap-x-3 p-2`}>
              {options?.map((section) => (
                <li key={section.title} className="w-[150px]">
                  {section?.title && (
                    <h3 className="text-sm font-semibold text-primary-foreground">
                      {section.title}
                    </h3>
                  )}
                  <ul className="mt-1 space-y-1">
                    {section?.links?.map((link) => (
                      <li key={link.label}>
                        <NavigationMenuLink
                          href={link.href}
                          className="block py-1 text-sm text-secondary hover:text-primary"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
