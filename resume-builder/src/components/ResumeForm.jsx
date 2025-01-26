import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const ResumeForm = ({ setResumeData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
          />
        </Grid>
        {/* Additional Fields */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Summary"
            name="summary"
            variant="outlined"
            multiline
            rows={2}
            value={form.summary}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Experience"
            name="experience"
            variant="outlined"
            multiline
            rows={3}
            value={form.experience}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Achievements"
            name="achievements"
            variant="outlined"
            multiline
            rows={2}
            value={form.achievements}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Generate Resume
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ResumeForm;
