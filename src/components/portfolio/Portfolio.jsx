import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React E-commerce",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, mi sit amet molestie ultricies, libero ante pretium orci, aliquam sollicitudin nulla augue non orci. Morbi elementum lectus sit amet nisl molestie, sed condimentum orci condimentum. ",
  },
  {
    id: 2,
    title: "Next.js portfolio",
    img: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, mi sit amet molestie ultricies, libero ante pretium orci, aliquam sollicitudin nulla augue non orci. Morbi elementum lectus sit amet nisl molestie, sed condimentum orci condimentum. ",
  },
  {
    id: 3,
    title: "Laravel booking",
    img: "https://images.pexels.com/photos/7504611/pexels-photo-7504611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, mi sit amet molestie ultricies, libero ante pretium orci, aliquam sollicitudin nulla augue non orci. Morbi elementum lectus sit amet nisl molestie, sed condimentum orci condimentum. ",
  },
  {
    id: 4,
    title: "WordPress E-commerce",
    img: "https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, mi sit amet molestie ultricies, libero ante pretium orci, aliquam sollicitudin nulla augue non orci. Morbi elementum lectus sit amet nisl molestie, sed condimentum orci condimentum. ",
  },
];

const Single = ({item}) => {
    return(
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {
  return <div>
    {items.map(item=>(
        <Single item={item} key={item.id}/>
    ))}
  </div>;
};

export default Portfolio;
