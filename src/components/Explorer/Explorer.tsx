import { FC } from 'react'
import { useTasksStore } from '@store/Tasks'
import { Button } from '@components/ui/button.tsx'
import { Separator } from '@components/ui/separator.tsx'
import { ScrollArea } from '@components/ui/scroll-area.tsx'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger
} from '@components/ui/context-menu.tsx'
import { FilePlus, Trash2 } from 'lucide-react'
import { ITask } from '@store/Tasks/Tasks.types.ts'

export const Explorer: FC = () => {
	const tasks = useTasksStore(state => state.tasks)
	const createTask = useTasksStore(state => state.createTask)
	const deleteTask = useTasksStore(state => state.deleteTask)
	const selectTask = useTasksStore(state => state.selectTask)

	const handleCreateTask = () => {
		createTask()
	}

	const handleDeleteTask = (taskId: string) => {
		deleteTask(taskId)
	}

	const handleSelectTask = (task: ITask) => {
		selectTask(task)
	}

	return (
		<ScrollArea className='h-[75vh] min-h-32 w-[12vw] max-h-[75vh] min-w-48 rounded-md border'>
			<div className='p-4'>
				<div className='flex flex-row justify-between items-center'>
					<h4 className='text-xl font-medium leading-none'>Explorer</h4>
					<Button variant='outline' size='icon' onClick={handleCreateTask}>
						<FilePlus />
					</Button>
				</div>
				<Separator className='my-2' />
				<div>
					{tasks.map(task => (
						<>
							<ContextMenu key={task.id}>
								<ContextMenuTrigger onClick={() => handleSelectTask(task)}>
									<div className='p-1 rounded-md border hover:bg-slate-200 transition-colors'>
										<p>{task.title}</p>
									</div>
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuItem onSelect={() => handleDeleteTask(task.id)}>
										<div className='flex flex-row items-center'>
											<Trash2 size='14px' />
											<p className='text-sm leading-none ml-1'>Delete</p>
										</div>
									</ContextMenuItem>
								</ContextMenuContent>
							</ContextMenu>

							<Separator className='my-2' />
						</>
					))}
				</div>
			</div>
		</ScrollArea>
	)
}
