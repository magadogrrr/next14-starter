import AppBar from '@mui/material/AppBar';
import { Box, Toolbar } from '@mui/material';
import PageRef from './pagelist/pagelist';

const BasicAppBar = () => {

   const refdata = [  
        {
            title:"Home",
            path:"/home",
            //icon: <CottageIcon/>
            
        },
        {
            title:"About",
            path:"/about",
            //icon: <HubOutlinedIcon/>
        },
        {
            title:"Contact",
            path:"/contact",
            //icon: <AddIcCallIcon/>
            
        },
        {
            title:"Blog",
            path:"/blog",
            //icon: <GarageOutlinedIcon/>
            
        }, 
        {
            title:"Admin",
            path:"/admin",
            //icon: <AdminPanelSettingsOutlinedIcon />
            
        }
    ];

    return (
       <AppBar position='static' >
         <Toolbar>
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             {refdata.map(p => {
               <PageRef pref={p} />
               console.log("page ref data:" && p.title && p.path)
               })
            }
          </Box>
          </Toolbar>
       </AppBar>
    );
}

export default BasicAppBar;