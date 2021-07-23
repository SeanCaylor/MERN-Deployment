import React, {useEffect, useState} from "react";
import axios from "axios";
import {navigate} from "@reach/router";

const Pet = (props) => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleDelete = (delId) => {
        axios
            .delete("http://localhost:5000/api/pets/" + delId)
            .then((res) => {
                navigate("/pets");
            })
            .catch((err) => {
                console.log(err)
            })
    };

    if (pet === null) {
        return "Loading...";
    };

    return (
        <div style={{textAlign: "center"}}>
            <h1>Details about: {pet.name}</h1>
            <div style={{border: "1px solid black", width: "75%", margin: "0 auto", padding: "20px" }}>
                <h3>Pet type:</h3><p>{pet.type}</p>
                <h3>Description: </h3><p>{pet.description}</p>
                <h3>Skills: </h3><p>{pet.skill1 && pet.skill1}{pet.skill2 && ", " + pet.skill2}{pet.skill3 && ", " + pet.skill3}</p>
                <div>
                    <span
                        onClick={(e) => {
                            handleDelete(pet._id);
                        }}
                        style={{ color: "red", cursor: "pointer" }}
                    >
                        &#10084; Adopt
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Pet;
