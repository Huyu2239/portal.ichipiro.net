import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages/index.tsx";
import "./styles/theme.css";

const root = document.getElementById("root");
if (!root) throw new Error("No root element");

const router = createBrowserRouter([
	{
		children: [
			{
				index: true,
				element: <IndexPage />,
			},
		],
	},
]);

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
