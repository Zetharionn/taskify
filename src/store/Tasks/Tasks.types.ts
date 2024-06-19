export const enum EnumPriority {
	Lowest = '-2',
	Low = '-1',
	Normal = '0',
	Medium = '1',
	High = '2',
	Highest = '3'
}

export const enum EnumStatus {
	Cancelled = 'Cancelled',
	Todo = 'Todo',
	InProgress = 'InProgress',
	Done = 'Done'
}

export interface TaskTypes {
	id: string
	description: string
	priority: EnumPriority
	status: EnumStatus
}

export interface TasksTypes {
	tasks: TaskTypes[]
	createTask: (task: TaskTypes) => void
	deleteTask: (taskId: string) => void
}
