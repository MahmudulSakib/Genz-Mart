import { Box } from "@mui/material";

const ANNOUNCEMENTS = [
  "ENJOY FAST & FREE SHIPPING STOREWIDE!",
  "20% OFF ON ALL GAMING ACCESSORIES",
  "LIMITED TIME DEALS AVAILABLE NOW",
  "BUY 2 HEADSETS GET 1 FREE",
];

function Announcement() {
  const duration = 4;
  const total = ANNOUNCEMENTS.length * duration;

  return (
    <Box
      sx={{
        bgcolor: "#e53935",
        color: "white",
        textAlign: "center",
        py: 2,
        fontSize: "14px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {ANNOUNCEMENTS.map((text, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "100%",
            top: 5,
            left: 0,
            opacity: 0,
            animation: `fade ${total}s linear infinite`,
            animationDelay: `${i * duration}s`,
            "@keyframes fade": {
              "0%": { opacity: 0 },
              "5%": { opacity: 1 },
              "20%": { opacity: 1 },
              "25%": { opacity: 0 },
              "100%": { opacity: 0 },
            },
          }}
        >
          {text}
        </Box>
      ))}
    </Box>
  );
}

export default Announcement;
