'use client'


import { Button, Calendar } from "nextjs-jc-component-libs/dist/components";
import { MainUiProvider } from "./lib/contexts/MainUiContext";
import { AuthProvider } from "./lib/contexts/AuthContext";
import AppWrapper from "./ui/AppWrapper";
import TaskForm from "./ui/manger-tasks/TaskForm";


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
	<main >
		<MainUiProvider>
			<AuthProvider>
				<div className="h-screen flex flex-col">
					<main className="flex-1 overflow-auto">
						<AppWrapper />
					</main>
				</div>
			</AuthProvider>
		</MainUiProvider>
	</main>
  );
}
