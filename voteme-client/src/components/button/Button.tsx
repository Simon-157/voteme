// libraries
import Link from "next/link";
import buttonStyles from "./button-styles.module.scss";

interface Props {
  icon?: React.ReactNode;
  text?: string;
  to?: string;
  styles?: any;
  onClick?: () => void;
}

const Button = ({ icon, text, to, styles, onClick }: Props) => {
  return (
    <button
      className={`${buttonStyles.button} ${!to ? buttonStyles.padding : null}`}
      style={{ ...styles }}
      onClick={onClick ? onClick : this}
    >
      {to ? (
        <Link href={to}>
          {icon ?? ""} {text}
        </Link>
      ) : (
        <>
          {icon ?? ""}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
