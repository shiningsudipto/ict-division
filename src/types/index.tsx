interface Link {
  href: string;
  label: string;
}

interface SubMenu {
  title?: string;
  links: Link[];
}

export interface CustomMenuProps {
  options: SubMenu[];
  label: string;
}
