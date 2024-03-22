import React, { useState } from "react";
import { useMealsListContext } from "../providers/MealsProvider";

const todaysMeals = [
  { name: "Baked Beans", calories: 200, id: 12345 },
  {
    name: "soup",
    calories: 80,
    id: 23456,
  },
  {
    name: "grilled veggies",
    calories: 100,
    id: 34567,
  },
];
const [meals, setMeals] = useState(todaysMeals);

const MealsList = () => {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => {
        <h2 key={index}>{meal}</h2>;
      })}
    </div>
  );
};

export default MealsList;
