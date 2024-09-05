"use client";
import { ArrowRight, GraduationCap } from "@/assets/HomeSvgs";
import styles from "./LearningBlock.module.sass";
import globalStyles from "@/styles/Styles.module.sass";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useRouter } from "next/navigation";
import useTestStore from "@/store/useTestStore";

export default function LearningBlock() {
  const { tests, getEnabledCount } = useTestStore((state) => ({
    tests: state.tests,
    getEnabledCount: state.getEnabledCount,
  }));

  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.learningBlock}
        onClick={() => router.push("/learning")}
      >
        <div className={styles.learningBlockContent}>
          <GraduationCap />
          <div>
            <h4 className={globalStyles.carbonSemibold20}>Learning</h4>
            <p className={globalStyles.metalRegular14}>Category B</p>
          </div>
        </div>
        <ArrowRight />
      </button>
      <div className={styles.progressBlock}>
        <p className={globalStyles.carbonRegular14}>
          {getEnabledCount()} questions out of {tests.length} passed
        </p>
        <ProgressBar
          totalQuestions={tests.length}
          completedQuestions={getEnabledCount()}
        />
      </div>
    </div>
  );
}
