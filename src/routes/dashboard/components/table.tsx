import { TrendingDown } from "lucide-react";
import type React from "react";
import { useMemo } from "react";
import { formatCurrency } from "@/lib/utils";
import { t } from "@/lib/config";

export const Table: React.FC = () => {
	const data = useMemo(
		() =>
			[
				{ id: 1, name: "SUZANO TRANSPORTE FLORESTAL", expense: 53_549.47, revenue: 41_954.26 },
				{ id: 2, name: "TRANSPORTES DE AGREGADOS ITATIBIRA MG", expense: 14_191.32, revenue: 0 },
			] as const,
		[],
	);

	const totalExpense = useMemo(() => data.reduce((acc, item) => acc + item.expense, 0), [data]);
	const totalRevenue = useMemo(() => data.reduce((acc, item) => acc + item.revenue, 0), [data]);
	const totalResult = totalRevenue - totalExpense;

	return (
		<table className="table-auto border rounded-md border-gray-300 w-full">
			<thead className="bg-t-head">
				<tr className="text-subtle">
					<th className="px-4 py-2 text-left">{t("pages.dashboard.table.head.name")}</th>
					<th className="px-4 py-2 text-left">{t("pages.dashboard.table.head.expense")}</th>
					<th className="px-4 py-2 text-left">{t("pages.dashboard.table.head.revenue")}</th>
					<th className="px-4 py-2 text-left">{t("pages.dashboard.table.head.result")}</th>
				</tr>
			</thead>
			<tbody>
				{data.map((e) => (
					<tr className="h-16" key={e.id}>
						<td className="px-4 py-2">{e.name}</td>
						<td className="px-4 py-2">{formatCurrency(e.expense)}</td>
						<td className="px-4 py-2">{formatCurrency(e.revenue)}</td>
						<td className="p-4 flex items-center gap-2 line-clamp-1">
							{formatCurrency(e.revenue - e.expense)}
							<span className="rounded-full bg-red-200 p-2">
								<TrendingDown className="text-error" size={16} />
							</span>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot className="bg-primary text-white">
				<tr className="h-16 font-bold">
					<th scope="row" className="px-4 py-2 text-left">
						{t("pages.dashboard.table.footer.total")}
					</th>
					<td className="px-4 py-2">{formatCurrency(totalExpense)}</td>
					<td className="px-4 py-2">{formatCurrency(totalRevenue)}</td>
					<td className="px-4 py-2">{formatCurrency(totalResult)}</td>
				</tr>
			</tfoot>
		</table>
	);
};
