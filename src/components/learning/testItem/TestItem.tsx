import { CheckCircle } from "@/assets/LearningSvgs";
import styles from "./TestItem.module.sass";
import useTestStore, { Test } from "@/store/useTestStore";

export default function TestItem({ item }: { item: Test }) {
  const { toggleTest } = useTestStore((state) => ({
    toggleTest: state.toggleTest,
  }));

  return (
    <button className={styles.container} onClick={() => toggleTest(item.id)}>
      {item.name}
      {item.enabled && <CheckCircle />}
    </button>
  );
}
