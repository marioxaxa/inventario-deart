"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, Paper, Stack } from "@mui/material";
import Image from "next/image";

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
    const router = useRouter();

    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
                if (props.href) {
                    router.push(props.href);
                }
            }}
            aria-current={props.selected && "page"}
            {...props}
        />
    );
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    const getTabValue = () => {
        console.log(path);

        if (path.includes("/editar")) {
            return 0;
        } else if (path.includes("/busca")) {
            return 1;
        } else if (path.includes("/historico")) {
            return 2;
        }
    };

    const [value, setValue] = React.useState(getTabValue());

    React.useEffect(() => {
        setValue(getTabValue());
    }, [path]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (
            event.type !== "click" ||
            (event.type === "click" &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ))
        ) {
            setValue(newValue);
        }
    };

    return (
        <>
            <Paper elevation={2} sx={{ width: "100%" }}>
                <Stack direction={"column"} paddingX={8} paddingTop={4}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Box sx={{ height: "100%", width: "10%" }}>
                            <Image
                                src={"/deart.png"}
                                alt="Deart-Logo"
                                width={0}
                                height={0}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </Box>
                        <Avatar />
                    </Stack>
                    <Tabs value={value} onChange={handleChange}>
                        <LinkTab label="Busca" href="/busca" />
                        <LinkTab label="Editar" href="/editar" />
                        <LinkTab label="Historico" href="/historico" />
                    </Tabs>
                </Stack>
            </Paper>
            {children}
        </>
    );
}
