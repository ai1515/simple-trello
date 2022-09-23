import React from "react";

// TaskCards.js→TaskCard.js→TaskCardDeleteButton.jsの順でtaskCard、taskCardsList、setTaskCardsListを渡す
export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  // 押したボタンのタスクのIDが引数に入る
  const taskCardDeleteButton = (id) => {
    /* タスクカードを削除する */
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        // 押したボタンのタスクのIDを取得
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
