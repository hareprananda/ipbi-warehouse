import routes from "@/const/routes";
import { faBoxesStacked, faEnvelope, faHome, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";

class LayoutHelper {
  getMenu(level: string) {
    const menu = [
      {
        name: "Home",
        icon: faHome,
        path: routes.home,
      },
      {
        name: "Barang",
        icon: faBoxesStacked,
        path: routes.goods,
      },
      {
        name: "Request",
        icon: faEnvelope,
        path: routes.manageRequest,
      },
      {
        name: "Peminta",
        icon: faUsers,
        path: routes.requester,
      },
    ];

    if (level === "ADMIN")
      menu.push({
        name: "Manager",
        icon: faUserGroup,
        path: routes.manager,
      });
    return menu;
  }
}

export default new LayoutHelper();
