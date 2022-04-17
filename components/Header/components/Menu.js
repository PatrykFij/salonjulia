import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Strona główna", "Usługu", "Sklep", "Kontakt"];

export default function MenuWithDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const generateMenu = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
      >
        LOGO
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "end",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => console.log("handleCloseNavMenu")}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => setIsDrawerOpen(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        DUPA
      </Typography>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {generateMenu()}
      </Drawer>
    </>
  );
}
