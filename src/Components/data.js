import Console from "../assets/data/console.png";
import A53 from "../assets/data/a53.png";
import Headset from "../assets/data/headset.png";
import Hisense from "../assets/data/hisense.png";
import Hp from "../assets/data/hp.png";
import Probook from "../assets/data/probook.png";
import Ps5 from "../assets/data/ps5.png";
import Samsung from "../assets/data/samsung.png";
import TV from "../assets/data/TV.png";
import side from "../assets/Pinfo/side.png";
import back from "../assets/Pinfo/back.png";
import front from "../assets/Pinfo/front.png";
import allside from "../assets/Pinfo/allside.png";
import flip from "../assets/Pinfo/flip.png";
import view1 from "../assets/recentview/view1.png";
import view2 from "../assets/recentview/view2.png";
import view3 from "../assets/recentview/view3.png";
import view4 from "../assets/recentview/view4.png";
import view5 from "../assets/recentview/view5.png";

export const Products = [
  {
    id: 1,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB",
    price: "50,000",
    location: "Fct abuja",
    image: A53,
    isSaved: true,
  },
  {
    id: 2,
    title: "Samsonic 32'' Inch Smart Android TV With Netflix,Youtube,",
    price: "75,000",
    location: "kaduna",
    image: TV,
    isSaved: false,
  },
  {
    id: 3,
    title: "Hp ProBook 11 Inches X360 INTEL PENTIUM 128GB SSD- 4GB RAM",
    price: "65,000",
    location: "kaduna",
    image: Hp,
    isSaved: true,
  },
  {
    id: 4,
    title: "Hisense 40” Smart Frameless TV+ Netflix,Youtube APP",
    price: "80,000",
    location: "fct abuja",
    image: Hisense,
    isSaved: false,
  },
  {
    id: 5,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...",
    price: "70,000",
    location: "kaduna",
    image: Samsung,
    isSaved: false,
  },
  {
    id: 6,
    title: "Sony PlayStation 5 (PS5) Console Standard Edition",
    price: "290.0000",
    location: "kaduna",
    image: Ps5,
    isSaved: false,
  },
  {
    id: 7,
    title: "Lenovo Ideapad Intel Celeron 1TB HDD 4GB RAM Windows 10",
    price: "90,000",
    location: "fct abuja",
    image: Probook,
    isSaved: true,
  },
  {
    id: 8,
    title: "Cat Ear 5.0 Wireless Bluetooth Stereo OverEar FoldableHeadset",
    price: "9,000",
    location: "kaduna",
    image: Headset,
    isSaved: false,
  },
  {
    id: 9,
    title:
      "Sony Computer Entertainment Playstation 4 Console 500gb + Extra Controller",
    price: "100,000",
    location: "kaduna",
    image: Console,
    isSaved: false,
  },
];

export const SavedProducts = [
  {
    id: 1,
    title: "Cat Ear 5.0 Wireless Bluetooth Stereo OverEar FoldableHeadset",
    price: "9,000",
    location: "kaduna",
    image: Headset,
    isSaved: true,
  },
  {
    id: 2,
    title: "Lenovo Ideapad Intel Celeron 1TB HDD 4GB RAM Windows 10",
    price: "90,000",
    location: "fct abuja",
    image: Probook,
    isSaved: true,
  },
  {
    id: 3,
    title:
      "Sony Computer Entertainment Playstation 4 Console 500gb + Extra Controller",
    price: "100,000",
    location: "kaduna",
    image: Console,
    isSaved: true,
  },
  {
    id: 4,
    title: "Hp ProBook 11 Inches X360 INTEL PENTIUM 128GB SSD- 4GB RAM",
    price: "65,000",
    location: "kaduna",
    image: Hp,
    isSaved: true,
  },
  {
    id: 5,
    title: "Hisense 40” Smart Frameless TV+ Netflix,Youtube APP",
    price: "80,000",
    location: "fct abuja",
    image: Hisense,
    isSaved: true,
  },
  {
    id: 6,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...",
    price: "70,000",
    location: "kaduna",
    image: Samsung,
    isSaved: true,
  },
  {
    id: 7,
    title: "Sony PlayStation 5 (PS5) Console Standard Edition",
    price: "290.0000",
    location: "kaduna",
    image: Ps5,
    isSaved: true,
  },

  {
    id: 8,
    title: "Samsonic 32'' Inch Smart Android TV With Netflix,Youtube,",
    price: "75,000",
    location: "kaduna",
    image: TV,
    isSaved: true,
  },
];
export const transaction = [
  {
    id: 1,
    title: "Cat Bluetooth Headset",
    trackno: "54724545",
    date: "28/08/2021",
    amount: "100,000",
    status: true,
    image: Headset,
  },
  {
    id: 2,
    title: "Sony Playstation 4",
    trackno: "54724545",
    date: "28/08/2021",
    amount: "100,000",
    status: true,
    image: Console,
  },
  {
    id: 3,
    title: "HP ProBook 11 ",
    trackno: "45684576",
    date: "26/08/2021",
    amount: "65,000",
    image: Hp,
    status: true,
  },

  {
    id: 4,
    title: "Samsung Galaxy A53,6.5”",
    trackno: "58769467",
    date: "27/08/2021",
    amount: "50,000",
    status: false,
    image: Samsung,
  },

  {
    id: 5,
    title: "Samsonic 32 Smart TV",
    trackno: "78443796",
    date: "27/08/2021",
    amount: "75,000",
    status: true,
    image: TV,
  },
];

export const listedItems = [
  {
    id: 1,
    title: "Hp ProBook 11 Inches X360 INTEL PENTIUM 128GB SSD- 4GB RAM",
    brand: "HP",
    price: "65,000",
    state: "kaduna",
    seller: "Daniel Dada",
    location: "Zone 9-Police Station Kaduna",
    image: Hp,
  },
  {
    id: 2,
    title: "Samsonic 32'' Inch Smart Android TV With Netflix,Youtube,",
    brand: "Samsonic",
    price: "75,000",
    state: "kaduna",
    seller: "Daniel Dada",
    location: "Zone 9-Police Station Kaduna",
    image: TV,
  },
];

export const RecentViews = [
  {
    id: 1,
    image: view1,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...",
    price: "₦ 65,000",
  },
  {
    id: 2,
    image: view2,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...",
    price: "₦ 80,000",
  },
  {
    id: 3,
    image: view3,
    title: "Samsung Galaxy A03, 4GB/64GB Memory, android...",
    price: "₦ 70,000",
  },
  {
    id: 4,
    image: view4,
    title: "Samsung Galaxy tab a7, 10.4” TFT 6GB/128GB Memory...",
    price: "₦ 55,000",
  },
  {
    id: 5,
    image: view5,
    title: "Samsung Galaxy A53,6.5” Super AMOLED Screen, 6GB/128GB...",
    price: "₦ 75,000",
  },
];

export const Info = [
  {
    id: 1,
    image: front,
  },
  {
    id: 2,
    image: back,
  },
  {
    id: 3,
    image: side,
  },
  {
    id: 4,
    image: flip,
  },
  {
    id: 5,
    image: allside,
  },
];
