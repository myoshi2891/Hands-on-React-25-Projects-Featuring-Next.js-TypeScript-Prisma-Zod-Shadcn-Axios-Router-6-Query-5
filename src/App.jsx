import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Cocktail,
	SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cocktail/:id",
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader,
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <Newsletter />,
				action: newsletterAction,
			},
			// {
			// 	path: "*",
			// 	element: <Error />,
			// },
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
