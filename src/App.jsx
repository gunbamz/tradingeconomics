import {
  Outlet,
  NavLink,
} from "react-router-dom";


export default function App() {

  return (
      <>
          <div id="sidebar">
              <h1>Trading Economics App</h1>
              <nav>
                <ul>
                  <NavLink
                      to={''}
                      className={({ isActive}) => isActive ? "active" : ""}
                  >
                    Mexico Economy
                  </NavLink>
                  <NavLink
                      to={'next'}
                      className={({ isActive}) => isActive ? "active" : ""}
                  >
                    Next
                  </NavLink>
                </ul>
              </nav>
          </div>
          <div
              id="detail"
          >
              <Outlet />
          </div>
      </>
  );
}
