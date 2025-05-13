import React from "react";
import styles from "./ArtworkModal.module.css";

export default function ArtworkModal({ artwork, onClose }: { artwork: any; onClose: () => void }) {
  if (!artwork) return null;
  return (
    <div className={styles.artworkModalOverlay} onClick={onClose}>
      <div className={styles.card} onClick={e => e.stopPropagation()}>
        <button className={styles.artworkModalClose} onClick={onClose}>
          ×
        </button>
        <div className={styles.cardCategory}>{artwork.category}</div>
        <div className={styles.cardImageWrapper}>
          <img
            src={artwork.img}
            alt={artwork.title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{artwork.title}</div>
          <div className={styles.cardAuthor}>
            by <span style={{ fontWeight: 500 }}>{artwork.author}</span>
          </div>
          <div className={styles.cardPrice}>{artwork.price}</div>
        </div>
      </div>
    </div>
  );
}