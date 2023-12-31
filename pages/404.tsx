import styles from "./errorPage.module.css";
export default function ErrorPage() {
  return (
    <div id={styles.errorPage}>
      <h1>잘못된 경로 입니다. 올바른 경로를 입력 해 주세요 🥰</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
