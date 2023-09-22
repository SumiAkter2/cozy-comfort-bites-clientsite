const Cover = ({ Img, Title,ParagraphText }) => {
  return (
    <div>
      <div
        className="hero h-[600px] "
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 mx-12 h-56 w-[700px]"></div>
        <div className="hero-content text-center text-white ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{Title}</h1>
            <p className="mb-5">{ParagraphText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
