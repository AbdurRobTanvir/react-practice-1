import { useState } from "react";
import CardFunction from "./CardFunction";
import SingleCard from "./SingleCard";
const cards = [
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/beautiful-1868656-1024x469-1.jpg",
    caption: "Hoverbic",
    title: "The worlds most popular fashion blogger",
    description:
      "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri",
    author: "Leona Peters",
    publishDate: "May 21, 2013",
  },
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/rg2.jpg",
    caption: "Fashion",
    title: "Brand New Fashion Line for 2018",
    description:
      "Lorem ipsum dolor sit amet, sed summo dolores torquatos cu. Everti antiopam assentior ea mei, per erant dicant interpretaris ad.",
    author: "Frank Cruz",
    publishDate: "July 22, 2014",
  },
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/gh2-500x300.jpg",
    caption: "Fashion",
    title: "Budget Friendly Fashion Bloggers",
    description:
      "If you are anything like me, one of your favorite pasttimes, amongst Netflix bingeing and cake baking, is looking at fashion blogs",
    author: "Admin",
    publishDate: "January 18, 2015",
  },
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Become-a-Successful-Fashion-Designer-500x300.jpg",
    caption: "Fashion",
    title: "How to Become a Successful Fashion Designer",
    description:
      "Want to know how to become a successful fashion designer? If you have spent your formative years watching Project Runway,reading",
    author: "Admin",
    publishDate: "February 13, 2015",
  },
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/How-to-Be-a-Good-Friend-500x300.jpg",
    caption: "Lifestyle",
    title: "How to Be a Good Friend on Social Media",
    description:
      "Being a good friend is not always easy, but taking the time to nurture a lasting friendship is worth every ounce of effort.As the years pass",
    author: " Marry Rolson",
    publishDate: "February 18, 2019",
  },
  {
    image:
      "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Tasty-Things-With-Chef-Charlie-1-500x300.jpg",
    caption: "Food, Restaurant",
    title: "Let us Cook Some Tasty Things With Chef Charlie",
    description:
      "Gieui cu solum dolor iudico, minim omittam dissentiunt eam no, ad mea solum aeque consul. In consequat efficiantur qui, te",
    author: "Admin",
    publishDate: "February 22, 2016",
  },
];

const CardObject = () => {
  const [blogDetails, setBlogDetails] = useState({});
  if (Object.keys(blogDetails).length === 0) {
    return (
      <div>
        <div className="container">
          <div className="card-wrapper clearfix">
            {cards.map((card, index) => (
              <CardFunction
                key={index}
                card={card}
                setBlogDetails={setBlogDetails}
              ></CardFunction>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <SingleCard
            card={blogDetails}
            setBlogDetails={setBlogDetails}
          ></SingleCard>
        </div>
      </div>
    );
  }
};

export default CardObject;
