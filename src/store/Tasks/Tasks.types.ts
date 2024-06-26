export const enum EnumPriority {
	Low = -1,
	Medium = 0,
	High = 1
}

export const enum EnumStatus {
	Cancelled = 'Cancelled',
	Todo = 'Todo',
	InProgress = 'InProgress',
	Done = 'Done'
}

export interface ITask {
	id: string
	title: string
	body: string
	priority: EnumPriority
	status: EnumStatus
}

export interface ITasksStore {
	tasks: ITask[]
	selectedTask: ITask | null
	createTask: () => void
	editTask: (value: string) => void
	deleteTask: (taskId: string) => void
	selectTask: (task: ITask) => void
}
