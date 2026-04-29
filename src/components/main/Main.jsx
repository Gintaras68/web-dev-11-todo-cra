import style from './Main.module.css';
import user1 from '../../img/users/user-1.jpg';
import user2 from '../../img/users/user-2.jpg';
import user3 from '../../img/users/user-3.jpg';
import { BsPlusCircleDotted } from 'react-icons/bs';
import Column from './Column';

function Main({ tasksData, usersData }) {
  return (
    <main className={style.main}>
      <div className={style.headerLine}>
        <h1>HomepageDesign</h1>
        <div className={style.usersBlock}>
          <ul className={style.usersList}>
            <li>
              <img className={style.avatar} src={user1} alt="Avatar" />
            </li>
            <li>
              <img className={style.avatar} src={user2} alt="Avatar" />
            </li>
            <li>
              <img className={style.avatar} src={user3} alt="Avatar" />
            </li>
          </ul>
          <button type="button" className={style.addUserBtn}>
            <BsPlusCircleDotted />
          </button>
        </div>
      </div>

      <Column
        title="Task Ready"
        tasks={tasksData.filter((item) => item.stage === 'ready')}
        users={usersData}
      />
      <Column
        title="On Progress"
        tasks={tasksData.filter((item) => item.stage === 'progress')}
        users={usersData}
      />
      <Column
        title="Needs Review"
        tasks={tasksData.filter((item) => item.stage === 'review')}
        users={usersData}
      />
      <Column
        title="Done"
        tasks={tasksData.filter((item) => item.stage === 'done')}
        users={usersData}
      />
    </main>
  );
}

export default Main;
