import React from "react";

import { ArrowDown } from "../../assets/icons/ArrowDown";
import ProfilePic from "../../assets/images/User3.png";

import styles from "./UserProfile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <span className={styles.userName}>Miraj Asraf</span>
        <span className={styles.userAddress}>W.B, India</span>
      </div>
      <img
        src={ProfilePic}
        alt="Miraj Asraf"
        width="38px"
        height="38px"
        className={styles.userImage}
      />
      <ArrowDown />
    </div>
  );
}
