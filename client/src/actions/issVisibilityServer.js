import axios from "axios";

export const getIssVisibility = () => (
  axios.get("http://localhost:5000/api/iss-visibility")
);
