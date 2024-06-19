import { create } from 'zustand'
import { TasksTypes, TaskTypes } from './Tasks.types.ts'
import { persist } from 'zustand/middleware'

export const useTasksStore = create<TasksTypes>()(
	persist(
		(set, get) => ({
			tasks: [],
			createTask: (task: TaskTypes) => {
				set({ tasks: [...get().tasks, task] })
			}
		}),
		{
			name: 'tasks-storage',
			partialize: state => ({ tasks: state.tasks })
		}
	)
)
