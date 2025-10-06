import { t } from "@/lib/config";
import { ArrowDown, ArrowUp, Clover, Menu, Monitor, Plus, Search, X } from "lucide-react";
import { useState } from "react";

export const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="h-20 w-full p-5 bg-surface shadow-lg flex justify-between items-center">
			<section className="flex items-center gap-3">
				<button type="button" className="md:hidden text-nav cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X /> : <Menu />}
				</button>

				<div className="hidden md:flex items-center gap-3">
					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<Plus />
						{t("components.navbar.register")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<ArrowDown />
						{t("components.navbar.accountsPayable")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<ArrowUp />
						{t("components.navbar.accountsReceivable")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<Monitor />
						{t("components.navbar.reports")}
					</button>
				</div>
			</section>

			<section className="flex items-center">
				<div className="flex items-center gap-8 mr-8">
					<button type="button" className="text-nav cursor-pointer">
						<Search />
					</button>

					<button type="button" className="text-nav cursor-pointer">
						<Clover />
					</button>
				</div>

				<div className="flex gap-2 items-center">
					<div className="hidden sm:flex flex-col text-right">
						<p className="text-nav text-sm">{t("components.navbar.admin")}</p>
						<p className="font-bold text-title">{t("components.navbar.financial")}</p>
					</div>

					<button
						type="button"
						className="btn w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-lg flex items-center justify-center text-primary font-bold"
					>
						A
					</button>
				</div>
			</section>

			{menuOpen && (
				<div className="absolute top-20 left-0 w-full bg-surface shadow-lg flex flex-col p-4 gap-2 md:hidden z-50">
					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<Plus />
						{t("components.navbar.register")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<ArrowDown />
						{t("components.navbar.accountsPayable")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<ArrowUp />
						{t("components.navbar.accountsReceivable")}
					</button>

					<button type="button" className="btn px-4 py-2 cursor-pointer text-nav flex items-center gap-2 capitalize">
						<Monitor />
						{t("components.navbar.reports")}
					</button>
				</div>
			)}
		</nav>
	);
};
