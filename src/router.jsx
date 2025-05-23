import { createBrowserRouter } from "react-router";
import { getDogs, getDog } from "./utilities/typicode";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Details from "./pages/Details";
import Layout from "./Layout";
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/Error";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",  
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [{
            index: true,
            element: <Home />
        },
        {
        path: "/dogs",
        element: <Dogs />,
        loader: getDogs
        },
        {
            path: "/details/:id",
            element: < Details/>,
            loader: getDog
        },
        {
            path: "*",
            element: <NotFound />
        }]
    },
    
    
]);

export default router;