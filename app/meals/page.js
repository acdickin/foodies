import classes from './page.module.css'
import Link from "next/link"
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All Meals',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function MealsPage() {
  async function  Meals(){
    const meals = await getMeals()
    return <MealsGrid meals={meals}/>
  }

  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created <span className={classes.highlight}> by you</span></h1>
      <p>Choose your favorite recipe and cook it</p>
      <p className={classes.cta}>
        <Link href="/meals/share"> 
          share your favorite recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching meals ...</p>}>
        <Meals/>
      </Suspense>
    </main>
    </>
  );
}
