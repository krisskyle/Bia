import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Banner from "./Banner/Banner";
import Section from "./Section/Section";
import productImg from "../../../assets/img/product.png";

const Home = () => {
  const { t } = useContext(AppContext);
  const product = t("products.product");
  const title = t("products.title");

  const data = [
    {
      id: 1,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 2,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 3,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
    {
      id: 4,
      url: productImg,
      alt: "Card Product",
      nameCard: product.nameCard,
      price: product.price,
    },
  ];

  return (
    <>
      <div className="w-full col-start-2 col-span-4 flex flex-col items-center container">
        <Banner />
        {title.map((item, index) => {
          console.log(item);
          return (
            <Section
              key={index}
              title={item}
              typeButton="link"
              link="/products"
              textButton={t("button.all")}
              iconButtonRight={<i className="ki-filled ki-arrow-right" />}
              data={data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
