import clsx from "clsx";
import * as React from "react";
import { reviews } from "../reviews";
import styles from "./Reviews.module.scss";

interface IReviewsProps {}

export const Reviews: React.FC<IReviewsProps> = (props) => {
  return (
    <section className={"container"}>
      <h4 className={styles.title}>Testimonials</h4>
      <div className={clsx(styles.reviews)}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div>
              <Rating rating={review.rating} />
              <div className={styles.bio}>
                <img src={review.img} alt={review.name} />
                <div>{review.name}</div>
              </div>
            </div>
            <div>{review.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <span className={clsx({ [styles.yellow]: index + 1 < rating })}>
            ★
          </span>
        ))}
    </div>
  );
};
