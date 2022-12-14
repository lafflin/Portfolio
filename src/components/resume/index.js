import * as React from "react";
// add more skills over time. If I do end up making the blog I think I should link it here
const Resume = () => {
	return (
		<div className="text-center">
			Skills-
			<ul className="grid grid-cols-3 grid-flow-row gap-3">
				<li>Bootstrap</li>
				<li>Tailwind</li>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>Handlebars</li>
				<li>MySql</li>
				<li>MongoDB</li>
				<li>React</li>
				<li>jQuery</li>
			</ul>
			<br />
			<p>
				<a href="https://docs.google.com/document/d/1i2by2RBn6ZJY3_G9SYKfpFNx8Tu8kSt07P-AE6GiMgI/edit?usp=sharing">
					Click here to see my resume!
				</a>
			</p>
		</div>
	);
};

export default Resume;
