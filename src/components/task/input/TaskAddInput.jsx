import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  // propsで受け取る
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    // ユニークなIDを生成できるライブラリ。並び替え時の不具合が発生しない。
    const taskId = uuid();
    // エンターで初期化(リロード)されないようにする
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    //カードを追加する。idをつけることで削除・ドラッグに対応。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    // カード追加後は入力欄を空に戻す
    setInputText("");
  };

  const handleChange = (e) => {
    // 入力した文字をstateに格納
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
