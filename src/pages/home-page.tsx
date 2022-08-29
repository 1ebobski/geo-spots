import homePageStyles from "./styles/home.module.css";
import { useState } from "react";

import { useHistory } from "react-router-dom";

import { Modal, OrderDetails, PostsContainer, Post } from "../components";

import { useAppDispatch } from "../hooks";

export default function HomePage() {
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   if (!ingredients) {
  //     dispatch(fetchIngredientsThunk());
  //   }
  // }, []);

  // const handleOrderClose = useCallback(() => {
  //   setModal(false);
  //   dispatch(cleanOrderData());
  //   dispatch(cleanBurgerConstructor());
  //   dispatch(removeCounts());
  // }, [
  //   dispatch,
  //   setModal,
  //   cleanOrderData,
  //   cleanBurgerConstructor,
  //   removeCounts,
  // ]);

  return (
    <>
      <PostsContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <Post />
        ))}
      </PostsContainer>
      {modal && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
