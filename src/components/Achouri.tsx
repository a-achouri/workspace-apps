import React, { useState } from "react";
import imgDoctor from "resources/images/doctor.svg";
import imgChef from "resources/images/chef.svg";
import imgPolice from "resources/images/policeman.svg";
import imgEngineer from "resources/images/engineer.svg";

const ShowAndHide = () => {
    const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("");

    return (
        <>
          

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className="bg-[#82df82] m-10 hover:bg-slate-400"
                                onClick={() => setMyProfession(profession)}
                            >
                               {profession} 
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myProfession}</p>
                    </div>

               
            </div>
        </>
    );
};



export default ShowAndHide;