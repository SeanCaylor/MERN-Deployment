import React, {useEffect, useState} from "react";
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

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/pets/" + props.id)
            .then((res) => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const handleNewPetSubmit = (e) => {
        e.preventDefault();

        const editedPet = {
            name: name,
            type: type, 
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        };

        axios
            .put("http://localhost:5000/api/pets/" + props.id, editedPet)
            .then((res) => {
                navigate("/pets/" + res.data._id);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div style={{width: "50%", borderRadius: "25", margin: "0 auto", boxShadow: "5 5 5"}}>
            <h1 style={{textAlign: "center"}}>Edit {name}</h1>
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
                            value={name}
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
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    <legend style={{fontSize:".35%"}}>Skill 1 (optional)</legend>
                        <input
                            type="text"
                            value={skill1}
                            onChange={(e) => {
                                setSkill1(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    <legend style={{fontSize:".35%"}}>Skill 2 (optional)</legend>
                        <input
                            type="text"
                            value={skill2}
                            onChange={(e) => {
                                setSkill2(e.target.value);
                            }}
                        />
                    </fieldset>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <fieldset style={{width:"fit-content", maxWidth:"auto"}}>
                    <legend style={{fontSize:".35%"}}>Skill 3 (optional)</legend>
                        <input
                            type="text"
                            value={skill3}
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
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            cols="17"
                            rows="10"
                        ></textarea>
                    </fieldset>
                </div>
                <button>Edit Pet!</button>
            </form>
        </div>
    );
};

export default NewPet;