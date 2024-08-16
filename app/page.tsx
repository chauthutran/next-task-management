'use client'


import { Button, Calendar } from "nextjs-jc-component-libs/dist/components";


export default function Home() {
  
const events = [
	{
		title: 'Meeting with Bob',
		start: new Date(2024, 7, 15, 10, 0), // YYYY, MM, DD, HH, MM
		end: new Date(2024, 7, 15, 11, 0),
		color: "#ff00ff"
	},
	{
		title: 'Dinner with Honey',
		start: new Date(2024, 7, 15, 20, 0), // YYYY, MM, DD, HH, MM
		end: new Date(2024, 7, 15, 20, 0),
		color: "#ff0f0f"
	},
	{
		title: 'Lunch with Alice',
		start: new Date(2024, 7, 16, 12, 0),
		end: new Date(2024, 7, 16, 13, 0)
	}
]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
		{/* <Button onClick={() => alert('Button clicked!')} label="Click Me"  /> */}
     	<Calendar events={events} />
    </main>
  );
}
