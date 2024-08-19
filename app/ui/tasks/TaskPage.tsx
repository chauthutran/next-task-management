import { useAuth } from "@/lib/contexts/AuthContext"
import { ITask } from "@/lib/definations";
import { useEffect, useState, useTransition } from "react";

export default function TaskPage() {

    const { user } = useAuth();
    const [list, setList] = useState<ITask[] | null>(null);
	const [isPending, startTransition] = useTransition();

    const fetchData = async() => {
        try{
            const response = await fetch(`api/tasks`);
           
			if (!response.ok) {
                // setError("Network response was not ok");
            }
            else {
                const list = await response.json();
                setList(list);
            }
		} catch (err) {
			// setError(Utils.getErrMessage(err));
		} finally {
			// setLoading(false);
		}
    }

    useEffect(() => {
        startTransition(() => {
            fetchData();
        });
    })

    if( isPending ) return <div>Loading ...</div>

    return (
        <>
            <h2>Task List</h2>
        </>
    )
}