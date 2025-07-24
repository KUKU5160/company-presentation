document.addEventListener("DOMContentLoaded", () => {
  const omikujiResults = [
    "大吉 ✨ 最高の1日になりそう！",
    "中吉 😊 良いことあるかも！",
    "小吉 😌 穏やかな1日になりそう",
    "末吉 🤔 ちょっとだけ良いことあるかも",
    "凶 😱 気をつけて行動しよう",
    "大凶 💀 落ち込まず、前向きにね"
  ];

  const resultDiv = document.getElementById("result");
  const drawButton = document.getElementById("drawButton");
  const messageDiv = document.getElementById("message");

  function getTodayDateString() {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD
  }

  function loadSavedResult() {
    const lastDate = localStorage.getItem("omikujiDate");
    const today = getTodayDateString();

    if (lastDate === today) {
      const savedResult = localStorage.getItem("omikujiResult");
      resultDiv.textContent = savedResult;
      drawButton.disabled = true;
      messageDiv.textContent = "今日はもう引きました。また明日お楽しみに！";
    }
  }

  drawButton.addEventListener("click", () => {
    const today = getTodayDateString();
    const randomResult = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];

    resultDiv.textContent = randomResult;
    localStorage.setItem("omikujiDate", today);
    localStorage.setItem("omikujiResult", randomResult);

    drawButton.disabled = true;
    messageDiv.textContent = "また明日引いてね！";
  });

  loadSavedResult();
});