import React from "react";
import {useParams} from "react-router-dom";

export default function Profile() {
const params = useParams()
console.log(params);
    return (
        <div>
            <h2>Bienvenue sur mon Profile</h2>
        </div>
    )
}