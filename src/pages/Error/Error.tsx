import { FC, useEffect } from 'react'
import { useRouteError } from 'react-router-dom'

export const Error: FC = () => {
	const error = useRouteError()

	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<>
			<div className='flex flex-col justify-center text-center h-screen'>
				<h1 className='text-3xl font-bold'>Oops!</h1>
				<p className='text-2xl'>Sorry, an unexpected error has occurred.</p>
				<p className='text-xl'>
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-expect-error */}
					<i>{`${error.status}: ${error.statusText}` || error.message}</i>
				</p>
			</div>
		</>
	)
}
