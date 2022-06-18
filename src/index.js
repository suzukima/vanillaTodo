import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.textContent = inputText;
  // divにliを差し込む
  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
  // ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.textContent = "完了";
  completeButton.addEventListener("click", () => {
    console.log("完了");
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";
  deleteButton.addEventListener("click", () => {
    console.log("削除");
  });
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
