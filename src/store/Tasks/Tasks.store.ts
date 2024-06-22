import { create } from 'zustand'
import { ITask, ITasksStore } from './Tasks.types.ts'
import { persist } from 'zustand/middleware'
import { generateDefaultTask } from './helpers/generateDefaultTask.ts'

export const useTasksStore = create<ITasksStore>()(
	persist(
		(set, get) => ({
			tasks: [],
			selectedTask: null,
			createTask: () => {
				set({ tasks: [...get().tasks, generateDefaultTask()] })
			},
			editTask: (value: string) => {
				const selectedTask = get().selectedTask
				if (selectedTask) {
					set({
						tasks: get().tasks.map(task =>
							task.id === selectedTask.id ? { ...task, body: value } : task
						),
						selectedTask: { ...selectedTask, body: value }
					})
				}
			},
			deleteTask: (taskId: string) =>
				set({
					tasks: get().tasks.filter(task => task.id !== taskId)
				}),
			selectTask: (task: ITask) => {
				set({
					selectedTask: task
				})
			}
		}),
		{
			name: 'tasks-storage',
			partialize: state => ({
				tasks: state.tasks,
				selectedTask: state.selectedTask
			})
		}
	)
)
