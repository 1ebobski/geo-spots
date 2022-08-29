import { ReactElement } from "react";
import postsContainerStyles from "./posts-container.module.css";

// import { useAppDispatch } from "../../hooks";

export default function PostsContainer({ children }: any): ReactElement {
  //   const dispatch = useAppDispatch();

  return (
    <main className={postsContainerStyles.main}>
      <ul className={postsContainerStyles.container}>{children}</ul>
    </main>
  );
}
