import { FC } from 'react';
import {TaskProps} from '../interfaces/TaskProps'

interface TaskListItemProps {
    task: TaskProps
}

export const TaskListItem:FC<TaskListItemProps> = ({task}) => {
    return (
        <div className='taskListItem'>
            {task.task}
        </div>
    )
}