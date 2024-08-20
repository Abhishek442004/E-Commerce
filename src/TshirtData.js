import image1 from "./assets/tshirt/TBlack_front.png";
import image2 from "./assets/tshirt/WavesT_front.png";
import image3 from "./assets/tshirt/ExplicitT_front.png";
import image4 from "./assets/tshirt/ThunderT_front.png";
import image5 from "./assets/tshirt/TView.png";
const TshirtData = [
    {
        id: 1,
        name: "T-shirt Black",
        discounted_price: 15.99,
        original_price: 20.99,
        image: image1,
        description: "This classic t-shirt features a black color.",
        discount: 25,
    },
    {
        id: 2,
        name: "T-shirt Blue",
        discounted_price: 17.99,
        original_price: 22.99,
        image: image2,
        description: "This stylish t-shirt features a blue color.",
        discount: 30,
    },
    {
        id: 3,
        name: "T-shirt Green",
        discounted_price: 19.99,
        original_price: 24.99,
        image: image3,
        description: "This versatile t-shirt features a green color.",
        discount: 20,
    },
    {
        id: 4,
        name: "T-shirt Red",
        discounted_price: 21.99,
        original_price: 26.99,
        image: image4,
        description: "This elegant t-shirt features a red color.",
        discount: 15,
    },
    {
        id: 5,
        name: "T-shirt Yellow",
        discounted_price: 23.99,
        original_price: 28.99,
        image: image5,
        description: "This stylish t-shirt features a yellow color.",
        discount: 10,
    }
];

export default TshirtData;