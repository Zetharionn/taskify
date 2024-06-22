import { EnumPriority, EnumStatus, ITask } from '@store/Tasks/Tasks.types.ts'
import { v4 as uuidv4 } from 'uuid'

export const generateDefaultTask = (): ITask => ({
	id: uuidv4(),
	title: 'Untitled',
	body: '',
	priority: EnumPriority.Medium,
	status: EnumStatus.Todo
})
