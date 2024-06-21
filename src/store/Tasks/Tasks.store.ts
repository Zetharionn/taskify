import { create } from 'zustand'
import { ITasksStore } from './Tasks.types.ts'
import { persist } from 'zustand/middleware'
import { generateDefaultTask } from '@store/Tasks/helpers/generateDefaultTask.ts'

export const useTasksStore = create<ITasksStore>()(
	persist(
		(set, get) => ({
			tasks: [],
			createTask: () => {
				set({ tasks: [...get().tasks, generateDefaultTask()] })
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
