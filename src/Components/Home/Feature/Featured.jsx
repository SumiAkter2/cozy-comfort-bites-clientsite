import HeadingTitle from "../../Shared/HeadingTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./Feature.css";
const Featured = () => {
  return (
    <section className="">
      <div className="hero min-h-screen feature-bg">
        <div className="hero-overlay bg-black bg-opacity-60"></div>

        <div className="  text-neutral-content">
          <HeadingTitle heading={"from our menu"} subtitle={"check it out"} />
          <div className="flex justify-center items-center gap-6 mt-12 p-12">
            <div>
              <img src={featureImg} alt="" />
            </div>

            <div>
              <p>September 20, 2023</p>
              <h1 className="text-xl uppercase">where can i get some</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                voluptatibus ab illo praesentium quibusdam nobis, officiis iure
                doloribus commodi aliquid nam dolores architecto nihil explicabo
                vitae deleniti ipsam, cumque in.
              </p>
              <button className="btn text-white btn-outline border-0 border-b-4 mt-6">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
