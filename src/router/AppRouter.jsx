import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from '../components/layout/Layout';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectSingle from '../pages/ProjectSingle';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: 'projects',
                element: <Projects />,
            },

            {
                path: 'projects/:slug',
                element: <ProjectSingle />,
            },

            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
