import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=games"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Games
      </Link>
      <Link
        href="/blog?cat=sports"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        Sports
      </Link>
      <Link
        href="/blog?cat=music"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        Music
      </Link>
      <Link
        href="/blog?cat=movies"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Movies
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
