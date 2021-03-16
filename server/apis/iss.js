import axios from "axios";

export const getIssPosition = () => (
  axios.get("http://api.open-notify.org/iss-now.json")
)
