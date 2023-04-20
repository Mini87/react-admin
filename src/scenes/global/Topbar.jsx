import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import  InputBase  from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    //downside we tend to have very long components when we are able to write 
    //inline css directly on the div(box component allows that); e.g. IconButton doesn't allow that 
    //typical way would be writting sx = {display:flex}

    return (
    <Box display="flex" justifyContent = "space-between" p={2}>
        {/* Search bar */}
        <Box 
            display="flex"
            backgroundColor = {colors.primary[400]} 
            borderRadius="3px">            
        </Box>
        <InputBase sx = {{ ml: 2, flex: 1}} placeholder =  "Search" />
        <IconButton type = "button" sx= {{ p: 1 }}>
            <SearchIcon />
        </IconButton> 

        {/* ICONS */}
        <Box display="flex">
            <IconButton onClick = {colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' 
                    ? (<DarkModeOutlinedIcon />)    
                    : (<LightModeOutlinedIcon />)
            }
         
            </IconButton>
            <IconButton>    
                <NotificationsOutlinedIcon/>            
            </IconButton>
            <IconButton> 
                <SettingsOutlinedIcon />               
            </IconButton>
            <IconButton>  
                <PersonOutlinedIcon />              
            </IconButton>
        </Box>

    </Box>)
}

export default Topbar;