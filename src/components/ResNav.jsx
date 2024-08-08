import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";

// const RESNAV =   [
//   {
//      Items : "Home",
//     Scroll :   }, 
//   {"Services"},
//    {"Why Web Katha"},
//     {"Portfolio"} , 
//     {"Blogs"} , 
//     {"Contact us"}
// ]


export default function TemporaryDrawer() {

  const navigate = useNavigate();

  function scrollToWhatweoffer() {
    const infoSection = document.getElementById("Whatweoffer");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollTowhyus() {
    const ServiceSection = document.getElementById("Whyus");
    if (ServiceSection) {
      ServiceSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToPortfolio() {
    const PortfolioSection = document.getElementById("Portfolio");
    if (PortfolioSection) {
      PortfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  // function scrollToserving() {
  //   const TestimonialSection = document.getElementById("ourservingind");
  //   if (TestimonialSection) {
  //     TestimonialSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  function scrollTocontact() {
    const TestimonialSection = document.getElementById("contact");
    if (TestimonialSection) {
      TestimonialSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Services", "Why Web Katha", "Portfolio" , "Blogs" , "Contact us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text}  style={{color:"#FF6100"}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} style={{color: "#FF6100" , width:"50px"}}>
              <MenuRoundedIcon />
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
