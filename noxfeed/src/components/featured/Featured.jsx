import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your portal to the world of entertainment.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featured.webp" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Valorant Franchising Changes and Roster Shakeup: What is Happening in
            VCT 2024?
          </h1>
          <p className={styles.postDesc}>
            As the VCT 2024 transfer window unfolds, it promises to be a period
            of uncertainty and excitement for Valorant fans worldwide. The
            esports landscape is evolving rapidly, and it remains to be seen how
            these roster changes will shape the competitive scene in the
            upcoming season.
          </p>
          <a href="/posts/valorant-franchising-changes-and-roster-shakeup-whats-happening-in-vct-2024">
          <button className={styles.button}>Read More</button></a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
