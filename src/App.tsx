import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import PageLayout from "./Layouts/PageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects">
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<ProjectDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
