import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gilsonDias92.png" alt="profile picture"/>
      <div>
        <strong>
          Gilson Dias
        </strong>
        <p>
          <img src="icons/level.svg" className={styles.LevelIconImg} alt="level icon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
