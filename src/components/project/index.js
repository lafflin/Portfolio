import * as React from "react";
import techBlog from "../assets/techblog.jpg";
import workDayScheduler from "../assets/workDayScheduler.png";
import weatherAPI from "../assets/weatherAPI.png";
import expressNoteTaker from "../assets/expressNoteTaker.png";
import rpsGame from "../assets/rpsGame.png";

// want to edit the styling eventually so that the cards are arranged in a 2x3
// also want to slowly replace a lot of these projects with ones that are better/ more polished
// add screenshot for get it done(waiting for finishing touches)

const Projects = () => {
	return (
		<div class="flex flex-wrap justify-evenly">
			<div>
				<div class="border border-solid border-slate-900 rounded">
					<img src={techBlog} alt="Tech Blog" />
					<p>MVC Tech Blog</p>
					<p>Tech Used: MySql, Node.js, Express.js, Heroku</p>
					<p>
						<a href="https://github.com/lafflin/14-Tech-Blog">Repository</a>
					</p>
					<p>
						<a href="https://web-dev-blog-hw14.herokuapp.com/">Deployment</a>
					</p>
				</div>
				<br />
				<div class="border border-solid border-slate-900 rounded">
					<img src={workDayScheduler} alt="Work Day Scheduler" />
					<p>Work Day Scheduler</p>
					<p>Tech Used: jQuery </p>
					<p>
						<a href="https://github.com/lafflin/05-Workday-Schedule">
							Repository
						</a>
					</p>
					<p>
						<a href="https://lafflin.github.io/05-Workday-Schedule/">
							Deployment
						</a>
					</p>
				</div>
				<br />
				<div class="border border-solid border-slate-900 rounded">
					<img src={weatherAPI} alt="Weather API" />
					<p>OpenWeather API App</p>
					<p>Tech Used: OpenWeather API, jQuery</p>
					<p>
						<a href="https://github.com/lafflin/06-Weather-API">Repository</a>
					</p>
					<p>
						<a href="https://lafflin.github.io/06-Weather-API/">Deployment</a>
					</p>
				</div>
				<br />
				<div class="border border-solid border-slate-900 rounded">
					<img src={expressNoteTaker} alt="Express Note Taker" />
					<p>Express Note Taker</p>
					<p>Tech Used: Express.js, Node.js, Heroku</p>
					<p>
						<a href="https://github.com/lafflin/11Express-Note-Taker">
							Repository
						</a>
					</p>
					<p>
						<a href="https://express-note-taker-hw11.herokuapp.com">
							Deployment
						</a>
					</p>
				</div>
				<br />
				<div class="border border-solid border-slate-900 rounded">
					<img src={rpsGame} alt="Rock Paper Scissors App" />
					<p>Rock Paper Scissors App</p>
					<p>Tech Used: MySql, </p>
					<p>
						<a href="https://github.com/austibb/game-site-app">Repository</a>
					</p>
					<p>
						<a href="https://rockpaperscissors-project.herokuapp.com/">
							Deployment
						</a>
					</p>
				</div>
				<br />
				<div class="border border-solid border-slate-900 rounded">
					<img src="" alt="Get It Done!" />
					<p>Get It Done!</p>
					<p>Tech Used: MERN stack, JWT, Normalize.css</p>
					<p>
						<a href="https://github.com/anuvytla/GetItDone">Repository</a>
					</p>
					<p>
						<a href="https://get-it-done-kanban-pm.herokuapp.com/">
							Deployment
						</a>
					</p>
				</div>
				<br />
			</div>
		</div>
	);
};

export default Projects;
