import "./about.css";
import {Paper, Box} from '@mui/material';


function About() {

    return (
        <>
            <div className="page about" id="about">
                <Box className="content_container">
                    <Paper className="about_section"elevation={3} />
                    <Paper className="photo_section"elevation={3} />
                    <Paper className="skill_section"elevation={3} />
                </Box>
            </div>
        </>
    );
}

export default About;
