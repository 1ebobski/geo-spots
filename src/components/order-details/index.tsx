import orderDetailsStyles from "./order-details.module.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Loader } from "..";
import { IStore } from "../../types";

export default function OrderDetails(): JSX.Element {
  const { request, id } = useSelector((store: IStore) => store.order);

  const content = useMemo(() => {
    return request ? (
      <Loader size='large' />
    ) : (
      <>
        <span className={orderDetailsStyles.number}>{id}</span>
        <span>идентификатор заказа</span>

        <div className={orderDetailsStyles.accepted}></div>
        <span>Ваш заказ начали готовить</span>
        <span className={orderDetailsStyles.wait}>
          Дождитесь готовности на орбитальной станции
        </span>
      </>
    );
  }, [id]);
  return content;
}
