import React from "react";

const Contacts = () => {
    return(
        <>
        <section class="contact" id="contact">
            <h1 class="heading"> <span>contact</span> Us</h1>
            <div class="row">
                <div class="content">

                    <div class="user">
                        <h3 class="name">BIKIIT</h3>
                        <p>Rent Bike As You Like</p>
                    </div>

                    <h3 class="title">contact info</h3>
                    <div class="info">
                        <h3> <i class="fas fa-envelope"></i>vaskarritam2005@gmail.com</h3>
                        <h3> <i class="fas fa-phone"></i>+91 9609887167</h3>
                        <h3> <i class="fas fa-map-marker-alt"></i>Patia,Bhubaneswar,Odisha,PIN- 751024</h3>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Name" class="box" />
                    <input type="email" placeholder="Email" class="box" />
                    <input type="text" placeholder="Issue" class="box" />
                    <textarea name="" id="" cols="10" rows="5" class="box" placeholder="Message"></textarea>

                    <button type="submit" class="btn">send <i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </section>
        </>

    );
}

export default Contacts;