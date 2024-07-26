import styles from "./Button.module.scss";
import { ButtonColor, ButtonProp } from "@/utils/types";

export default function Button(prop: ButtonProp) {
  const color = prop.buttonColor || ButtonColor.Default;

  return (
    <button
      className={`${styles.button} bg-${color}-700 hover:bg-${color}-600`}
      onClick={prop.onClick}
    >
      {prop.name}
    </button>
  );
}
