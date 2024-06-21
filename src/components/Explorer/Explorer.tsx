import { FC } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { useTasksStore } from '@/store/Tasks'
import { Button } from '@/components/ui/button.tsx'
import { FilePlus, Trash2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger
} from '@/components/ui/context-menu.tsx'

export const Explorer: FC = () => {
	const tasks = useTasksStore(state => state.tasks)
	const createTask = useTasksStore(state => state.createTask)
	const deleteTask = useTasksStore(state => state.deleteTask)

	const handleCreateTask = () => {
		createTask()
	}

	const handleDeleteTask = (taskId: string) => {
		deleteTask(taskId)
	}

	return (
		<ScrollArea className='h-[80vh] w-[12vw] rounded-md border'>
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
								<ContextMenuTrigger>
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
