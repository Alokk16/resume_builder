import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

const ResumePreview = ({ data }) => {
  if (!data) return null;

  return (
    <Card>
      <CardContent>
        {/* Name and Contact */}
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant="body1">{data.email} | {data.phone}</Typography>
        <Divider sx={{ margin: "10px 0" }} />
        
        {/* Summary */}
        <Typography variant="h6">Summary</Typography>
        <Typography variant="body2">{data.summary}</Typography>
        <Divider sx={{ margin: "10px 0" }} />

        {/* Education */}
        <Typography variant="h6">Education</Typography>
        <Typography variant="body2">{data.education}</Typography>
        <Divider sx={{ margin: "10px 0" }} />

        {/* Experience */}
        <Typography variant="h6">Experience</Typography>
        <Typography variant="body2">{data.experience}</Typography>
        <Divider sx={{ margin: "10px 0" }} />

        {/* Skills */}
        <Typography variant="h6">Skills</Typography>
        <Typography variant="body2">{data.skills}</Typography>
        <Divider sx={{ margin: "10px 0" }} />

        {/* Achievements */}
        <Typography variant="h6">Achievements</Typography>
        <Typography variant="body2">{data.achievements}</Typography>
      </CardContent>
    </Card>
  );
};

export default ResumePreview;
