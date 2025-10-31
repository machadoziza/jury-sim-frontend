"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./jury-manifest.module.css";

const JuryManifest: NextPage = () => {
  const router = useRouter();

  const onStartDeliberationClick = useCallback(() => {
    router.push("/deliberation-live");
  }, [router]);

  return (
    <div className={styles.jurymanifest}>
      <div className={styles.yourMatchedJuryWrapper}>
        <h3 className={styles.yourMatchedJury}>Your Matched Jury</h3>
      </div>
      <div className={styles.jurorgridWrapper}>
        <Image
          className={styles.jurorgridIcon}
          loading="lazy"
          width={272}
          height={368}
          sizes="100vw"
          alt=""
          src="/JurorGrid.svg"
        />
      </div>
      <button
        className={styles.startDeliberation}
        onClick={onStartDeliberationClick}
      >
        <div className={styles.roundedRectangle} />
        <div className={styles.jurymanifestStartDeliberation}>
          Start Deliberation
        </div>
      </button>
    </div>
  );
};

export default JuryManifest;
