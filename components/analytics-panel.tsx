import type { NextPage } from "next";
import styles from "./analytics-panel.module.css";

export type AnalyticsPanelType = {
  className?: string;
};

const AnalyticsPanel: NextPage<AnalyticsPanelType> = ({ className = "" }) => {
  return (
    <section className={[styles.analyticsPanel, className].join(" ")}>
      <div className={styles.heatmapbox} />
      <div className={styles.parent}>
        <label className={styles.label} htmlFor="file-loco-0007-s8a-4:315">
          <div className={styles.dataContainer}>
            <div className={styles.dataPoint} />
            <h1 className={styles.zip}>ZIP</h1>
          </div>
        </label>
        <input
          className={styles.input}
          type="file"
          id="file-loco-0007-s8a-4:315"
        />
      </div>
      <div className={styles.reportDataParent}>
        <div className={styles.reportData}>
          <div className={styles.reportAbc123pdf}>delib_abc123.mp4</div>
        </div>
        <div className={styles.analyticsPanelReportData}>
          <div className={styles.reportAbc123pdf}>report_abc123.pdf</div>
        </div>
        <div className={styles.reportAbc123pdf}>analytics_abc123.json</div>
      </div>
    </section>
  );
};

export default AnalyticsPanel;
