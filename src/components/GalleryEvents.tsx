"use client";
import React from "react";
import styles from "./GalleryEvents.module.css";

const events = [
  {
    section: "UPCOMING EVENTS",
    items: [
      {
        title: "AI Art Challenge",
        desc: "Participate in our monthly AI art contest and showcase your creativity.",
        link: "#",
      },
      {
        title: "Gallery Anniversary",
        desc: "Celebrate our 2nd anniversary with exclusive drops and artist talks.",
        link: "#",
      },
      {
        title: "Live Minting Session",
        desc: "Join a live session where artists mint and discuss their latest generative works.",
        link: "#",
      },
    ],
  },
  {
    section: "COMMUNITY",
    items: [
      {
        title: "Collector Q&A",
        desc: "Ask questions and learn from top collectors in a live community call.",
        link: "#",
      },
      {
        title: "Curator's Picks",
        desc: "Discover the weekly selection of artworks handpicked by our curators.",
        link: "#",
      },
      {
        title: "Onboarding Workshop",
        desc: "New to NFTs? Join our onboarding workshop and start your collecting journey.",
        link: "#",
      },
    ],
  },
];

export default function GalleryEvents() {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        {events.map((section) => (
          <div key={section.section} className={styles.eventsColumn}>
            <div className={styles.eventsSectionTitle}>{section.section}</div>
            {section.items.map((item) => (
              <div key={item.title} className={styles.eventsItem}>
                <div className={styles.eventsItemContent}>
                  <div className={styles.eventsItemHeader}>
                    <a href={item.link} className={styles.eventsItemTitle}>
                      {item.title}
                    </a>
                    <span className={styles.eventsItemArrow}>↗</span>
                  </div>
                  <div className={styles.eventsItemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}