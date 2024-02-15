import styles from "./Main.module.css";
import Started from "../main/started/Started";
import { features } from "../../utils/dataFeatures";
import Card from "../featureCards/FeatureCards";
import Banner from "../main/banner/Banner";
import CardComments from "../commentsCards/CommentsCards";
import { comments } from "../../utils/dataComments";
import Footer from "../footer/Footer";
import EmailBanner from "./emailBanner/EmailBanner";

function Main() {
  return (
    <>
      <div className={styles.content}>
        <Started />
        <div className={styles.cards}>
          {features.map((features) => {
            const { id, icon, title, text } = features;
            return (
              <div key={id}>
                <Card icon={icon} title={title} text={text} />
              </div>
            );
          })}
        </div>
        <Banner />
        <div className={styles.cards}>
          {comments.map((comments) => {
            const { id, comment, pic, name, position } = comments;
            return (
              <div key={id}>
                <CardComments
                  pic={pic}
                  comment={comment}
                  position={position}
                  name={name}
                />
              </div>
            );
          })}
        </div>
        <EmailBanner />
        <Footer />

      </div>
    </>
  );
}

export default Main;
