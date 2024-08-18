"use client";

import * as Constant from "@/lib/constant";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useMainUi } from "@/lib/contexts/MainUiContext";
import TaskForm from "./manger-tasks/TaskForm";

export default function AppWrapper() {
    // const { mainPage } = useMainUi();
    // const { user } = useAuth();
    return (
        <>
            <h2>Task Management</h2>
            <TaskForm />
            {/* { mainPage == Constant.UI_LOGIN_PAGE && <LoginForm /> }

            { mainPage == Constant.UI_REGISTRATION_PAGE && <RegisterForm /> } */}
            
        </>
    )
}