import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";

function Router(){
    return(
        <Routes>
            <Route 
                path={'/'} 
                element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/store'} 
                element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } 
            />
            <Route 
                path={'/topup'} 
                element={
                    <AppLayout>
                        <Home />
                    </AppLayout>
                } 
            />
            {/* <Route 
                path={'*'} 
                element={
                    <NotFound />
                } 
            /> */}
        </Routes>
    );
} 

export default Router;