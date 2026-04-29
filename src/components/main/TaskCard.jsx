import style from './TaskCard.module.css';
import userPhoto from './../../img/users/user-1.jpg';
import { BsFlagFill, BsThreeDots } from 'react-icons/bs';
import { BiSolidMessage } from 'react-icons/bi';
import { RiAttachment2 } from 'react-icons/ri';

function TaskCard({ data, user }) {
  const { tag, task, createdAt} = data;

  // chose color class for category
  let tagClass = '';
  if (tag === 'Copywriting') {
    tagClass = style.cardTag_red;
  } else if (tag === 'UI Design') {
    tagClass = style.cardTag_blue;
  } else if (tag === 'Illustration') {
    tagClass = style.cardTag_green;
  }

  // Get Date string
  const date = new Date(createdAt);
  const foramtedDate = date.toLocaleDateString('en-US', {
    month: 'short', 
    day: 'numeric'
  });

  let userPhoto = user ? user.photo : 'noUser';
  

  return (
    <li>
      <article className={style.taskCard}>
        <header className={style.cardHeader}>
          <p className={`${style.cardTag} ${tagClass}`}>{tag}</p>
          <BsThreeDots />
        </header>

        <p className={style.cardTask}>{task}</p>

        <footer className={style.cardFooter}>
          <div className={style.cardInfo}>
            <div className={style.cardDate}>
              <BsFlagFill />
              <p>{foramtedDate}</p>
            </div>
            <div className={style.cardNotes}>
              <BiSolidMessage />
              <p>2</p>
            </div>
            <div className={style.cardAttashed}>
              <RiAttachment2 />
              <p>2</p>
            </div>
          </div>

          <img className={style.avatar} src={`./img/users/${userPhoto}.jpg`} alt="Avatar" />
        </footer>
      </article>
    </li>
  );
}

export default TaskCard;
