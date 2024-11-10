import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className={`${styles.scroll_on_hover} h-screen`}>
      <div className="bg-aside h-full bg-cover"></div>
      <div className="bg-aside h-full bg-cover"></div>
    </aside>
  );
}
