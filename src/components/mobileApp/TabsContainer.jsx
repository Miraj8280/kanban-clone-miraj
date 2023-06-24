import { ArrowDown } from "../../assets/icons/ArrowDown";
import { Filter } from "../../assets/icons/Filter";
import { Calendar } from "../../assets/icons/Calendar";
import { Profile } from "../../assets/icons/Profile";
import { Menu } from "../../assets/icons/Menu";
import { Pause } from "../../assets/icons/Pause";
import Tab from "../ui/Tab";

import styles from "./TabsContainer.module.css";

export default function TabsContainer() {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.left}>
        <span className={styles.filter}>
          <Tab>
            <Filter />
            <span>Filter</span>
            <ArrowDown />
          </Tab>
        </span>
        <span className={styles.calendar}>
          <Tab>
            <Calendar />
            <span>Today</span>
            <ArrowDown />
          </Tab>
        </span>
        <span className={styles.shareTab}>
          <Tab>
            <Profile />
            <span>Share</span>
          </Tab>
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.share}>  
          <Tab>
            <Profile />
            <span>Share</span>
          </Tab>
        </span>
        <div className={styles.separator}></div>
        <span className={styles.pause}><Pause /></span>
        <span className={styles.menu}><Menu /></span>
      </div>
    </div>
  );
}
