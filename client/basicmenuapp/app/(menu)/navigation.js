'use client'
import React,{ useState } from "react";
import {NavbarMenu, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
export default function Navigation () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
      'APPETIZERS',
      'PASTAS',
      'PIZZA',
    ]
return <Navbar onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">PASTABILITIES</p>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link href="/pizza">
          PIZZAS
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href='/appetizers'>APPETIZERS</Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/pastas">
          PASTAS
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
      </NavbarItem>
    </NavbarContent>
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href={`/${item.toLowerCase()}`}
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  }
