import styles from "./../css/Main.module.css";
import Advertisement from "./Advertisement";
import SubContent from "./SubContent";

const Main = () => {
    return <div className={styles.main}>
        <SubContent></SubContent>
        <SubContent></SubContent>
        <SubContent></SubContent>
        <Advertisement></Advertisement>
  </div>
};

export default Main;
