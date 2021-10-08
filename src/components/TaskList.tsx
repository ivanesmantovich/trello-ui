import { FC } from 'react';
import { TaskProps } from '../interfaces/TaskProps';
import { TaskListItem } from './TaskListItem';

interface TaskListProps {
	listName: string;
	tasks: TaskProps[];
}

export const TaskList: FC<TaskListProps> = ({ listName, tasks }) => {
	return (
		<div className="taskList">
			<div className="container">
				<div className="listName">{listName}</div>
				<div className="moreButton">
					<i className="fas fa-ellipsis-h"></i>
				</div>
				{tasks.map((task) => {
					return <TaskListItem task={task} key={task.id} />;
				})}
				<div className="addButton">Add a card...</div>
			</div>
		</div>
	);
};
