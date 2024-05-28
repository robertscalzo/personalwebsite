import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {Photography} from "./Photography.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import React from "react";

function Resume() {
    return null;
}

const Home = ()=> {
    return <Button>RESUME</Button>;
};

interface HeaderOffsetProps{
    children: React.JSX.Element;
}
const HeaderOffset=(props:HeaderOffsetProps)=>{
    return <Box sx={{marginTop:"68px"}}>{props.children}</Box>;
};

export const App = () => {
    const navigator = useNavigate();
    return (
        <>
            <Box>
                <AppBar sx={{backgroundColor: "#d3d3d3", alignItems: "flex-end", height: "60px", marginTop:"-2px"}}>
                    <Toolbar>
                        <Button aria-label={"About"}>ABOUT</Button>
                        <Button aria-label={"Skills"}>SKILLS</Button>
                        <Button aria-label={"Photography"}
                                onClick={() => navigator("/photography")}>Photography</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Routes>
                <Route path={"/"} element={<HeaderOffset><Home/></HeaderOffset>}/>
                <Route path={"/photography"} element={<HeaderOffset><Photography text={"Hello"}/></HeaderOffset>}/>
                <Route path={"/resume"} element={<HeaderOffset><Resume/></HeaderOffset>}/>
            </Routes>
        </>
    );
};

