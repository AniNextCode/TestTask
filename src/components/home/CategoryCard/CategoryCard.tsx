import styles from "./CategoryCard.module.sass";

type CategoryCard = {
  Icon: any;
  title: string;
};

export default function CategoryCard({ Icon, title }: CategoryCard) {
  return (
    <div className={styles.container}>
      <Icon />
      {title}
    </div>
  );
}
