import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AddUser from "./pages/AddUser";
import AllUser from "./pages/AllUser";
import DetailPage from "./pages/DetailPage";
import Pagination from "./pages/Pagination";
import InfiniteScroll from "./pages/InfiniteScroll";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="users" element={<AllUser />} />
          <Route path="users/:userId" element={<DetailPage />} />
          <Route path="edit-user/:userId" element={<AddUser />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="infinite-scroll" element={<InfiniteScroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
