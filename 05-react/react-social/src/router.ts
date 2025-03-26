import { createBrowserRouter } from 'react-router'

import { HomePage } from './pages/HomePage';
import { UserProfilePage } from './pages/UserProfilePage';

export const router = createBrowserRouter([
    {
        index: true, // => /
        Component: HomePage
    },
    {
        path: "user-profile/:id",
        Component: UserProfilePage
    }
]);