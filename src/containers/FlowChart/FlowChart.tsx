import React from "react";
import { Link } from "react-router-dom";
import flowchart from "./images/flowchart.svg";
import styles from "./FlowChart.module.scss";

const FlowChart: React.FC = () => {
	return (
		<div className={styles["flowchart-wrapper"]}>
			<div className={styles["flowchart-content"]}>
				<img
					src={flowchart}
					className={styles["flowchart-img"]}
					alt="flow chart"
				/>
				<p>
					<code>What are you waiting for?</code>
				</p>
				<Link to="/">Back</Link>
			</div>
		</div>
	);
};

export { FlowChart };
