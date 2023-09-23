import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a href="https://twitter.com/_kaifsiddique" target="_blank"><Image src="/twitt.png" alt="Twitter" width={28} height={28} /></a>
        <a href="https://www.instagram.com/kaifali_4/" target="_blank"><Image src="/instagram.png" alt="instagram" width={24} height={24} /> </a>
        <a href="https://www.youtube.com/@noxfreak" target="_blank"><Image src="/youtube.png" alt="youtube" width={24} height={24} /></a>
      </div>
      <div className={styles.logo}>noxfeed</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
