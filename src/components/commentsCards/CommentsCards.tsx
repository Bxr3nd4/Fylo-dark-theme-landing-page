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
      <div className={styles.card}>
        <p>{comment}</p>
      </div>
      <div className={styles.profile}>
        <img src={pic} />
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
