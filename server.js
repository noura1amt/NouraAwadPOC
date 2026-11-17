const app = require("./app");

// Use dynamic port for deployment (e.g., Replit) or 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});