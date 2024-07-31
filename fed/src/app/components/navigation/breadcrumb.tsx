"use client"

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { NavigationItem } from "@/lib/navigationService"

export function Breadcrumb({ menu, currentPageTitle }: { menu: NavigationItem[], currentPageTitle: string }) {
    return (
        <Breadcrumbs>
            {menu.map((item, index) => (
                <BreadcrumbItem key={`${item}-${index}`} href={item.href}>{item.label}</BreadcrumbItem>
            ))}
            <BreadcrumbItem isCurrent={true}>{currentPageTitle}</BreadcrumbItem>
        </Breadcrumbs>
    );
}
