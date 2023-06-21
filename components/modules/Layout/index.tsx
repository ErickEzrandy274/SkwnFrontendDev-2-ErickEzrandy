import React, { ReactNode } from "react";
import { Navbar } from "@elements";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<section className="relative flex flex-col justify-between min-h-screen">
			<section className="m-5 md:mx-10">{children}</section>

			<Navbar />
		</section>
	);
};

export default Layout;
