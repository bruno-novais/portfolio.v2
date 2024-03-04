import "./customButton.css";
const CustomButton = ({ href }) => {
  return (
    <a className="custom_button" href={href}>
      <span>See My Projects</span>
    </a>
  );
};

export default CustomButton;
