import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MenuCategory = ({ items, Title, coverImg }) => {
  return (
    <div>
      {Title && (
        <Cover
          Img={coverImg}
          Title={Title}
          ParagraphText={"Would You Like To Try A Dish?"}
        />
      )}
      <div className="grid md:grid-cols-2 gap-10 mt-16 md:px-28">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/shop/${Title}`}>
        <PrimaryButton buttonText={"Order Your Favorite Food"}></PrimaryButton>
      </Link>
    </div>
  );
};

export default MenuCategory;
