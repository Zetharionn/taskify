import { FC } from 'react'
import { Box } from 'lucide-react'
import { Explorer } from '@components/Explorer'
import { Editor } from '@components/Editor'

export const Home: FC = () => {
	return (
		<>
			<div className='flex flex-col'>
				<div className='flex items-center p-1'>
					<Box />
					<h1 className='text-2xl font-semibold'>Taskify</h1>
				</div>
				<div className='flex gap-[2.5vw] p-4'>
					<Explorer />
					<Editor />
				</div>
			</div>
		</>
	)
}
