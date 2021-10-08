import './App.css';
import { TaskProps } from './interfaces/TaskProps';
import { TaskList } from './components/TaskList';

const tasks: TaskProps[] = [];

tasks.push(
	{
		id: 1,
		task: 'Trello UI',
	},
	{
		id: 2,
		task: 'Hacker News UI',
	},
	{
		id: 3,
		task: 'Pinterest UI',
	}
);

function App() {
	return <div className="App">
    <TaskList listName='UI Todos' tasks = {tasks}/>
    <TaskList listName='UI Todos' tasks = {tasks}/>
    <TaskList listName='UI Todos' tasks = {tasks}/>
  </div>;
}

export default App;
