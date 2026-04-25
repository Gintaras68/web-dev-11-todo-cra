import { BsThreeDots } from 'react-icons/bs';
import style from './Column.module.css';

function Column({ title, tasks }) {
  console.log(tasks);
  
  return (
    <div className={style.column}>
      <div className={style.columnHeader}>
        <p className={style.columnTitle}>{title}</p>
        <BsThreeDots color='#aaa' fontSize='1.5rem' />
      </div>

      <ul className={style.tasksList}>
        { tasks.map(task => <li key={task.id}><div className={style.taskCard}>TASK {task.id}</div></li>) }
      </ul>

      <button className={style.addCardBtn} type="button">+ Add Card</button>
    </div>
  );
}

export default Column;
