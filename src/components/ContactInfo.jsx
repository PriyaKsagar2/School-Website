import React from "react";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where To Find Us</h2>
            <p className="mb-5">"Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"</p>
            <h3>Phone: </h3>
            <p className="m-0"><a href="+1 (123) 456-7890">"+1 (123) 456-7890"</a></p>      
            <h2 className="text-white opacity-0">space</h2>
            <h3>Email:</h3>
            <p className="m-0"><a href="info@springdale.edu">"info@springdale.edu"</a></p>
        </div>
    )
}