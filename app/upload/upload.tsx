"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./upload.module.css";

const Upload: NextPage = () => {
  const router = useRouter();

  const onUploadContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.upload} onClick={onUploadContainerClick}>
      <div className={styles.dragDropComplaintsPhotosWrapper}>
        <h3
          className={styles.dragDrop}
        >{`Drag & drop complaints, photos, videos`}</h3>
      </div>
      <section className={styles.percentTextParent}>
        <div className={styles.percentText}>0%</div>
        <div className={styles.progressBar}>
          <div className={styles.dropFilesHere}>Drop files here</div>
          <div className={styles.progressArea} />
          <div className={styles.progressHandle}>
            <label className={styles.label} htmlFor="file-2:3435" />
            <input className={styles.input} type="file" id="file-2:3435" />
          </div>
        </div>
      </section>
      <div className={styles.continuebtn} onClick={onUploadContainerClick}>
        <div className={styles.continuebtnChild} />
        <div className={styles.continue}>Continue</div>
      </div>
    </div>
  );
};

export default Upload;
