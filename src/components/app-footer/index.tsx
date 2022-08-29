import { ReactElement } from "react";

import appFooterStyles from "./app-footer.module.css";

export default function AppFooter(): ReactElement {
  return (
    <footer className={appFooterStyles.footer}>
      <p className={appFooterStyles.copyright}>&copy; Copyright GeoSpots</p>
    </footer>
  );
}
