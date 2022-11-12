// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import "./Toggle.css";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,

//     display: "flex",
//     justifyContent: "right",

//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),

//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-start",
// }));

// export default function PersistentDrawerRight() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         className="appBar"
//         position="fixed"
//         open={open}
//         sx={{
//           bgcolor: "#900C3F",

//           overlay: "0.4",
//         }}
//         style={{
//           position: "relative",
//           width: "0px",
//           color: "aliceblue",
//           backgroundColor: "transparent",
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             sx={{ flexGrow: 1 }}
//             component="div"
//           ></Typography>

//           <IconButton
//             style={{ position: "absolute" }}
//             className="toggle"
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: "none" }) }}
//           >
//             <HiBars3BottomRight
//               style={{
//                 display: "flex",
//                 justifyContent: "right",
//                 float: "right",
//                 alignItems: "center",
//                 marginLeft: "60px",
//                 fontSize: "40px",
//                 textAlign: "center",
//               }}
//             />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph></Typography>
//         <Typography paragraph></Typography>
//       </Main>
//       <Drawer
//         sx={{
//           width: "100%",

//           // width: drawerWidth,
//           // flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: "100%",
//             background: " #900C3F",
//             // width: drawerWidth,
//           },
//         }}
//         // variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <FaTimes style={{ fontSize: "50px" }} />
//             ) : (
//               <FaTimes style={{ fontSize: "50px" }} />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         {/* <Divider /> */}
//         <List>we move</List>
//         {/* <Divider /> */}
//         <List> hfjf</List>
//       </Drawer>
//     </Box>
//   );
// }

// // import { useRef } from "react";
// // import { Image } from "react-bootstrap";
// // import { FaBars, FaTimes } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // // import "./Navbar.css";

// // function Navbar2() {
// //   const navRef = useRef();

// //   const showNavbar = () => {
// //     navRef.current.classList.toggle("responsive_nav");
// //   };

// //   return (
// //     <header>
// //       <div style={{ display: "flex", gap: "10px" }}></div>

// //       <nav type="button" ref={navRef} onClick={showNavbar}>
// //         <button className="nav-btn nav-close-btn">
// //           <FaTimes />
// //         </button>
// //         {/* <a href="/#">Home</a>
// //         <a href="/#">My work</a>
// //         <a href="/#">Blog</a>
// //         <a href="/#">About me</a>
// //         <a href="/#" className="div-pst-tat">
// //           Request a demo
// //         </a> */}
// //       </nav>
// //       <button className="nav-btn" onClick={showNavbar}>
// //         <FaBars />
// //       </button>
// //     </header>
// //   );
// // }

// // export default Navbar2;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiOilySpiral } from "react-icons/gi";
import "./Toggle.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="app-bar-div"
        // style={{
        //   display: "flex",
        //   justifyContent: "space-around",

        //   overflow: "0.1",
        // }}
        sx={{
          bgcolor: "transparent",
          // bgcolor: "#900C3F",
          overflow: "0.1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            alignItem: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            THE BRYANSTON
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            <GiOilySpiral />
          </div>
          {/* <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          ></Typography> */}

          <div
            style={{ cursor: "pointer" }}
            // aria-label="open drawer"
            // edge="end"
            onClick={handleDrawerOpen}
            // sx={{ ...(open && { display: "none" }) }}
          >
            <HiBars3BottomRight
              style={{
                fontSize: "40px",
                color: "white",
              }}
            />
          </div>
        </div>
      </AppBar>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </Main> */}
      <Drawer
        sx={{
          width: "100%",

          // width: drawerWidth,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            bgcolor: "#900C3F",
            // background: " #900C3F",
            // width: drawerWidth,
          },
        }}
        // variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <FaTimes style={{ fontSize: "50px", color: "whitesmoke" }} />
            ) : (
              <FaTimes style={{ fontSize: "50px", color: "whitesmoke" }} />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <div className="lister">
          <hr />
          <div>THE BRYANSTON</div>
          <hr />
          <div>AMENITIES</div>
          <hr />
          <div>NEIGHBOUR</div>
          <hr />
          <div>THE TEAM</div>
          <hr />
          <div>MY RESIDENCE</div>
          <hr />
        </div>

        <div className="next-div">sales@thebryanston.co.uk</div>
        <div className="next-div">+44(0)20 7535 3949</div>

        <div className="next-display-div">
          <div>Cookie Policy</div>
          <div>Disclaimer</div>
          <div>Privacy Policy</div>
        </div>
        {/* <Divider /> */}
        <List></List>
      </Drawer>
    </Box>
  );
}
