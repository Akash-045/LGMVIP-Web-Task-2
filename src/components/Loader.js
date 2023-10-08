import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Loader = () => {
  return (
    <div className="text-center mt-4">
      <CircularProgress size={80} thickness={2} />
      <Typography variant="subtitle1" color="textSecondary" mt={2}>
        Loading, please wait...
      </Typography>
    </div>
  );
};

export default Loader;
