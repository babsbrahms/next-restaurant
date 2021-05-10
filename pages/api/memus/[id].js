// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let memus =  [
	// mc
    {
        _id: "1",
      "price": 3.99,
      "name": "Big Mac",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "2", 
      "price": 4.49,
      "name": "Sausage, Egg & Cheese McGriddles - Meal",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "3",
      "price": 1,
      "name": "Double Cheeseburger",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "4",
      "price": 5,
      "name": "20 Pc. Chicken McNuggets",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "5",
      "price": 0.99,
      "name": "Apple Pie",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "6",
      "price": 2.79,
      "name": "Egg McMuffin",
      "restaurantId": "298194705290625537"
    },
    {
        _id: "7",
      "price": 1.69,
      "name": "French Fries",
      "restaurantId": "298194705290625537"
	},
	

	// subway
	{
        _id: "8",
		"price": 8.95,
		"name": "Big Philly Cheesesteak",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "9",
		"price": 6.75,
		"name": "Italian B.M.T.",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "10",
		"price": 7.75,
		"name": "Steak & Cheese",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "11",
		"price": 7.75,
		"name": "Sweet Onion Chicken Teriyaki",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "12",
		"price": 4.25,
		"name": "Turkey Breast",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "13",
		"price": 4.25,
		"name": "Meatball Marinara",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "14",
		"price": 6.00,
		"name": "Subway Club",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "15",
		"price": 5.50,
		"name": "Egg & Cheese Omelet",
		"restaurantId": "298194270228054535"
	},
	{
        _id: "16",
		"price": 0.65,
		"name": "Cookie",
		"restaurantId": "298194270228054535"
	},
	

	// starbucks
	{
        _id: "17",
		"price": 2.35,
		"name": "Double Chocolate Chunk Brownie",
		"restaurantId": "298194540954649093"
	},
	{
        _id: "18",
		"price": 2.95,
		"name": "Pumpkin Cream Cheese Muffin",
		"restaurantId": "298194540954649093"
	},
	{
        _id: "17",
		"price": 2.95,
		"name": "Coffee Frappuccino",
		"restaurantId": "298194540954649093"
	},
	{
        _id: "19",
		"price": 3.95,
		"name": "Caramel Frappuccino",
		"restaurantId": "298194540954649093"
	},

	{
        _id: "20",
		"price": 4.95,
		"name": "Mocha Frappuccino",
		"restaurantId": "298194540954649093"
	},
	{
        _id: "21",
		"price": 2.55,
		"name": "Iced Coffee",
		"restaurantId": "298194540954649093"
	},


	// pizza hut
	{
        _id: "22",
		"price": 8.99,
		"name": "Wings",
		"restaurantId": "298194999507419655"
	},
	{
        _id: "23",
		"price": 6.25,
		"name": "Personal Pan Pizza with 1 Topping",
		"restaurantId": "298194999507419655"
	},
	{
        _id: "24",
		"price": 12.29,
		"name": "Medium Cheese Pizza ",
		"restaurantId": "298194999507419655"
	},
	{
        _id: "25",
		"price": 14.29,
		"name": "Large Cheese Pizza",
		"restaurantId": "298194999507419655"
	},
	{
        _id: "26",
		"price": 7.99,
		"name": "Chicken Alfredo",
		"restaurantId": "298194999507419655"
	},
	

	// kfc
	{
        _id: "27",
		"price": 8.49,
		"name": "3 Pc. Meal",
		"restaurantId": "298195207782924807"
	},
	{
        _id: "28",
		"price": 3.59,
		"name": "Potato Wedges",
		"restaurantId": "298195207782924807"
	},	
	{
        _id: "29",
		"price": 3.59,
		"name": "Mac & Cheese",
		"restaurantId": "298195207782924807"
	},
	{
        _id: "30",
		"price": 12.99,
		"name": "Chicken Tenders",
		"restaurantId": "298195207782924807"
	},
	{
        _id: "31",
		"price": 36.99,
		"name": "16 Pc. Meal with 4 Large Sides & 8 Biscuits",
		"restaurantId": "298195207782924807"
	},
	{
        _id: "32",
		"price": 20.49,
		"name": "12 Pc. Chicken",
		"restaurantId": "298195207782924807"
	},



	// wendy's
	
	{
        _id: "33",
		"price": 6.99,
		"name": "Gouda Bacon Cheeseburger",
		"restaurantId": "298195370664526343"
	},
	{
        _id: "34",
		"price": 6.69,
		"name": "Son of Baconator",
		"restaurantId": "298195370664526343"
	},
	{
        _id: "35",
		"price": 4.69,
		"name": "Spicy Chicken",
		"restaurantId": "298195370664526343"
	},
	{
        _id: "36",
		"price": 1.39,
		"name": "Double Chocolate Chip Cookie",
		"restaurantId": "298195370664526343"
	},
	{
        _id: "37",
		"price": 2.19,
		"name": "Cheese Fries",
		"restaurantId": "298195370664526343"
	},
	{
        _id: "38",
		"price": 1.89,
		"name": "Jr. Cheeseburger Deluxe",
		"restaurantId": "298195370664526343"
	},
	
]
      
export default  (req, res) => {
    let memu = memus.filter(x => x.restaurantId === req.query.id)
  res.status(200).json({ memus: memu })
}