import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend static files from 'dist'
app.use(express.static(path.join(__dirname, "dist")));

// For any other routes, serve index.html (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route to Handle Contact Form Submission
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    });

    res.json({ success: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));