const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;
const FILE = "./ranking.json";
const MAX_TIME = 5;

app.use(cors());
app.use(express.json());

/* GET RANKING */
app.get("/ranking", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    data.sort((a, b) =>
        b.clicks - a.clicks || a.time - b.time
    );
    res.json(data.slice(0, 20));
});

/* SAVE RESULT */
app.post("/save", (req, res) => {
    const { name, clicks, time } = req.body;
    if (!name || !clicks || !time) {
        return res.status(400).json({ error: "Dados inválidos" });
    }

    const data = JSON.parse(fs.readFileSync(FILE));
    data.push({ name, clicks, time });
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
});
const cpsEl = document.getElementById("cps");

function updateTime() {
  const elapsed = (performance.now() - startTime) / 1000;

  if (elapsed >= MAX_TIME) {
    timeEl.textContent = MAX_TIME.toFixed(1);
    running = false;
    clearInterval(timer);
    saveResult();
    alert("⏱ Tempo encerrado! (5s)");
    return;
  }

  timeEl.textContent = elapsed.toFixed(1);
}

let lastClick = 0;

clickArea.onclick = () => {
  if (!running) return;

  const elapsed = (performance.now() - startTime) / 1000;
  if (elapsed >= MAX_TIME) return;

  clicks++;
  clicksEl.textContent = clicks;
};


if (i === 0) {
  row.style.background = "#2e7d32";
}



app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${3000}`);
});
