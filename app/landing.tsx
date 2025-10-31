"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./landing.module.css";

const Landing: NextPage = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/upload");
  }, [router]);

  return (
    <div className={styles.landing}>
      <h1 className={styles.testYourCase}>
        Test your case in front of a real jury tonight
      </h1>
      <div className={styles.landingInner}>
        <div className={styles.rectangleParent}>
          <button
            className={styles.frameChild}
            onClick={onRectangleButtonClick}
          />
          <b className={styles.uploadCase}>Upload Case</b>
        </div>
      </div>
    </div>
  );
};

export default Landing;
