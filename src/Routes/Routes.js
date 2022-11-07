import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AllServices from "../components/Others/AllServices";
import Services from "../components/Others/Services";
import Main from "../layouts/Main/Main";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Main /> }>
        <Route index element={<Services /> }/>

        <Route path="/services"
        element={ <AllServices />}
        loader={() => fetch(`http://localhost:4000/services`)}
        />

    </Route>
))