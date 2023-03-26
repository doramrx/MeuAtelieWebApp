import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { SplashPage } from "../pages/SplashPage/index";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SplashPage />,
    },
    {
        path: "signIn",
        element: <SignIn />,
    },
    {
        path: "signUp",
        element: <SignUp />,
    },
]);

export function Routes() {
    return <RouterProvider router={router} />;
}
