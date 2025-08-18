"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  Logo,
  FacebookIcon,
  InstagramIcon,
  LineIcon,
  LazadaIcon,
  ShopeeIcon,
  TiktokIcon,
} from "@/components/icons";
import { useLanguageStore } from "@/app/utils/store";
import { translations } from "@/config/site";
import { LanguageSwitch } from "./ui/LanguageSwitch";
import { Image } from "@heroui/react";

export const Navbar = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="text-[#CDBE9E]">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Image src="/logo.png" alt="Logo" height={36} /> */}
            <p className="font-bold text-inherit">{t.nav.brand}</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-[#CDBE9E] data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Facebook"
            href={siteConfig.links.facebook}
          >
            <FacebookIcon
              className="text-default-500"
              size={24}
              fill="#CDBE9E"
            />
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon
              className="text-default-500"
              size={24}
              fill="#CDBE9E"
            />
          </Link>
          <Link isExternal aria-label="Tiktok" href={siteConfig.links.tiktok}>
            <TiktokIcon className="text-default-500" size={24} fill="#CDBE9E" />
          </Link>
          <Link isExternal aria-label="Line" href={siteConfig.links.line}>
            <LineIcon className="text-default-500" size={24} fill="#CDBE9E" />
          </Link>
          <Link isExternal aria-label="Shopee" href={siteConfig.links.shopee}>
            <ShopeeIcon className="text-default-500" size={24} fill="#CDBE9E" />
          </Link>
          <Link isExternal aria-label="Lazada" href={siteConfig.links.lazada}>
            <LazadaIcon className="text-default-500" size={24} fill="#CDBE9E" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <LanguageSwitch />
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
