"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import AnalyticsPanel from "../../components/analytics-panel";
import styles from "./download.module.css";

const Download: NextPage = () => {
  const onDownloadIndicatorClick = useCallback(() => {
    window.open("https://figma.com");
  }, []);

  return (
    <div className={styles.download}>
      <AnalyticsPanel />
      <div className={styles.downloadContainerWrapper}>
        <div className={styles.downloadContainer}>
          <button
            className={styles.downloadIndicator}
            onClick={onDownloadIndicatorClick}
          />
          <h3 className={styles.downloadZip}>Download ZIP</h3>
        </div>
      </div>
    </div>
  );
};

export default Download;
