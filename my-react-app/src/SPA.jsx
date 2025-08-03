import React, { useState } from "react";
import './SPA.css';

const Header = () => <header> MY SPA React App </header>

const NavBar = ({ setPage, currentPage }) => (
	<nav>
		<button className = {currentPage === "home" ? "active" : ""} onClick = {() => setPage("home")}>
			Home
		</button>
		<button className={currentPage === "about" ? "active" : ""} onClick={() => setPage("about")}>
			About
		</button>
		<button className={currentPage === "contact" ? "active" : ""} onClick={() => setPage("contact")}>
			Contact
		</button>
	</nav>
);

const Home = () => (
	<main>
		<h2> Welcome to the Home Page </h2>
		<p> This is a responsive single page application using React. </p>
	</main>
);

const About = () => (
	<main>
		<h2> About Us </h2>
		<p> We build sleek and modern SPAs using React and CSS. </p>
	</main>
);

const Contact = () => (
	<main>
		<h2> Contact Us </h2>
		<p> email us at support@spaagents.com </p>
	</main>
);

const Body = ({ currentPage }) => {
	switch (currentPage) {
		case "about":
			return <About />;
		case "contact":
			return <Contact />;
		default:
			return <Home />;
	}
};

export default function SPA() {
	const [page, setPage] = useState("home");

	return (
		<div>
			<Header />
			<NavBar setPage = {setPage} currentPage = {page} />
			<Body currentPage = {page} />
		</div>
	);
}