import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "@reach/router";

const AllPets = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/")
            .then((res) => {
                const sortedPets = res.data.sort((a, b) =>
                    a.type.localeCompare(b.type)
                );

                setPets(sortedPets);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>These pets are looking for a good home!</h1>

            <table 
                border={1}
                style={{padding: "2px", width: "90%", margin: "0 auto", border: "1px solid black"}}
            >
                <tr style={{borderBottom: "black double 1px"}}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {pets.map((pet) => {
                    return (
                        <tr key={pet._id} style={{ textAlign: "center" }}> 
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={"/pets/" + pet._id}>details</Link>
                                {" | "}
                                <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default AllPets;