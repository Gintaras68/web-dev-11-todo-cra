import { BsThreeDots } from 'react-icons/bs';
import style from './Column.module.css';
import TaskCard from './TaskCard';

function Column({ title, tasks }) {
  
  return (
    <div className={style.column}>
      <div className={style.columnHeader}>
        <p className={style.columnTitle}>{title}</p>
        <BsThreeDots color='#aaa' fontSize='1.5rem' />
      </div>

      <ul className={style.tasksList}>
        {/* { tasks.map(task => <li key={task.id}><div className={style.taskCard}>TASK {task.id}</div></li>) } */}
        { tasks.map(taskObj => <TaskCard key={taskObj.id} data={taskObj} />) }
      </ul>

      <button className={style.addCardBtn} type="button">+ Add Card</button>
    </div>
  );
}

export default Column;
