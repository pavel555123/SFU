import './App.css'
import {AppRouter} from "@/app/providers/router";
import {Suspense, useEffect} from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch/useAppDispatch.ts";
import {userActions} from "@/entities/User";
import {Navbar} from "@/widgets/Navbar";
import {MainLayout} from "@/widgets/MainLayout/MainLayout.tsx";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className='app'>
            <Suspense fallback=''>
                <MainLayout
                    header={<Navbar/>}
                    content={<AppRouter/>}
                />
            </Suspense>
        </div>
    )
}

export default App
