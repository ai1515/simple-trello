import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

const reorder = (taskList, startIndex, endIndex) => {
  //タスクを並び変える。
  // 最初の位置の要素を消して、ドラッグ後の位置のところに追加する
  const remove = taskList.splice(startIndex, 1); //[2,3]
  taskList.splice(endIndex, 0, remove[0]); //[2,1,3]
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    // destination：ドラッグ後の位置
    // source：最初の位置
    // 引数として渡す
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      {/* onDragEnd：ドラッグが終わった後の動作 */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* taskListをmapで表示 */}
              {taskList.map((task, index) => (
                <div key={task.id}>
                  {/* 一つ一つのタスクのコンポーネント */}
                  {/* Taskコンポーネントに値を渡す */}
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
