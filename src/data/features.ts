import Feature from "../types/feature";
import userLogs from "../assets/userLogs.png";
import newsLetter from "../assets/NewsLetter.jpg";
import helpDesk from "../assets/helpdesk.png";
import amenities from "../assets/amenities.jpg";

const featureItems: Feature[] = [
  {
    title: "Logs",
    content: "Access logs and reports for your community.",
    image: userLogs, // Assuming userLogs is a valid string URL
  },
  {
    title: "Amenities",
    content: "Explore the various amenities available in your community.",
    image: amenities, // Or provide null if no image is available
  },
  {
    title: "HelpDesk",
    content:
      "Efficient ticket management and resolution for streamlined customer support.",
    image: helpDesk,
  },
];

export default featureItems;
