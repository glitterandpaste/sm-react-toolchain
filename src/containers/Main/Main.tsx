import React from "react";
import { Link } from "react-router-dom";
import shapes from "./images/shapes.svg";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
	return (
		<div className={styles["main-wrapper"]}>
			<div className={styles["main-content"]}>
				<img src={shapes} className={styles["main-img"]} alt="flow chart" />
				<p>
					<code>Make something beautiful.</code>
				</p>
				<Link to="/flowchart">Next</Link>
			</div>
		</div>
	);
};

export { Main };
