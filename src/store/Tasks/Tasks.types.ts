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

export interface TaskTypes {
	id: string
	body: string
	priority: EnumPriority
	status: EnumStatus
}

export interface TasksTypes {
	tasks: TaskTypes[]
	createTask: (task: TaskTypes) => void
	deleteTask: (taskId: string) => void
}
