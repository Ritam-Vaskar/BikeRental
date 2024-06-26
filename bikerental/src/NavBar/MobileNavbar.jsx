import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import NavBar from "./Navbar";


const MobileNavBar = () => {

    const [open, setOpen] = useState(false);


    const c = () => {
        setOpen(!open);
    }

    return(
        <>
            <div id="menu" className="fas fa-bars" onClick={() => setOpen(!open)} style={{display:open?"none":""}} />
            <SlidingPane
            isOpen={open}
            from="left"
            width="200px"
            onRequestClose={() => setOpen(!open)}>
                <NavBar clicked={c}/>
            </SlidingPane>
        </>
    );

}

export default MobileNavBar;
