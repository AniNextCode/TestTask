import Image from "next/image";
import styles from "./page.module.sass";
import globalStyles from "@/styles/Styles.module.sass";
import LearningBlock from "@/components/home/LearningBlock/LearningBlock";
import {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Crown,
  Favorites,
  Fire,
  HighwayCode,
  Mistakes,
  Statistics,
} from "@/assets/HomeSvgs";
import CategoryCard from "@/components/home/CategoryCard/CategoryCard";
import InfoBlock from "@/components/home/InfoBlock/InfoBlock";
export default function Home() {
  return (
    <main>
      <div className={styles.headerContainer}>
        <h3 className={globalStyles.carbonMedium18}>Ray Driving Theory</h3>
        <div className={styles.iconsContainer}>
          <button className={styles.iconContainer}>
            <Crown />
          </button>
          <button className={styles.iconContainer}>
            <Fire />
            <p className={globalStyles.carbonMedium13}>13</p>
          </button>
        </div>
      </div>
      <LearningBlock />
      <div className={styles.categoriesContainer}>
        <CategoryCard title="DVSA Exam" Icon={Category1} />
        <CategoryCard title="Express mode" Icon={Category2} />
        <CategoryCard title="Hazard perception" Icon={Category3} />
        <CategoryCard title="Road signs" Icon={Category4} />
        <CategoryCard title="Multiplayer Learning" Icon={Category5} />
      </div>

      <div className={styles.infoBlocksContainer}>
        <InfoBlock title="Mistakes" Icon={Mistakes} />
        <InfoBlock title="Statistics" Icon={Statistics} />
        <InfoBlock title="Highway Code" Icon={HighwayCode} />
        <InfoBlock title="Favorites" Icon={Favorites} />
      </div>
    </main>
  );
}
