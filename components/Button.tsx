import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_white_text"
    | "btn_green"
    | "btn_white"
    | "btn_dark_green_outline";
  full?: boolean;
  hover?: "hover:bg-green-900";
};

const Button = ({ type, title, icon, variant, hover }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${hover} transition-all duration-300`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
