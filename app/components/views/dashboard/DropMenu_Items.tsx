import React from "react";
import Menu, { Item as MenuItem } from "rc-menu";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

interface IDropMenu_ItemsProps {
  items: string[];
}
const DropMenu_Items = (props: IDropMenu_ItemsProps) => {
  return (
    <Menu className="px-4" onSelect={() => {}}>
      {props.items.map((item, i) => (
        <MenuItem
          key={`${item}-${i}`}
          className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer text-xs font-bold"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropMenu_Items;
