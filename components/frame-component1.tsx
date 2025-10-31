import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.heatmapboxParent, className].join(" ")}>
      <div className={styles.heatmapbox} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.frameChild2} />
      </div>
    </div>
  );
};

export default FrameComponent1;
