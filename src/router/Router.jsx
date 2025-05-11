import React, {lazy, Suspense} from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";

// Lazy load pages
const RootLayout = lazy(() => import('../layouts/rootLayout/index.jsx'));
const ErrorPage = lazy(() => import('../layouts/errorPage/index.jsx'));
const NotFoundPage = lazy(() => import('../layouts/notFound/index.jsx'));
const HomePage = lazy(() => import('../pages/home/index.jsx'));
const ResumePage = lazy(() => import('../pages/resume/index.jsx'));
const WorkPage = lazy(() => import('../pages/work/index.jsx'));
const ContactPage = lazy(() => import('../pages/contact/index.jsx'));
const LeisurePage = lazy(() => import('../pages/leisure/index.jsx'));


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
                path: 'work',
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <WorkPage/>
                    </Suspense>
                )
            },
            {
                path: 'contact',
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <ContactPage/>
                    </Suspense>
                )
            },
            {
                path: 'leisure',
                element: (
                    <Suspense fallback={<>Loading...</>}>
                        <LeisurePage/>
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