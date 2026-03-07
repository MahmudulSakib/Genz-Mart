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
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Announcement from "@/helpers/Announcements";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      megaMenu: [
        {
          title: "Gaming",
          items: [
            { label: "Headsets", href: "/shop/headsets" },
            { label: "Keyboards", href: "/shop/keyboards" },
            { label: "Mouse", href: "/shop/mouse" },
          ],
        },
        {
          title: "Streaming",
          items: [
            { label: "Microphones", href: "/shop/microphones" },
            { label: "Cameras", href: "/shop/cameras" },
          ],
        },
        {
          title: "Displays",
          items: [
            { label: "Monitors", href: "/shop/monitors" },
            { label: "Accessories", href: "/shop/accessories" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
        {
          title: "Special",
          items: [
            { label: "Sale", href: "/shop/sale" },
            { label: "Products", href: "/shop" },
          ],
        },
      ],
    },
    {
      label: "Pages",
      children: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
  ];

  return (
    <>
      <Announcement />

      <Box position="relative">
        {/* Main Navbar */}
        <AppBar
          position="relative"
          sx={{
            background: "#050301",
            pb: { xs: 2 },
            pt: { xs: 3, md: 1 },
            zIndex: 2,
          }}
        >
          <Container maxWidth="xl" disableGutters>
            <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
              {/* Mobile Menu Button */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Logo */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  flexGrow: { xs: 1, md: 0 },
                  textAlign: { xs: "center", lg: "left" },
                  fontSize: { xs: 30, lg: 40 },
                }}
              >
                Genz-Mart
              </Typography>

              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              >
                {menuItems.map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      position: "relative",
                      flexShrink: 0,
                      "&:hover .megaMenu, &:hover .pagesDropdown": {
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        color: "white",
                        whiteSpace: "nowrap",
                        px: { md: 1.2, lg: 2.5 },
                        fontSize: { md: "0.8rem", lg: "1rem" },
                        minWidth: "auto",
                      }}
                    >
                      {item.label}
                    </Button>

                    {/* Mega Menu */}
                    {item.megaMenu && (
                      <Box
                        className="megaMenu"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: "0",
                          transform: "translatex(10px)",
                          // width: "min(1100px, 95vw)",
                          width: { md: 620, xl: 800 },
                          maxWidth: "100vw",
                          background: "white",
                          color: "black",
                          p: 4,
                          borderRadius: 1,
                          boxShadow: 10,
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: 4,
                          opacity: 0,
                          visibility: "hidden",
                          transition: "all 0.25s ease",
                          zIndex: 20,
                        }}
                      >
                        {item.megaMenu.map((column) => (
                          <Box key={column.title}>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                mb: 1.5,
                                color: "#111",
                              }}
                            >
                              {column.title}
                            </Typography>
                            {column.items.map((link) => (
                              <Typography
                                key={link.label}
                                sx={{
                                  cursor: "pointer",
                                  fontSize: "0.90rem",
                                  "&:hover": { color: "#1976d2" },
                                }}
                              >
                                {link.label}
                              </Typography>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* Simple Dropdown */}
                    {item.children && (
                      <Box
                        className="pagesDropdown"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          minWidth: 220,
                          background: "white",
                          color: "black",
                          borderRadius: 1,
                          boxShadow: 10,

                          opacity: 0,
                          visibility: "hidden",
                          transform: "translatex(10px)",
                          transition: "all 0.2s ease",
                          zIndex: 20,
                        }}
                      >
                        {item.children.map((child) => (
                          <Typography
                            key={child.label}
                            sx={{
                              display: "block",
                              px: 3,
                              py: 1.2,
                              fontSize: "0.90rem",
                              cursor: "pointer",
                              "&:hover": {
                                background: "#f5f5f5",
                                color: "#1976d2",
                              },
                            }}
                          >
                            {child.label}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "white",
                    borderRadius: 2,
                    px: 2,
                    width: { md: 265, lg: 380 },
                  }}
                >
                  <InputBase placeholder="Search..." sx={{ flex: 1 }} />
                  <SearchIcon />
                </Box>
              </Box>

              {/* Icons */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton sx={{ color: "white" }}>
                  <PersonOutlineIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "white", display: { xs: "none", md: "flex" } }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </Toolbar>

            {/* Mobile Search */}
            <Container
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                pb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                  borderRadius: 1,
                  px: 2,
                  width: "85%",
                  maxWidth: 420,
                }}
              >
                <InputBase placeholder="Search..." sx={{ flex: 1 }} />
                <SearchIcon />
              </Box>
            </Container>
          </Container>
        </AppBar>

        {/* Category Strip*/}
        <Box sx={{ py: 1, bgcolor: "#111", overflowX: "auto" }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
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
              ].map((cat) => (
                <Typography
                  key={cat}
                  sx={{
                    color: "white",
                    fontSize: { xs: 13, md: 14 },
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </Typography>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#1a1a1a",
              color: "white",
              overflow: "auto", // I can hide scrollbar
              width: "350px",
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List component="nav" disablePadding>
            {menuItems.map((item) => {
              const hasSubmenu = !!(
                item.children?.length || item.megaMenu?.length
              );

              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={() => {
                      if (hasSubmenu) {
                        toggleSubmenu(item.label);
                      } else {
                        toggleDrawer(false)();
                        // navigation logic later
                      }
                    }}
                    sx={{ borderRadius: 1, mb: 0.5 }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: hasSubmenu ? 600 : 400,
                      }}
                    />
                    {hasSubmenu &&
                      (openSubmenus[item.label] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </ListItemButton>

                  {hasSubmenu && (
                    <Collapse
                      in={openSubmenus[item.label]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding sx={{ pl: 3 }}>
                        {/* Pages children */}
                        {item.children?.map((child) => (
                          <ListItemButton
                            key={child.label}
                            sx={{ py: 0.8 }}
                            onClick={toggleDrawer(false)}
                          >
                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{ fontSize: "0.9rem" }}
                            />
                          </ListItemButton>
                        ))}

                        {/* Shop mega menu columns */}
                        {item.megaMenu?.map((column) => (
                          <Box key={column.title} sx={{ mt: 1.5 }}>
                            <Typography
                              sx={{
                                px: 2,
                                py: 0.5,
                                fontWeight: "bold",
                                fontSize: "0.85rem",
                                color: "#aaa",
                              }}
                            >
                              {column.title}
                            </Typography>
                            {column.items.map((sub) => (
                              <ListItemButton
                                key={sub.label}
                                sx={{ py: 0.6, pl: 4 }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={sub.label}
                                  primaryTypographyProps={{
                                    fontSize: "0.88rem",
                                  }}
                                />
                              </ListItemButton>
                            ))}
                          </Box>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
