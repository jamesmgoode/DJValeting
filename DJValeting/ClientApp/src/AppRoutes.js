import { Home } from "./components/Home";
import { Bookings } from "./components/Bookings";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/bookings',
      element: <Bookings />
  }
];

export default AppRoutes;
