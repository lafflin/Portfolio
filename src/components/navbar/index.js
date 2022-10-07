import * as React from "react";

const NavBar = (props) => {
	const pages = ["About", "Portfolio", "Contact", "Resume"];
	return (
		<div>
			<ul className="grid grid-rows-1 grid-flow-col gap-3">
				{pages.map((pages) => (
					<li
						// class="col-span-1"
						className={props.currentPage === pages}
						key={pages}
					>
						<a
							// class="gap-y-2.5"
							href={"#" + pages.toLowerCase()}
							onClick={() => props.handlePageChange(pages)}
							className={props.currentPage === pages}
						>
							{pages}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavBar;
