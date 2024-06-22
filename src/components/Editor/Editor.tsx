import { ChangeEventHandler, FC } from 'react'
import { Input } from '@components/ui/input.tsx'
import { Textarea } from '@components/ui/textarea.tsx'
import { useTasksStore } from '@store/Tasks'

export const Editor: FC = () => {
	const editTask = useTasksStore(state => state.editTask)
	const selectedTask = useTasksStore(state => state.selectedTask)

	const handleEditTask: ChangeEventHandler<HTMLTextAreaElement> = e => {
		editTask(e.target.value)
	}

	return (
		<div className='flex flex-col gap-[2.5vh] w-[100vw]'>
			<Input
				value={selectedTask?.title}
				placeholder='Some task'
				className='font-semibold text-2xl'
			/>
			<Textarea
				value={selectedTask?.body}
				onChange={handleEditTask}
				placeholder='Complete this project...'
				className='flex-grow resize-none font-medium text-xl'
			/>
		</div>
	)
}
