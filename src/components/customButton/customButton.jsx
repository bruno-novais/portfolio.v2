import "./customButton.css";
const CustomButton = ({ href, text }) => {
  return (
    <a className="custom_button" href={href}>
      <span>{text}</span>
    </a>
  );
};

export default CustomButton;
