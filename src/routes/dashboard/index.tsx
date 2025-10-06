import { formatCurrency } from "@/lib/utils";
import { ChevronDownCircle, ChevronUpCircle, ThumbsUp, Wallet } from "lucide-react";
import type React from "react";
import { useMemo } from "react";
import { Card, Chart, Filters, Table } from "./components";

export const Dashboard: React.FC = () => {
	const data = useMemo(
		() =>
			[
				{ id: 1, title: "Total receita", amount: 41_954.26, meta: null, status: "success", icon: <ChevronUpCircle /> },
				{ id: 2, title: "Total despesa", amount: 67_740.79, meta: null, status: "error", icon: <ChevronDownCircle /> },
				{
					id: 3,
					title: "Lucro líquido",
					amount: 41_954.26,
					meta: null,
					status: "warning",
					icon: <ThumbsUp />,
				},
				{
					id: 4,
					title: "Contas vencidas:",
					amount: null,
					meta: {
						toReceive: { title: "A receber", amount: 7_500 },
						toPay: { title: "A pagar", amount: 38_853 },
					},
					status: "info",
					icon: <Wallet />,
				},
				{
					id: 5,
					title: "Contas vencidas:",
					amount: null,
					meta: {
						toReceive: { title: "A receber", amount: null },
						toPay: { title: "A pagar", amount: null },
					},
					status: "info",
					icon: <Wallet />,
				},
			] as const,
		[],
	);

	const style = useMemo(
		() => ({
			success: { border: "border-b-success", icon: "text-success" },
			error: { border: "border-b-error", icon: "text-error" },
			warning: { border: "border-b-warning", icon: "text-warning" },
			info: { border: "border-b-info", icon: "text-info" },
		}),
		[],
	);

	return (
		<main className="p-5 space-y-10">
			<Filters />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
				{data.map((e) => (
					<Card
						key={e.id}
						title={e.title}
						classes={style[e.status].border}
						iconClasses={style[e.status].icon}
						icon={() => e.icon}
						content={() => (
							<span className="text-2xl">
								{!e.meta ? (
									formatCurrency(e.amount)
								) : (
									<div className="flex gap-5">
										<div>
											<p className="uppercase text-subtle text-sm">{e.meta.toReceive?.title}</p>
											<p className="text-2xl">{formatCurrency(e.meta.toReceive?.amount) ?? "--"}</p>
										</div>
										<div>
											<p className="uppercase text-subtle text-sm">{e.meta.toPay?.title}</p>
											<p className="text-2xl">{formatCurrency(e.meta.toPay?.amount) ?? "--"}</p>
										</div>
									</div>
								)}
							</span>
						)}
					/>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
				<div className="col-span-10 lg:col-span-6 bg-surface border border-gray-300 rounded-md p-5 pb-10 h-[30vh] lg:h-[50vh]">
					<Chart />
				</div>

				<div className="bg-surface rounded-md col-span-10 lg:col-span-4 overflow-x-auto">
					<Table />
				</div>
			</div>
		</main>
	);
};
