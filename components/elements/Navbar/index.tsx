import React from "react";
import { AccountIcon, ChatIcon, HistoryIcon, HomeIcon } from "@elements";
import { useRouter } from "next/router";

const Navbar = () => {
	const { pathname } = useRouter();

	return (
		<section className="sticky bottom-0 bg-white flex items-center justify-between md:justify-center md:gap-20 px-5 py-2 shadow-2xl shadow-gray-600 origin-top">
			<HomeIcon isActive={pathname === "/"} />
			<HistoryIcon isActive={pathname === "/history"} />
			<ChatIcon isActive={pathname === "/chat"} />
			<AccountIcon isActive={pathname.slice(1).includes("account")} />
		</section>
	);
};

export default Navbar;
