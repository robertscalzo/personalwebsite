import {Box, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";
import {Engineering} from "./Engineering.tsx";
import {Photography} from "./Photography.tsx";

export const App = () => {

    interface TabPanelProps {
        children?: React.JSX.Element
        index: number;
        value: number;
    }

    const CustomTabPanel = (props: TabPanelProps) => {
        const {children, value, index} = props;

        return (
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`tab-${index}`}
                aria-labelledby={`tab-${index}`}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </Box>
        );
    };

    const [selectedTab, setSelectedTab] = useState<number>(0);
    return (
        <>
            <Box>
                <Tabs value={selectedTab} onChange={(_event, newValue: number) => setSelectedTab(newValue)}>
                    <Tab id="0" value={0} label="Engineering"/>
                    <Tab id="1" value={1} label="Photography"/>
                </Tabs>
            </Box>
            <CustomTabPanel value={selectedTab} index={0}><Engineering text={"Goodbye"}/></CustomTabPanel>
            <CustomTabPanel value={selectedTab} index={1}><Photography text={"Hello"}/></CustomTabPanel>
        </>
    );
};

