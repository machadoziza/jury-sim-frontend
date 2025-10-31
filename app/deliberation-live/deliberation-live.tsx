"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./deliberation-live.module.css";

const DeliberationLive: NextPage = () => {
  const onRectangleButtonClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.deliberationlive}>
      <main className={styles.videostageParent}>
        <div className={styles.videostage} />
        <div className={styles.frameParent}>
          <button className={styles.juror1Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 1</div>
          </button>
          <button className={styles.juror4Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 4</div>
          </button>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.juror2Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 2</div>
          </button>
          <button className={styles.juror5Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 5</div>
          </button>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.juror3Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 3</div>
          </button>
          <button className={styles.juror6Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 6</div>
          </button>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.juror7Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 7</div>
          </button>
          <button className={styles.juror10Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 10</div>
          </button>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.juror8Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 8</div>
          </button>
          <button className={styles.juror11Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 11</div>
          </button>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.juror9Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror1}>Juror 9</div>
          </button>
          <button className={styles.juror12Parent}>
            <div className={styles.juror1} />
            <div className={styles.deliberationliveJuror12}>Juror 12</div>
          </button>
        </div>
      </main>
      <header className={styles.deliberationliveInner}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.frameChild}
            onClick={onRectangleButtonClick}
          />
          <div className={styles.endDeliberation}>End Deliberation</div>
        </div>
      </header>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>00:45:00</h1>
      </div>
    </div>
  );
};

export default DeliberationLive;
