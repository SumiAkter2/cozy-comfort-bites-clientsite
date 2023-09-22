import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

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
    </div>
  );
};

export default MenuCategory;
