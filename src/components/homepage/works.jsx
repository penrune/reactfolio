import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Current Focus"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
								alt="TypeScript"
								className="work-image"
							/>
							<div className="work-title">UM Delivery</div>
							<div className="work-subtitle">
								TypeScript project
							</div>
							<div className="work-duration">Public repo</div>
						</div>

						<div className="work">
							<img
								src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
								alt="JavaScript"
								className="work-image"
							/>
							<div className="work-title">Algo Olio</div>
							<div className="work-subtitle">
								Algorithm practice
							</div>
							<div className="work-duration">Public repo</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
