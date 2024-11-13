import React from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface DynamicMenuProps {
  dir: string;
  items: string[];
  setVal: (value: any) => void;
  setIm: any;
}

const renderImage = (directory: string, year: string, setIm: any) => {
  if (!year) {
    console.log("No year selected");
    return null;
  }
  const path = `/oasis_data/${directory}/${year}.png`;
  setIm( <Image src={path} alt={year} height={500} width={500} />);
};

const DynamicMenu: React.FC<DynamicMenuProps> = ({ dir, items, setVal, setIm }) => {
  return (
    <div style={{ width: "24px" }}>
      <MenuRoot size="md">
        <MenuTrigger asChild>
          <Button variant="outline" size="md" onClick={() => {setIm(<></>)}}>
            Select Year
          </Button>
        </MenuTrigger>
        <MenuContent>
          {items.map((item) => (
            <MenuItem
              key={item}
              value={item}
              onClick={() => {
                setVal(item);
                renderImage(dir, item, setIm);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default DynamicMenu;
