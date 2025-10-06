import { Select } from "@/lib/components";
import { t } from "@/lib/config";
import { ChevronLeft, FileText, Search } from "lucide-react";
import type React from "react";
import { useId, useState } from "react";

const MAX_DATA = 200;

export const Filters: React.FC = () => {
	const id = useId();

	const [data, setData] = useState(
		Array.from({ length: 50 }, (_, idx) => ({
			value: idx + 1,
			label: `Centro de custo ${idx + 1}`,
		})),
	);

	const hasNextPage = data.length <= MAX_DATA;

	const fetchNextPage = () => {
		setTimeout(() => {
			setData((prev) => [
				...prev,
				...Array.from({ length: 50 }, (_, i) => ({
					value: prev.length + i + 1,
					label: `Centro de custo ${prev.length + i + 1}`,
				})),
			]);
		}, 1_000);
	};

	return (
		<section className="flex flex-col lg:flex-row bg-surface justify-between border border-gray-300 p-5 gap-4 rounded-md">
			<div className="block lg:hidden">
				<button type="button" className=" btn bg-secondary text-primary p-2">
					<ChevronLeft />
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1 items-end">
				<div className="flex flex-1 flex-col md:flex-row items-start md:items-center gap-4">
					<button type="button" className="hidden lg:block btn bg-secondary text-primary p-2">
						<ChevronLeft />
					</button>

					<div className="flex-1 w-full">
						<p className="font-bold text-subtle">{t("components.filters.centerCost")}</p>
						<Select options={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
					</div>
				</div>

				<div className="flex flex-col">
					<p className="font-bold text-subtle">{t("components.filters.initialDate")}</p>
					<input type="date" className="input w-full" />
				</div>

				<div className="flex flex-col">
					<p className="font-bold text-subtle">{t("components.filters.finalDate")}</p>
					<input type="date" className="input w-full" />
				</div>

				<div className="flex items-center gap-2">
					<input type="checkbox" id={id} className="checkbox" />
					<label htmlFor={id} className="cursor-pointer">
						{t("components.filters.send")}
					</label>
				</div>
			</div>

			<div className="flex flex-wrap justify-end items-center gap-3">
				<div>
					<button type="button" className="btn bg-secondary text-primary">
						<span>
							<FileText />
						</span>
						<span>{t("components.filters.pdf")}</span>
					</button>
				</div>

				<div>
					<button type="button" className="btn bg-primary text-white">
						<Search />
						{t("components.filters.search")}
					</button>
				</div>
			</div>
		</section>
	);
};
