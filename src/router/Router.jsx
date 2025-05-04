import React, {lazy, Suspense} from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from '../layouts/notFound/index.jsx';
import HomePage from '../pages/home/index.jsx';
import ResumePage from '../pages/resume/index.jsx';

// Lazy load pages
const RootLayout = lazy(() => import('../layouts/rootLayout/index.jsx'));
const ErrorPage = lazy(() => import('../layouts/errorPage/index.jsx'));


const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <HomePage/>
                    </Suspense>
                )
            },
            {
                path: 'resume',
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <ResumePage/>
                    </Suspense>
                )
            },
            {
                path: "error",
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <ErrorPage/>
                    </Suspense>
                )
            }
        ]
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<>Loading...</>}>
                <NotFoundPage/>
            </Suspense>
        )
    }
]);

const RouterComponent = () => {
    return <RouterProvider router={router}/>;
};

export default RouterComponent;