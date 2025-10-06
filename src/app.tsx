import type React from "react";
import { Dashboard } from "./routes/dashboard";
import { Navbar } from "./lib/components";

export const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<Dashboard />
		</>
	);
};
