import React from 'react';
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export interface MenuItem {
    value: any;
    label: string;
}

interface DynamicMenuProps {
    items: MenuItem[];
}

const DynamicMenu: React.FC<DynamicMenuProps> = ({ items }) => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                Open
                </Button>
            </MenuTrigger>
            <MenuContent>
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                    {item.label}
                    </MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    );
};

export default DynamicMenu;
