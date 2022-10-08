import * as React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
	return (
		<div>
			<p> Hello, my name is Max McLaughlin!</p>
			<br />
			<p>
				Full stack web developer. Recently received a certificate from UC
				Berkeley Extension. Possess skills in JavaScript, Node.js, MongoDB, and
				much more. Strengths in teamwork, time management, and problem solving.
				In projects, I aim to break up the project into smaller tasks, with the
				goal of being more time efficient. A good example of this would be a
				recent project, where, using Express.js routing, Socket.io, and SQL we
				built an online rock-paper-scissors app to compete against people on a
				leaderboard. Had we had a full group, this task would have been easy,
				but with two people in our group, we were forced to be highly
				time-efficient in order to roll out a finished product on time.
				All-in-all, I am eager to be able to demonstrate my newly learned skills
				alongside fellow developers to deliver well-polished web products.
			</p>
			<br />
			<img src={profile} alt="profile" />
		</div>
	);
};
// would like to include more info n this page (maybe another paragraph) as well as more pictures.
export default About;
