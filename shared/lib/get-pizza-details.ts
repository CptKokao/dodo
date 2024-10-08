import { Ingredient, Variants } from '@prisma/client';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';

export const getPizzaDetails = (
	type: PizzaType,
	size: PizzaSize,
	items: Variants[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
) => {
	const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
	const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

	return { totalPrice, textDetails };
};
