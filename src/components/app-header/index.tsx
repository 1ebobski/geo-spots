import { useEffect, useState, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import appHeaderStyles from "./app-header.module.css";

type TTab =
  | "home"
  | "my-page"
  | "following"
  | "favourites"
  | "new-post"
  | "profile";

export default function AppHeader(): ReactElement {
  const [tab, setTab] = useState<TTab>("home");
  const { pathname } = useLocation();

  useEffect(() => {
    const tabName: TTab =
      pathname === "/"
        ? ("constructor" as TTab)
        : (pathname.replace(/\//, "") as TTab);
    setTab(tabName);
  }, [pathname]);

  return (
    <header className={`${appHeaderStyles.header}`}>
      <nav className={appHeaderStyles.navigation}>
        <Link
          to={{
            pathname: "/",
          }}
          className={appHeaderStyles.link}>
          <span className={tab === "home" ? "active" : "inactive"}>Home</span>
        </Link>
        <Link to={{ pathname: "/my-page" }} className={appHeaderStyles.link}>
          <span className={tab === "my-page" ? "active" : "inactive"}>
            My page
          </span>
        </Link>
        <Link
          to={{
            pathname: "/following",
          }}
          className={appHeaderStyles.link}>
          <span className={tab === "following" ? "active" : "inactive"}>
            Following
          </span>
        </Link>
        <Link
          to={{
            pathname: "/favourites",
          }}
          className={appHeaderStyles.link}>
          <span className={tab === "favourites" ? "active" : "inactive"}>
            Favourites
          </span>
        </Link>
        <Link
          to={{
            pathname: "/new-post",
          }}
          className={appHeaderStyles.link}>
          <span className={tab === "new-post" ? "active" : "inactive"}>
            New post
          </span>
        </Link>
        <Link
          to={{
            pathname: "/profile",
          }}
          className={appHeaderStyles.link}>
          <span className={tab === "profile" ? "active" : "inactive"}>
            Profile
          </span>
        </Link>
      </nav>
    </header>
  );
}
