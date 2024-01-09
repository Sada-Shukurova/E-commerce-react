import { NavLink } from "react-router-dom";
import myRoutes from "./myRoutes";

const Routing = () => {
  return (
    <ul>
      {myRoutes.map(({ id, to, text }) => {
        return (
          <li key={id}>
            <NavLink className="link" to={to}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Routing;
