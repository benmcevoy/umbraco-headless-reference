"use client"

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { NavigationItem } from "@/lib/navigationService"
import { Home } from "../atomic";

export function Breadcrumb({ menu, currentPageTitle }: { menu: NavigationItem[], currentPageTitle: string }) {
    return (
        <Breadcrumbs>
            <BreadcrumbItem key={-1} href='/' >{<Home />}</BreadcrumbItem>
            {menu.map((item, index) => (
                <BreadcrumbItem key={`${item}-${index}`} href={item.href}>{item.label}</BreadcrumbItem>
            ))}
            <BreadcrumbItem isCurrent={true}>{currentPageTitle}</BreadcrumbItem>
        </Breadcrumbs>
    );
}
