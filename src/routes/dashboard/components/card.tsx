import type React from "react";
import type { ReactElement } from "react";

type Props = {
	title: string;
	content: () => ReactElement;
	icon?: () => ReactElement;
	classes?: string;
	iconClasses?: string;
};

export const Card: React.FC<Props> = ({ title, content, icon, classes = "", iconClasses = "" }) => {
	return (
		<section className={`card ${classes}`}>
			<div className="flex justify-between items-center h-8">
				<p className="text-subtle uppercase font-bold">{title}</p>
				{icon && <span className={iconClasses}>{icon()}</span>}
			</div>
			<div className="text-text">{content()}</div>
		</section>
	);
};
