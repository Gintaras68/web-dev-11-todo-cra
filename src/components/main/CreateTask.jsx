import style from './CreateTask.module.css';
import { IoClose } from 'react-icons/io5';
import { FaTag, FaUserPlus } from 'react-icons/fa';
import { BsPlusCircleDotted } from 'react-icons/bs';
import tempUser from "../../img/users/user-1.jpg";

function CreateTask({ onDone }) {
  function doneHandling() {
    onDone();
  }

  function closeForm() {
    onDone();
  }

  return (
    <div className={style.new_task}>
      <div className={style.line}>
        <h3>Create New Card</h3>
        <IoClose size={20} onClick={closeForm}/>
      </div>

      <textarea
        name="descr"
        rows={3}
        placeholder="What is the task?"
      ></textarea>

      <div className={style.line}>
        <div>
          <FaTag />
          <p>UI Design</p>
        </div>
        <BsPlusCircleDotted size={'1.5rem'} />
      </div>
      <hr />
      <div className={style.line}>
        <div>
          <FaUserPlus size={'1.2rem'} />
          <img src={tempUser} alt="Avatar" />
          Samantha
        </div>
        <BsPlusCircleDotted size={'1.5rem'} />
      </div>
      <button onClick={doneHandling}>Done</button>
    </div>
  );
}

export default CreateTask;
