import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/plus.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>NoxFeed</h1>
        </div>
        <p className={styles.desc}>
          Explore the World of Entertainment: Dive into the latest gaming
          trends, groove to the hottest music beats, and stay in the game with
          the latest sports updates - all on our immersive blogging platform.
        </p>
        <div className={styles.icons}>
          <a href="https://twitter.com/_kaifsiddique" target="_blank">
            <Image src="/twitt.png" alt="Twitter" width={28} height={28} />
          </a>
          <a href="https://www.instagram.com/kaifali_4/" target="_blank">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />{" "}
          </a>
          <a href="https://www.youtube.com/@noxfreak" target="_blank">
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Games</Link>
          <Link href="/">Music</Link>
          <Link href="/">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://twitter.com/_kaifsiddique">Twitter</Link>
          <Link href="https://www.instagram.com/kaifali_4/">Instagram</Link>
          <Link href="https://www.youtube.com/@noxfreak">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
