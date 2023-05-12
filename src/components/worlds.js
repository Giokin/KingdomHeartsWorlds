import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorlds, selectWorld } from "../reducers/world";

const Worlds = () =>{
    const dispatch = useDispatch();
    const worlds = useSelector(selectWorld)

    useEffect(() =>{
        dispatch(fetchWorlds());
        console.log('Fetched Worlds from Database')
    },[dispatch]);

    return(
        <ul>
            {worlds.map((world)=>{
                return (
                    <il key={world.id}>
                        <h2>{world.name}</h2>
                    </il>
                );
            })}
        </ul>
    );
};

export default Worlds;