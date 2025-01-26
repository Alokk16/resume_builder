import React from "react";
import { Button } from "@mui/material";
import jsPDF from "jspdf";

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${data.name}`, 10, 10);
    doc.text(`Email: ${data.email}`, 10, 20);
    doc.text(`Phone: ${data.phone}`, 10, 30);
    doc.text(`Summary: ${data.summary}`, 10, 40);
    doc.text(`Education: ${data.education}`, 10, 50);
    doc.text(`Experience: ${data.experience}`, 10, 60);
    doc.text(`Skills: ${data.skills}`, 10, 70);
    doc.text(`Achievements: ${data.achievements}`, 10, 80);
    doc.save("resume.pdf");
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleExport}>
      Download Resume
    </Button>
  );
};

export default ExportButton;
