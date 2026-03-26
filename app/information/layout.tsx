import { firaCode } from "../models";
import cardLayoutStyles from "./information-layout.module.scss";

type Props = {
  children: React.ReactNode;
};

function CardLayout({ children }: Props) {
  return <div className={`${firaCode.className} ${cardLayoutStyles.informationLayout}`}>{children}</div>;
}

export default CardLayout;
