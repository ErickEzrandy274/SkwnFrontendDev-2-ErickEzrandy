import { FinanceAccount } from "@modules";
import { useRouter } from "next/router";
import React from "react";

const Finance = () => {
	const { query } = useRouter();
	return <FinanceAccount id_card={query.id_card} />;
};

export default Finance;
