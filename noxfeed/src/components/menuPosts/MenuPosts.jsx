import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Music</span>
          <h3 className={styles.postTitle}>
          Tyler, the Creator's 'IGOR': A Genre-Bending Masterpiece
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Md. Kaif</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Movies
          </span>
          <h3 className={styles.postTitle}>
          Cyberpunk: Edgerunners - A Dazzling Dive into Dystopia
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Md. Kaif</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Sports</span>
          <h3 className={styles.postTitle}>
          UCL 2023-2024 Season Preview: Who Will Claim the Ultimate Glory?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Md. Kaif</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Games
          </span>
          <h3 className={styles.postTitle}>
          Elden Ring: A masterpiece
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Md. Kaif</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
