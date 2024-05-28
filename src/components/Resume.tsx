import {Box} from "@mui/material";

export const Resume = () => {
    const resumeURL = "src/public/scalzo resume may 24.docx.pdf";
    return (
        <Box justifyContent={"center"} display={"flex"}>
            <iframe height={"900px"} width={"1150px"} aria-label={"scalzo-resume"}
                    src={resumeURL}/>
        </Box>);
};