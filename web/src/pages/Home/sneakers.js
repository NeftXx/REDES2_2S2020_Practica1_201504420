const getImage = (image) =>
  `${process.env.PUBLIC_URL}/assets/img/${image}.webp`;

const sneakers = [
  {
    id: 1,
    image: getImage("01"),
    type: "Air Jordan 1 Mid",
    name: "Chicago 2020",
    price: "$185.00",
  },
  {
    id: 2,
    image: getImage("02"),
    type: "Yeezy Boost 350 V2",
    name: "Asriel/Carbon",
    price: "$315.00",
  },
  {
    id: 3,
    image: getImage("03"),
    type: "Air Jordan 1 MID SE",
    name: "Game Royal Black Toe",
    price: "$145.00",
  },
  {
    id: 4,
    image: getImage("04"),
    type: "Yeezy Boost 350 V2",
    name: "Zyon",
    price: "$305.00",
  },
  {
    id: 5,
    image: getImage("05"),
    type: "Yeezy Boost 350 V2",
    name: "Israfil",
    price: "$309.00",
  },
  {
    id: 6,
    image: getImage("06"),
    type: "Yeezy Boost 350 V2",
    name: "Natural",
    price: "$340.00",
  },
  {
    id: 7,
    image: getImage("07"),
    type: "Air Jordan 1 Retro High OG",
    name: "Dark Mocha",
    price: "$455.00",
  },
  {
    id: 8,
    image: getImage("08"),
    type: "Air Jordan 12 Retro",
    name: "Dark Concord",
    price: "$465.00",
  },
  {
    id: 9,
    image: getImage("09"),
    type: "Air Jordan 1 Retro High OG WMNS",
    name: "Lucky Green",
    price: "$295.00",
  },
];

export default sneakers;
