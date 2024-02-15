import styles from "../commentsCards/CommentsCards.module.css";

interface Props {
  comment: string;
  pic: string;
  name: string;
  position: string;
}

const Card = ({ comment, pic, name, position }: Props) => {
  return (
    <div className={styles.cardsContent}>
      <div className={styles.contentCard}>
        <div className={styles.card}>
          <p>{comment}</p>
        </div>
        <div className={styles.profile}>
          <div className={styles.picture}>
            <img src={pic} />
          </div>
          <div className={styles.text}>
            <h2>{name}</h2>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
