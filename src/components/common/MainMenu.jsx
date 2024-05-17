import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import { NavLink } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
// import Data from './MenuItems.json'

// const MenuItems = Data

const MenuItems = [
    {
        title: "Home",
        path: "/",
        icon: HomeTwoToneIcon,
    },
    {
        title: "Data",
        path: "/data",
        icon: ListAltTwoToneIcon,
    },
    {
        title: "Tell",
        path: "/tell",
        icon: SmartphoneIcon,
    },
]

const MainMenu = () => {
    // console.log(jsonData)
  return (
            <List>
          {MenuItems.map((item, index) => (
            <NavLink to={item.path} key={index}>
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                    {<item.icon />}
                    </ListItemIcon>
                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            </NavLink>
          ))}
        </List>
  )
}

export default MainMenu