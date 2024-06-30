"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Pricing",
        href: "/pricing",
        description:
            "View detailed pricing plans and choose the best option for your needs.",
    },
    {
        title: "Help",
        href: "/help",
        description:
            "Get assistance and find answers to common questions about using Zapfolio.",
    },
    {
        title: "Examples",
        href: "/examples",
        description:
            "See live examples of portfolios, resumes, and landing pages created with Zapfolio.",
    },
    {
        title: "Feedback",
        href: "/feedback",
        description: "Share your thoughts and suggestions to help us improve Zapfolio.",
    },
    {
        title: "Terms Of Service",
        href: "/terms-of-service",
        description:
            "Read our terms and conditions to understand your rights and responsibilities.",
    },
    {
        title: "Discount And Offers",
        href: "/offers",
        description:
            "Discover current discounts and special offers available for Zapfolio users.",
    }
]


export const NavigationMenuComponent = () => {
    return (
        <NavigationMenu className="z-50 ">
            <NavigationMenuList >
                <NavigationMenuItem>
                    <NavigationMenuTrigger style={{ color: "#868686", fontWeight: "600", fontSize: "0.875rem", lineHeight: "1.25rem" }} >Platform</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md  border   bg-slate-50"
                                        href="/"
                                    >
                                        <img src="/logo3.png" className="h-10 w-10 rounded-xl" />
                                        <div className="mb-2 mt-4 text-lg font-semibold">
                                            zapfolio
                                        </div>
                                        <p className="text-xs leading-tight text-muted-foreground ">
                                            A no-code tool that transforms any LinkedIn page into a clean portfolio website, resume, and landing page for your business site in seconds.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/themes?q=portfolio" title="Portfolio">
                                Turn your LinkedIn into a sleek, no-code portfolio instantly.
                            </ListItem>
                            <ListItem href="/themes?q=resume" title="Resume">
                                Create a polished resume from your LinkedIn profile instantly.
                            </ListItem>
                            <ListItem href="/themes?q=bussiness-page" title="Bussiness Page">
                                Build a professional landing page using LinkedIn data.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger style={{ color: "#868686", fontWeight: "600", fontSize: "0.875rem", lineHeight: "1.25rem" }}>Get Started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    className="hover:border hover:bg-white group "
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink style={{ color: "#868686", fontWeight: "600", fontSize: "0.875rem", lineHeight: "1.25rem" }} className={navigationMenuTriggerStyle()}>
                            Dashboard
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>



            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm  leading-none font-semibold group-hover:underline">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
