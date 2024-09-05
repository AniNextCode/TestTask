'use client'
import {
  HomeIcon,
  ProfileIcon,
  RankingIcon,
  RouteIcon,
} from "@/assets/MenuSvgs";
import styles from "./Menu.module.sass";
import globalStyles from "@/styles/Styles.module.sass";
import { usePathname } from "next/navigation";
const menuItems = [
  { path: "/", title: "Home", Icon: HomeIcon, ActiveIcon: HomeIcon },
  {
    path: "/your-plan",
    title: "Your plan",
    Icon: RouteIcon,
    ActiveIcon: RouteIcon,
  },
  {
    path: "/leaderboard",
    title: "Leaderboard",
    Icon: RankingIcon,
    ActiveIcon: RankingIcon,
  },
  {
    path: "/profile",
    title: "Profile",
    Icon: ProfileIcon,
    ActiveIcon: ProfileIcon,
  },
];

export default function Menu() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className={styles.container}>
      {menuItems.map((item, i) => (
        <button className={styles.menuItem} key={i}>
          {pathname == item.path ? item.ActiveIcon() : item.Icon()}
          <p className={`${globalStyles.metalMedium12} ${pathname == item.path ? styles.activeItem : ''}`}>
            {item.title}
          </p>
        </button>
      ))}
    </div>
  );
}
