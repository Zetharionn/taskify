import { create } from 'zustand'
import {
	EnumPriority,
	EnumStatus,
	TasksTypes,
	TaskTypes
} from './Tasks.types.ts'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

export const useTasksStore = create<TasksTypes>()(
	persist(
		(set, get) => ({
			tasks: [],
			createTask: () => {
				const defaultTask: TaskTypes = {
					id: uuidv4(),
					title: 'Untitled',
					body: '',
					priority: EnumPriority.Medium,
					status: EnumStatus.Todo
				}

				set({ tasks: [...get().tasks, defaultTask] })
			},
			deleteTask: (taskId: string) =>
				set({
					tasks: get().tasks.filter(task => task.id !== taskId)
				})
		}),
		{
			name: 'tasks-storage',
			partialize: state => ({ tasks: state.tasks })
		}
	)
)
