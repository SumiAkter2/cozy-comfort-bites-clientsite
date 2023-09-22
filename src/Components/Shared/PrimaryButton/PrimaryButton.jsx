const PrimaryButton = ({ buttonText }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="btn  btn-outline border-0 border-b-4 mt-6 p-6">
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
