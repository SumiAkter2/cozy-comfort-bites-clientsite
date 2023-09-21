const HeadingTitle = ({ heading, subtitle }) => {
  return (
    <div className="mx-auto text-center uppercase md:w-3/12 my-8">
      <p className="text-yellow-500 ">---{subtitle}---</p>
      <h2 className="md:text-4xl text-2xl mt-2 border-y-4 py-2">{heading}</h2>
    </div>
  );
};

export default HeadingTitle;
