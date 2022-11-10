import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AllServices from "../components/Others/AllServices";
import Main from "../layouts/Main/Main";
import AddReview from "../pages/AddReview";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReview from "../pages/MyReview";
import Register from "../pages/Register";
import ServiceDetail from "../pages/ServiceDetail";
import ServiceWithPagi from "../pages/ServicewithPagi";
import UpadateReview from "../pages/UpdateReview";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicepagi" element={<ServiceWithPagi />} />
        <Route path="/myreviews" element={<PrivateRoutes><MyReview /></PrivateRoutes>} />
        <Route path="/addservice" element={<AddService />} />
        <Route path="/review/:id" element={<PrivateRoutes><AddReview /></PrivateRoutes>} />
        <Route path="/update/:id" element={<PrivateRoutes><UpadateReview /></PrivateRoutes>} />

        <Route path="/services"
            element={<AllServices />}
            loader={() => fetch(`https://assignment-11-server-amber.vercel.app/services`)}
        />

        <Route path="/services/:id"
            element={<ServiceDetail />}
            loader={({params}) => fetch(`https://assignment-11-server-amber.vercel.app/services/${params.id}`)}
        />

    </Route>
))