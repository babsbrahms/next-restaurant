// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let menus =  [
	// mcdonald's
    {
		_id: "1",
		
      "price": 3.99,
      "name": "Big Mac",
      "restaurant": "mcdonald's"
    },
    {
        _id: "2", 
      "price": 4.49,
      "name": "Sausage, Egg & Cheese McGriddles - Meal",
      "restaurant": "mcdonald's"
    },
    {
        _id: "3",
      "price": 1,
      "name": "Double Cheeseburger",
      "restaurant": "mcdonald's"
    },
    {
        _id: "4",
      "price": 5,
      "name": "20 Pc. Chicken McNuggets",
      "restaurant": "mcdonald's"
    },
    {
        _id: "5",
      "price": 0.99,
      "name": "Apple Pie",
      "restaurant": "mcdonald's"
    },
    {
        _id: "6",
      "price": 2.79,
      "name": "Egg McMuffin",
      "restaurant": "mcdonald's"
    },
    {
        _id: "7",
      "price": 1.69,
      "name": "French Fries",
      "restaurant": "mcdonald's"
	},
	

	// subway
	{
        _id: "8",
		"price": 8.95,
		"name": "Big Philly Cheesesteak",
		"restaurant": "subway"
	},
	{
        _id: "9",
		"price": 6.75,
		"name": "Italian B.M.T.",
		"restaurant": "subway"
	},
	{
        _id: "10",
		"price": 7.75,
		"name": "Steak & Cheese",
		"restaurant": "subway"
	},
	{
        _id: "11",
		"price": 7.75,
		"name": "Sweet Onion Chicken Teriyaki",
		"restaurant": "subway"
	},
	{
        _id: "12",
		"price": 4.25,
		"name": "Turkey Breast",
		"restaurant": "subway"
	},
	{
        _id: "13",
		"price": 4.25,
		"name": "Meatball Marinara",
		"restaurant": "subway"
	},
	{
        _id: "14",
		"price": 6.00,
		"name": "Subway Club",
		"restaurant": "subway"
	},
	{
        _id: "15",
		"price": 5.50,
		"name": "Egg & Cheese Omelet",
		"restaurant": "subway"
	},
	{
        _id: "16",
		"price": 0.65,
		"name": "Cookie",
		"restaurant": "subway"
	},
	

	// starbucks
	{
        _id: "17",
		"price": 2.35,
		"name": "Double Chocolate Chunk Brownie",
		"restaurant": "starbucks"
	},
	{
        _id: "18",
		"price": 2.95,
		"name": "Pumpkin Cream Cheese Muffin",
		"restaurant": "starbucks"
	},
	{
        _id: "17",
		"price": 2.95,
		"name": "Coffee Frappuccino",
		"restaurant": "starbucks"
	},
	{
        _id: "19",
		"price": 3.95,
		"name": "Caramel Frappuccino",
		"restaurant": "starbucks"
	},

	{
        _id: "20",
		"price": 4.95,
		"name": "Mocha Frappuccino",
		"restaurant": "starbucks"
	},
	{
        _id: "21",
		"price": 2.55,
		"name": "Iced Coffee",
		"restaurant": "starbucks"
	},


	// pizza hut
	{
        _id: "22",
		"price": 8.99,
		"name": "Wings",
		"restaurant": "pizza hut"
	},
	{
        _id: "23",
		"price": 6.25,
		"name": "Personal Pan Pizza with 1 Topping",
		"restaurant": "pizza hut"
	},
	{
        _id: "24",
		"price": 12.29,
		"name": "Medium Cheese Pizza ",
		"restaurant": "pizza hut"
	},
	{
        _id: "25",
		"price": 14.29,
		"name": "Large Cheese Pizza",
		"restaurant": "pizza hut"
	},
	{
        _id: "26",
		"price": 7.99,
		"name": "Chicken Alfredo",
		"restaurant": "pizza hut"
	},
	

	// kfc
	{
        _id: "27",
		"price": 8.49,
		"name": "3 Pc. Meal",
		"restaurant": "kfc"
	},
	{
        _id: "28",
		"price": 3.59,
		"name": "Potato Wedges",
		"restaurant": "kfc"
	},	
	{
        _id: "29",
		"price": 3.59,
		"name": "Mac & Cheese",
		"restaurant": "kfc"
	},
	{
        _id: "30",
		"price": 12.99,
		"name": "Chicken Tenders",
		"restaurant": "kfc"
	},
	{
        _id: "31",
		"price": 36.99,
		"name": "16 Pc. Meal with 4 Large Sides & 8 Biscuits",
		"restaurant": "kfc"
	},
	{
        _id: "32",
		"price": 20.49,
		"name": "12 Pc. Chicken",
		"restaurant": "kfc"
	},



	// wendy's
	
	{
        _id: "33",
		"price": 6.99,
		"name": "Gouda Bacon Cheeseburger",
		"restaurant": "wendy's"
	},
	{
        _id: "34",
		"price": 6.69,
		"name": "Son of Baconator",
		"restaurant": "wendy's"
	},
	{
        _id: "35",
		"price": 4.69,
		"name": "Spicy Chicken",
		"restaurant": "wendy's"
	},
	{
        _id: "36",
		"price": 1.39,
		"name": "Double Chocolate Chip Cookie",
		"restaurant": "wendy's"
	},
	{
        _id: "37",
		"price": 2.19,
		"name": "Cheese Fries",
		"restaurant": "wendy's"
	},
	{
        _id: "38",
		"price": 1.89,
		"name": "Jr. Cheeseburger Deluxe",
		"restaurant": "wendy's"
	},
	
]
      
export default  (req, res) => {
    let menu = menus.filter(x => x.restaurant === req.query.name.toLowerCase())
  res.status(200).json({ menus: menu })
}