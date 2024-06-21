import { FC } from 'react'
import { Box } from 'lucide-react'
import { Explorer } from '@components/Explorer'

export const Home: FC = () => {
	return (
		<>
			<div className='flex flex-col'>
				<div className='flex flex-col'>
					<div className='flex flex-row items-center p-1'>
						<Box />
						<h1 className='text-2xl font-semibold'>Taskify</h1>
					</div>
				</div>
				<div className='p-4'>
					<Explorer />
				</div>
			</div>
		</>
	)
}
