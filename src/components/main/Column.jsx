import { BsThreeDots } from 'react-icons/bs';
import style from './Column.module.css';
import TaskCard from './TaskCard';
import { useState } from 'react';
import CreateTask from './CreateTask';

function Column({ title, tasks, users }) {
  const [isShowForm, setIsShowForm] = useState(false);
  function showForm() {
    setIsShowForm(true);
  }
  function hideForm() {
    setIsShowForm(false);
  }

  return (
    <div className={style.column}>
      <div className={style.columnHeader}>
        <p className={style.columnTitle}>{title}</p>
        <BsThreeDots color="#aaa" fontSize="1.5rem" />
      </div>
      <ul className={style.tasksList}>
        {tasks.map((taskObj) => (
          <TaskCard
            key={taskObj.id}
            data={taskObj}
            user={users.find((user) => user.id === taskObj.userId)}
          />
        ))}
      </ul>
      <div className={style.addTask}>
        {isShowForm ? (
          <CreateTask onDone={hideForm} />
        ) : (
          <button onClick={showForm} >+ Add Card</button>
        )}
      </div>
    </div>
  );
}

export default Column;
