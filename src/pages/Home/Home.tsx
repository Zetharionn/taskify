import { FC } from 'react'
import { Box } from 'lucide-react'

export const Home: FC = () => {
	return (
		<>
			<div className='flex'>
				<div className='flex flex-col h-screen'>
					<div className='flex flex-row items-center p-1'>
						<Box />
						<h1 className='text-2xl font-semibold'>Taskify</h1>
					</div>
				</div>
			</div>
		</>
	)
}
