"use client";
import { BackArrow } from "@/assets/LearningSvgs";
import globalStyles from "@/styles/Styles.module.sass";
import { useRouter } from "next/navigation";
import styles from "./Learning.module.sass";
import TestItem from "@/components/learning/testItem/TestItem";
import useTestStore from "@/store/useTestStore";

export default function page() {
  const router = useRouter();
  const { tests } = useTestStore((state) => ({
    tests: state.tests,
  }));

  return (
    <div className={styles.container}>
      <div className={globalStyles.flexRow} style={{ gap: 16 }}>
        <button onClick={() => router.back()}>
          <BackArrow />
        </button>
        <p className={globalStyles.carbonMedium18}>Learning</p>
      </div>
      <div className={styles.titleTests}>Tests</div>
      <div className={styles.testsContainer}>
        {tests.map((item, i) => (
          <TestItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
