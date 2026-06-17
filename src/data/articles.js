import React from "react";

function article_1() {
	return {
		date: "18 June 2026",
		title: "Turning a template into a real portfolio",
		description:
			"The first useful step for this site was replacing placeholder content with real GitHub projects and links.",
		keywords: ["penrune", "portfolio", "Reactfolio", "GitHub"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						This portfolio started as a clean React template. The
						most important adjustment was making it honest: replacing
						sample names, filler project cards, and generic SEO with
						the public work that exists under the penrune GitHub
						account.
					</div>
					<div className="paragraph">
						For now, the project list focuses on the strongest public
						signals: UM Delivery, Algo Olio, and this portfolio repo.
						As more repositories gain demos, writeups, and clearer
						READMEs, this page can keep evolving into a sharper
						record of the work.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
