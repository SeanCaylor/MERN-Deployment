import React, {useState} from "react";
import {navigate} from "@reach/router";
import axios from "axios";

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errors, setErrors] = useState("");

    const handleNewPetSubmit = (e) => {
        e.preventDefault();

        const newPet = {
            name: name,
            type: type, 
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        };

        axios
            .post("http://localhost:5000/api/pets/new", newPet)
            .then((res) => {
                navigate("/pets")
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div style={{width: "50%", borderRadius: "25", margin: "0 auto", boxShadow: "5 5 5"}}>
            <h1 style={{textAlign: "center"}}>Know a pet needing a home?</h1>
            <form style={{textAlign: "center"}}
                onSubmit={(e) => {
                    handleNewPetSubmit(e);
                }}
            >
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.name && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.name.message}</legend>}
                        <input
                            type="text"
                            placeholder={"Pet Name"}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.type && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.type.message}</legend>}
                        <input
                            type="text"
                            placeholder={"Pet Type (ie cat, dog, iguana, tarantula)"}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.skill1 && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.skill1.message}</legend>}
                        <input
                            type="text"
                            placeholder={"One skill? (optional)"}
                            onChange={(e) => {
                                setSkill1(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.skill2 && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.skill2.message}</legend>}
                        <input
                            type="text"
                            placeholder={"Another skill? (still opt)"}
                            onChange={(e) => {
                                setSkill2(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.skill3 && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.skill3.message}</legend>}
                        <input
                            type="text"
                            placeholder={"Another skill? (still opt)"}
                            onChange={(e) => {
                                setSkill3(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    {errors.description && <legend style={{color:"crimson", fontSize:".35%"}}>{errors.description.message}</legend>}
                    <textarea
                            placeholder={"Pet Description"}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            cols="17"
                            rows="10"
                        ></textarea>
                    </fieldset>
                </div>
                <button>Add Pet!</button>
            </form>
        </div>
    );
};

export default NewPet;