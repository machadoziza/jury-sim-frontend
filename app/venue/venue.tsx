"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./venue.module.css";

const Venue: NextPage = () => {
  const router = useRouter();

  const onMatchBtnContainerClick = useCallback(() => {
    router.push("/jury-manifest");
  }, [router]);

  return (
    <div className={styles.venue}>
      <div className={styles.frameParent}>
        <div className={styles.pickTheCountyWhereTrialWiWrapper}>
          <div className={styles.pickTheCounty}>
            Pick the county where trial will be held
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.searchCountyOr}>
            Search county or enter FIPS…
          </div>
        </div>
      </div>
      <div className={styles.matchbtnWrapper}>
        <div className={styles.matchbtn} onClick={onMatchBtnContainerClick}>
          <div className={styles.matchbtnChild} />
          <div className={styles.searchCountyOr}>Match Jurors</div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
