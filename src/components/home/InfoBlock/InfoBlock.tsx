import styles from "./InfoBlock.module.sass";
import globalStyles from '@/styles/Styles.module.sass'

type InfoBlock = {
  Icon: any;
  title: string;
};

export default function InfoBlock({ Icon, title }: InfoBlock) {
  return (
    <div className={styles.container}>
      <button className={styles.iconContainer}>
        <Icon />
      </button>
      <p className={globalStyles.carbonRegular14}>{title}</p>
    </div>
  );
}
