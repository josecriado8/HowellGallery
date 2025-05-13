import React from "react";
import styles from "./GalleryInfo.module.css";

export default function GalleryInfo() {
  return (
    <div className={`${styles.infoSection} infoSection`}>
      <div className={styles.infoContainer}>
        <span className={`${styles.infoTitle} infoTitle`}>
          Create, collect, and enjoy the best pieces of art
        </span>
      </div>
    </div>
  );
}