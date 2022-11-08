import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AllServices from "../components/Others/AllServices";
import Services from "../components/Others/Services";
import Main from "../layouts/Main/Main";
import AddReview from "../pages/AddReview";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetail from "../pages/ServiceDetail";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
        <Route index element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review/:id" element={<AddReview />} />

        <Route path="/services"
            element={<AllServices />}
            loader={() => fetch(`http://localhost:4000/services`)}
        />

        <Route path="/services/:id"
            element={<ServiceDetail />}
            loader={({params}) => fetch(`http://localhost:4000/services/${params.id}`)}
        />

    </Route>
))