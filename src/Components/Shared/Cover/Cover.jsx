import { Parallax } from "react-parallax";

const Cover = ({ Img, Title, ParagraphText }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={Img}
        bgImageAlt="The Menu"
        strength={-200}
      >
        <div className="hero md:h-[600px] ">
          <div className="hero-overlay bg-black bg-opacity-60 mx-12 md:h-56 md:w-[700px]"></div>
          <div className="hero-content text-center text-white ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{Title}</h1>
              <p className="mb-5">{ParagraphText}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
