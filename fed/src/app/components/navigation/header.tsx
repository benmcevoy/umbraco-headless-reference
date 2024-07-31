
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { GetBreadCrumb, GetPrimaryMenu } from "@/lib/navigationService"
import { GetUmbracoContext } from "@/lib/umbracoContext"
import { SearchIcon, Logo } from "@components/atomic/icons";
import { Breadcrumb } from "@components/navigation"

export const Header = async () => {
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    );

    const context = GetUmbracoContext();
    const menu = await GetPrimaryMenu();
    const breadcrumb = await GetBreadCrumb(context.path);

    return (
        <>
            <NextUINavbar maxWidth="xl" position="sticky">
                <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <Link className="flex justify-start items-center gap-1" href="/">
                            <Logo />
                            <p className="font-bold text-inherit">ACME</p>
                        </Link>
                    </NavbarBrand>
                    <ul className="hidden lg:flex gap-4 justify-start ml-2">
                        {menu.map((item) => (
                            <NavbarItem key={item.href}>
                                <Link
                                    className={clsx(
                                        linkStyles({ color: "foreground" }),
                                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                                    )}
                                    color="foreground"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </NavbarItem>
                        ))}
                    </ul>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                    <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                </NavbarContent>

                <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                    <NavbarMenuToggle />
                    <NavbarMenu>
                        <div className="pt-6">
                            {searchInput}
                        </div>
                        <div className="mx-4 mt-2 flex flex-col gap-2">
                            {menu.map((item, index) => (
                                <NavbarMenuItem key={`${item}-${index}`}>
                                    <Link
                                        color={"primary"}
                                        href={item.href}
                                        size="lg">
                                        {item.label}
                                    </Link>
                                </NavbarMenuItem>
                            ))}
                        </div>
                    </NavbarMenu>
                </NavbarContent>
            </NextUINavbar>

            <div className="mx-auto max-w-7xl px-6" >
                <Breadcrumb menu={breadcrumb} currentPageTitle={context.umbracoData?.properties?.title} />
            </div>
        </>
    );
};
