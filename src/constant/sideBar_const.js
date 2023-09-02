import HomeIcon from '@mui/icons-material/Home';
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const categories = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Shorts", icon: <LibraryAddCheckOutlinedIcon /> },
  { name: "Subscriptions", icon: <SubscriptionsOutlinedIcon /> },
  { name: "Library", icon: <VideoLibraryOutlinedIcon /> },
  { name: "History", icon: <HistoryOutlinedIcon /> },
  { name: "Your videos", icon: <SmartDisplayOutlinedIcon /> },
  { name: "Watch Later", icon: <PlayCircleFilledWhiteOutlinedIcon /> },
  { name: "Liked videos", icon: <ThumbUpOutlinedIcon /> },
  { name: "Show more", icon: <KeyboardArrowDownOutlinedIcon /> },
];
