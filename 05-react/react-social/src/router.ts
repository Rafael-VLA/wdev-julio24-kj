import { createBrowserRouter } from 'react-router'

import { HomePage } from './pages/HomePage';
import { UserProfilePage } from './pages/UserProfilePage';
import { MainLayout } from './layouts/MainLayout';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "user-profile/:id",
                Component: UserProfilePage
            }
        ]
    }
]);