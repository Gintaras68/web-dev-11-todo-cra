import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  const users = [
    {id: 1, name: 'Alina', photo: '1fghfg24hfg'},
    {id: 2, name: 'Sandra', photo: '2dgdfgdfg4'},
    {id: 3, name: 'Julia', photo: '3hfgh45ghf'},
  ];

  const data = [
    {id: 1, tag: 'UI Design', task: 'Membuat konsep', createdAt: 1777053910803, userId: 1, stage: 'done'},
    {id: 2, tag: 'Copywriting', task: 'Membuat konsep iliustrasi untuk halaman about us', createdAt: 1777053910803, userId: 2, stage: 'done'},
    {id: 3, tag: 'Illustration', task: 'Membuat konsep', createdAt: 1777053910803, userId: 3, stage: 'done'},
    {id: 4, tag: 'Illustration', task: 'Membuat konsep', createdAt: 1777053910803, userId: 3, stage: 'review'},
    {id: 5, tag: 'UI Design', task: 'Membuat konsep iliustrasi untuk halaman about us', createdAt: 1777053910803, userId: 1, stage: 'review'},
    {id: 6, tag: 'Copywriting', task: 'Membuat konsep', createdAt: 1777053910803, userId: 2, stage: 'review'},
    {id: 7, tag: 'Illustration', task: 'Membuat konsep', createdAt: 1777053910803, userId: 3, stage: 'progress'},
    {id: 8, tag: 'Copywriting', task: 'Membuat konsep', createdAt: 1777053910803, userId: 2, stage: 'progress'},
    {id: 9, tag: 'Illustration', task: 'Membuat konsep iliustrasi untuk halaman about us', createdAt: 1777053910803, userId: 3, stage: 'progress'},
    {id: 10, tag: 'UI Design', task: 'Membuat konsep', createdAt: 1777053910803, userId: 1, stage: 'progress'},
    {id: 11, tag: 'UI Design', task: 'Icon  di section', createdAt: 1777053910803, userId: 44, stage: 'ready'},
    {id: 12, tag: 'Copywriting', task: 'Konsep hero tit', createdAt: 1777053910803, userId: 2, stage: 'ready'},
  ];

  return (
    <div className="App">
      <Header />
      <Aside />
      <Main tasksData={data} usersData={users} />
    </div>
  );
}

export default App;
