import "./App.css";
import React from "react";
import {Link, Redirect, Router} from "@reach/router";

import AllPets from "./views/AllPets";
import EditPet from "./views/EditPet";
import NewPet from "./views/NewPet";
import NotFound from "./views/NotFound";
import Pet from "./views/Pet";

function App() {
    return (
        <div>
            <header style={{}}>
                <nav
                    style={{
                        display: "flex",
                        alignContent: "center",
                        verticalAlign: "middle",
                        justifyContent: "space-between",
                        padding: "2%",
                        backgroundColor: "whitesmoke",
                        borderBottom: "solid 2px lightgrey",
                    }}
                >
                    <h1 style={{fontSize: "1.5em"}}>Pet Shelter</h1>
                    <div>
                        <Link to="/pets"><button style={{width: "200px", height: "75px", backgroundColor:"lightgrey"}}>Home</button></Link>{" "}
                        <Link to="/pets/new"><button style={{width: "200px", height: "75px", backgroundColor:"lightgrey"}}>New Pet</button></Link>
                    </div>
                </nav>
            </header>
            <Router>
                <AllPets path="/pets" />
                <EditPet path="/pets/:id/edit" />
                <NewPet path="/pets/new" />
                <Pet path="/pets/:id" />
                <Redirect from="/" to="/pets" noThrow="true" />
                {/* 404 */}
                <NotFound default />
            </Router>
        </div>
    );
}

export default App;
