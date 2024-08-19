"use client";

import * as Constant from "@/lib/constant";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useMainUi } from "@/lib/contexts/MainUiContext";
import TaskForm from "./tasks/TaskForm";
import TaskPage from "./tasks/TaskPage";


export default function AppWrapper() {
    const { mainPage } = useMainUi();
    const { user } = useAuth();

    return (
        <>
        <TaskPage />
        
            { mainPage == Constant.PAGE_LOGIN && <LoginForm /> }

            { mainPage == Constant.PAGE_LOGIN && <RegisterForm /> }

            
            
            {user !== null && mainPage == Constant.PAGE_TASK_LIST && <TaskPage />  }
        </>
    )
}