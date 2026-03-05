"use client";

import { useState } from "react";
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
  useTheme,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        }}
      >
        ENJOY FAST & FREE SHIPPING STOREWIDE!
      </Box>

      <Box position="relative">
        {/* Main Navbar */}
        <AppBar
          position="relative"
          sx={{
            background: "#1a1a1a",
            clipPath:
              "polygon(0 0, 100% 0, 100% 60%, 90% 60%, 88% 90%, 16% 90%, 14% 60%, 0 60%)",
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
                  textAlign: { xs: "center", md: "left" },
                  ml: { xl: -23 },
                  fontSize: 40,
                }}
              >
                Genz-Mart
              </Typography>

              {/* Desktop Menu */}
              {!isMobile && (
                <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
                  {menuItems.map((item) => (
                    <Button key={item} sx={{ color: "white" }}>
                      {item}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Search */}
              {!isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    borderRadius: 2,
                    px: 2,
                    width: { md: 200, lg: 300 },
                  }}
                >
                  <InputBase placeholder="Search..." sx={{ flex: 1 }} />
                  <SearchIcon />
                </Box>
              )}

              {/* Icons */}
              <Box sx={{ display: "flex", mr: { xl: -23 } }}>
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
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
