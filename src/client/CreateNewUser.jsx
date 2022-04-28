import React from "react";
import {useState} from "react";

export function CreateNewUser() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    async function submit(e) {
        e.preventDefault();
        console.log("Submitting", {firstname, lastname,email});
        await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({firstname,lastname,email}),
            headers: {
                "Content-Type": "Application/json"
            }
        })
    }
    return <form onSubmit={submit}>
        <h1>Create new user</h1>
        <div><label>Firstname: <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)}/></label></div>
        <div><label>Lastname: <input type="text" value={lastname} onChange={e => setLastname(e.target.value)}/></label></div>
        <div><label>Email: <input type="text" value={email} onChange={e => setEmail(e.target.value)}/></label></div>

        <button>Add user</button>
    </form>;
}
