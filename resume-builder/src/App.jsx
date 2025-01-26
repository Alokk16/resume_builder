import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import ExportButton from "./components/ExportButton";
import theme from "./styles/theme";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ padding: "20px" }}>
        <ResumeForm setResumeData={setResumeData} />
        <div style={{ marginTop: "20px" }}>
          <ResumePreview data={resumeData} />
          {resumeData && <ExportButton data={resumeData} />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;