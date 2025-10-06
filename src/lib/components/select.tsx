import { ChevronDown, Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { t } from "../config";

type Option = {
	value: string | number;
	label: string;
};

type Props = {
	options: Option[];
	hasNextPage?: boolean;
	fetchNextPage?: () => void;
};

export const Select: React.FC<Props> = ({ options, hasNextPage, fetchNextPage }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState<Option | null>(null);
	const sentinelRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		if (!isOpen || !sentinelRef.current || !listRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && hasNextPage) {
					fetchNextPage?.();
				}
			},
			{
				root: listRef.current,
				rootMargin: "0px",
				threshold: 1.0,
			},
		);

		observer.observe(sentinelRef.current);
		return () => observer.disconnect();
	}, [isOpen, hasNextPage, fetchNextPage]);

	return (
		<div ref={wrapperRef} className="relative w-full">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="input flex justify-between items-center"
			>
				<span className="truncate text-gray-800">{selected ? selected.label : t("labels.select")}</span>
				<ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
			</button>

			{isOpen && (
				<div
					ref={listRef}
					className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg"
				>
					{options.map((opt) => (
						<button
							key={opt.value}
							type="button"
							className="w-full text-left cursor-pointer px-3 py-2 hover:bg-gray-100 text-gray-800"
							onClick={() => {
								setSelected(opt);
								setIsOpen(false);
							}}
						>
							{opt.label}
						</button>
					))}

					<div ref={sentinelRef} className="flex items-center justify-center py-2">
						{hasNextPage ? <Loader className="mr-3 size-5 animate-spin" /> : <p>{t("labels.end")}</p>}
					</div>
				</div>
			)}
		</div>
	);
};
