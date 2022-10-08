import * as React from "react";

// initially was using materialUI, ending up switching out of it because it felt too complex for this project. also like the idea of learning tailwind more.
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// personal imports the separate pages
import NavBar from "../navbar";
import About from "../about";
import Projects from "../project";
import Contact from "../contact";
import Resume from "../resume";

const Header = () => {
	const [currentPage, handlePageChange] = React.useState("About");

	const renderNextPage = (currentPage) => {
		switch (currentPage) {
			case "About":
				return <About />;
			case "Portfolio":
				return <Projects />;
			case "Contact":
				return <Contact />;
			case "Resume":
				return <Resume />;
			default:
				return <About />;
		}
	};

	return (
		<div>
			<AppBar position="static" class="bg-slate-700 text-slate-300">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Max McLaughlin
						</Typography>
						<NavBar
							currentPage={currentPage}
							handlePageChange={handlePageChange}
						/>
					</Toolbar>
				</Container>
			</AppBar>
			<main class="bg-slate-400 text-slate-800">
				<div>{renderNextPage(currentPage)}</div>
			</main>
		</div>
	);
};

export default Header;
