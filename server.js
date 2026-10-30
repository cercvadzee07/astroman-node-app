const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ვეუბნებით სერვერს, რომ public ფოლდერში არსებული ფაილები (CSS, JS, სურათები) გახადოს საჯარო
app.use(express.static(path.join(__dirname, "public")));

// მთავარ მისამართზე (/) შემოსვლისას ვუბრუნებთ index.html ფაილს
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `🚀 სერვერი წარმატებით გაეშვა მისამართზე: http://localhost:${PORT}`,
  );
});
