import { useTasksStore } from '@/store/Tasks'

export const useTasks = () => {
	const tasks = useTasksStore(state => state.tasks)
	const useCreateTask = useTasksStore(state => state.createTask)
	const useDeleteTask = useTasksStore(state => state.deleteTask)

	return { tasks, useCreateTask, useDeleteTask }
}
