import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import NotFound from "@/app/not-found";

const MealDetail = ({ params }) => {
  const { mealsSlug } = params;
  const meal = getMeal(mealsSlug);

  if (!meal) notFound();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} />
        </div>
        <div className={classes.headerText}>
          <h1>Juicy Cheese Burger</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetail;
