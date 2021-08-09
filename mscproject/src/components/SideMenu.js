import React from 'react'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
];

const menu = true;

function SideMenu() {
    return (
        <div>
            <Menu model={items}/>
        </div>
    )
}

export default SideMenu
