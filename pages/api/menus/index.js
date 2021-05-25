// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let memus =  [
	// mc
    {
      price: 3.99,
      name: "Big Mac",
    },
    {
      price: 4.49,
      name: "Sausage, Egg & Cheese McGriddles - Meal",
    },
    {
      price: 1,
      name: "Double Cheeseburger",
    },
    {
      price: 5,
      name: "20 Pc. Chicken McNuggets",
    },
    {
      price: 0.99,
      name: "Apple Pie",
    },
    {
      price: 2.79,
      name: "Egg McMuffin",
    },
    {
      price: 1.69,
      name: "French Fries",
	},
	

	// subway
	{
		price: 8.95,
		name: "Big Philly Cheesesteak",
	},
	{
		price: 6.75,
		name: "Italian B.M.T.",
	},
	{
		price: 7.75,
		name: "Steak & Cheese",
	},
	{
		price: 7.75,
		name: "Sweet Onion Chicken Teriyaki",
	},
	{
		price: 4.25,
		name: "Turkey Breast",
	},
	{
		price: 4.25,
		name: "Meatball Marinara",
	},
	{
		price: 6.00,
		name: "Subway Club",
	},
	{
		price: 5.50,
		name: "Egg & Cheese Omelet",
	},
	{
		price: 0.65,
		name: "Cookie",
	},
	

	// starbucks
	{
		price: 2.35,
		name: "Double Chocolate Chunk Brownie",
	},
	{
		price: 2.95,
		name: "Pumpkin Cream Cheese Muffin",
	},
	{
		price: 2.95,
		name: "Coffee Frappuccino",
	},
	{
		price: 3.95,
		name: "Caramel Frappuccino",
	},

	{
		price: 4.95,
		name: "Mocha Frappuccino",
	},
	{
		price: 2.55,
		name: "Iced Coffee",
	},


	// pizza hut
	{
		price: 8.99,
		name: "Wings",
	},
	{
		price: 6.25,
		name: "Personal Pan Pizza with 1 Topping",
	},
	{
		price: 12.29,
		name: "Medium Cheese Pizza ",
	},
	{
		price: 14.29,
		name: "Large Cheese Pizza",
	},
	{
		price: 7.99,
		name: "Chicken Alfredo",
	},
	

	// kfc
	{
		price: 8.49,
		name: "3 Pc. Meal",
	},
	{
		price: 3.59,
		name: "Potato Wedges",
	},	
	{
		price: 3.59,
		name: "Mac & Cheese",
	},
	{
		price: 12.99,
		name: "Chicken Tenders",
	},
	{
		price: 36.99,
		name: "16 Pc. Meal with 4 Large Sides & 8 Biscuits",
	},
	{
		price: 20.49,
		name: "12 Pc. Chicken",
	},



	// wendy's
	
	{
		price: 6.99,
		name: "Gouda Bacon Cheeseburger",
	},
	{
		price: 6.69,
		name: "Son of Baconator",
	},
	{
		price: 4.69,
		name: "Spicy Chicken",
	},
	{
		price: 1.39,
		name: "Double Chocolate Chip Cookie",
	},
	{
		price: 2.19,
		name: "Cheese Fries",
	},
	{
		price: 1.89,
		name: "Jr. Cheeseburger Deluxe",
	},
	
]
      
export default memus = (req, res) => {
  res.status(200).json({ memus: memus })
}