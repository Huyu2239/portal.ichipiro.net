import { useEffect } from "react";
import "../styles/loading.css";
import "../styles/linkcard.css";
import "../styles/index.css";


const links = [
	{
		index: 0,
		icon: "https://ichipol.g.hiroshima-cu.ac.jp/uprx/images/favicon.ico",
		title: "UNIPA スマホ版",
		url: "https://ichipol.g.hiroshima-cu.ac.jp/uprx/MobileShibbolethAuthServlet",
	},
	{
		index: 1,
		icon: "https://ichipol.g.hiroshima-cu.ac.jp/uprx/images/favicon.ico",
		title: "UNIPA PC版",
		url: "https://ichipol.g.hiroshima-cu.ac.jp/uprx/ShibbolethAuthServlet",
	},
	{
		index: 2,
		icon: "https://etext.g.hiroshima-cu.ac.jp/favicon.ico",
		title: "UniText",
		url: "https://app.d-text-service.jp/browser/start?uneidantai_ryakugo=MZ&soshiki_cd=hcity",
	},
	{
		index: 3,
		icon: "https://outlook.office.com/favicon.ico",
		title: "メール",
		url: "https://outlook.office.com/mail/",
	},
	{
		index: 4,
		icon: "https://www.hiroshima-cu.ac.jp/favicon.ico",
		title: "大学公式ウェブサイト",
		url: "https://www.hiroshima-cu.ac.jp/",
	},
	{
		index: 5,
		icon: "https://www.hiroshima-cu.ac.jp/favicon.ico",
		title: "学修の手引",
		url: "https://www.hiroshima-cu.ac.jp/uploads/2022/03/655003d325eec272181262bc44a62d0e-20240331034513692.pdf",
	},
	{
		index: 6,
		icon: "https://www.hiroshima-cu.ac.jp/favicon.ico",
		title: "教育課程",
		url: "https://www.hiroshima-cu.ac.jp/uploads/2022/03/fe9e63aa036d3e706dbab00e4ca51390-2024033103474682.pdf",
	},
	{
		index: 7,
		icon: "https://www.hiroshima-cu.ac.jp/favicon.ico",
		title: "時間割・集中講義日程",
		url: "https://www.hiroshima-cu.ac.jp/campuslife/c00025986/",
	},
];

type LinkCardProps = {
	icon: string;
	title: string;
	url: string;
};

const LinkCard = ({ icon, title, url}: LinkCardProps) => {
	return (
		<div className="linkcard">
			<a href={url} target="_blank">
				<div>
					<img src={icon} className="icon"/>
					<p className="title">{title}</p>
				</div>
			</a>
		</div>
	);
};

const Footer = () => {
	return <footer><small>&copy; 2024 いちぴろ・エクスプローラ</small></footer>;
};

export function IndexPage() {
	useEffect(() => {
		const ichipeerDiv = document.getElementById("ichipeer");
		if (!ichipeerDiv) return;
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://platform.twitter.com/widgets.js";
		script.async = true;
		ichipeerDiv.appendChild(script);

		return () => {
			ichipeerDiv.removeChild(script);
		};
	}, []);
	return (
		<>
			<div id="links">
				{links.map((link) => (
					<LinkCard key={link.index} {...link} />
				))}
			</div>
			<div id="ichipeer">
				<a
					className="twitter-timeline"
					data-lang="ja"
					data-theme="dark"
					data-height="600"
					href="https://twitter.com/HCU_ichipeer?ref_src=twsrc%5Etfw"
				>
					HCU_ichipeerさんのポスト
					<div className="loading" />
				</a>
			</div>
			<Footer />
		</>
	);
}
