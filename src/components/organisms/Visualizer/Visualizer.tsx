import React, { FC } from "react";
import "../../../assets/js/visualizer";
import styles from "./Visualizer.module.scss";

interface VisualizerProps {}

const Visualizer: FC<VisualizerProps> = () => (
    <div>
        <canvas className={styles.webgl}></canvas>
    </div>
);

export default Visualizer;
