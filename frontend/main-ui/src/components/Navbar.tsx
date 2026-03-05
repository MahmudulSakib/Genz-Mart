"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const announcements = [
  "ENJOY FAST & FREE SHIPPING STOREWIDE!",
  "20% OFF ON ALL GAMING ACCESSORIES",
  "LIMITED TIME DEALS AVAILABLE NOW",
  "BUY 2 HEADSETS GET 1 FREE",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "Shop", "Pages", "Blogs"];

  return (
    <>
      {/* Top Announcement */}
      <Box
        sx={{
          background: "#e53935",
          color: "white",
          textAlign: "center",
          py: 1,
          fontSize: { xs: "12px", md: "14px" },
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Slide
          direction="left"
          in={true}
          key={announcementIndex}
          mountOnEnter
          unmountOnExit
          timeout={500}
          easing={{ enter: "ease-out", exit: "ease-in" }}
        >
          <Box>{announcements[announcementIndex]}</Box>
        </Slide>
      </Box>

      <Box position="relative">
        {/* Main Navbar */}
        <AppBar
          position="relative"
          sx={{
            background: "#1a1a1a",
            clipPath:
              "polygon(0 0, 100% 0, 100% 60%, 88% 60%, 87% 80%, 12% 80%, 11% 60%, 0 60%)",
            pb: { xs: 3, md: 7 },
            pt: { xs: 3, md: 1 },
            zIndex: 2,
          }}
        >
          <Container maxWidth="xl" disableGutters>
            <Toolbar
              sx={{
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Mobile Menu */}
              {isMobile && (
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}

              {/* Logo */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  flexGrow: { xs: 1, md: 0 },
                  textAlign: { xs: "center", lg: "left" },
                  ml: { xxl: -23 },
                  fontSize: { xs: 30, lg: 40 },
                }}
              >
                Genz-Mart
              </Typography>

              {/* Desktop Menu + Search */}
              {!isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    mt: 1,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {menuItems.map((item) => (
                      <Button key={item} sx={{ color: "white" }}>
                        {item}
                      </Button>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      borderRadius: 1,
                      px: 2,
                      width: { md: 180, lg: 340 },
                    }}
                  >
                    <InputBase placeholder="Search..." sx={{ flex: 1 }} />
                    <SearchIcon />
                  </Box>
                </Box>
              )}

              {/* Icons */}
              <Box sx={{ display: "flex", mr: { xxl: -23 } }}>
                <IconButton sx={{ color: "white" }}>
                  <PersonOutlineIcon />
                </IconButton>

                {!isMobile && (
                  <IconButton sx={{ color: "white" }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                )}

                <IconButton sx={{ color: "white" }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </Toolbar>

            {/* Mobile Search */}
            {isMobile && (
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    borderRadius: 1,
                    px: 2,
                    width: "50%",
                    maxWidth: 400,
                    mb: 3,
                  }}
                >
                  <InputBase placeholder="Search..." sx={{ flex: 1 }} />
                  <SearchIcon />
                </Box>
              </Container>
            )}
          </Container>
        </AppBar>

        {/* Category Menu */}
        <Box
          sx={{
            py: 1,
            overflowX: "auto",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 4 },
                justifyContent: { md: "center" },
                whiteSpace: "nowrap",
              }}
            >
              {[
                "HEADSETS",
                "KEYBOARDS",
                "MOUSE",
                "GAMING CONTROLLERS",
                "MONITORS",
                "MICROPHONES",
                "POWER",
                "ACCESSORIES",
                "SALE",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#1a1a1a",
              color: "white",
            },
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem component={"button"} key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
