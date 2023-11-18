import { Route, Routes } from "react-router-dom";
import DashboardDrawer from "../component/DashboardDrawer";
import { DashboardRouteList } from "../utils/DashboardRouteList";

const DashboardScreen = () => {


  return (
    
      <DashboardDrawer>
           <Routes>
    {DashboardRouteList.map((e, i) => {
      return <Route path={e.path} element={e.element} key={i} />;
    })}
  </Routes>
      </DashboardDrawer>
    
  );
};

export default DashboardScreen;
