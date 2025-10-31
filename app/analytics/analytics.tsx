"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent1 from "../../components/frame-component1";
import { useRouter } from "next/navigation";
import styles from "./analytics.module.css";

const Analytics: NextPage = () => {
  const router = useRouter();

  const onRoundedRectangleClick = useCallback(() => {
    router.push("/download");
  }, [router]);

  return (
    <div className={styles.analytics}>
      <section className={styles.frameParent}>
        <div className={styles.deliberationAnalyticsWrapper}>
          <div className={styles.deliberationAnalytics}>
            Deliberation Analytics
          </div>
        </div>
        <FrameComponent1 />
      </section>
      <div className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <button
            className={styles.roundedRectangle}
            onClick={onRoundedRectangleClick}
          />
          <h3 className={styles.downloadReport}>Download Report</h3>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
