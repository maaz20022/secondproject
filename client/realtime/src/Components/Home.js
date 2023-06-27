import React from 'react';
import bg from '../Images/bg.png';
const Home = () => {
    return (
        <>

            <main>
                <section class="firstsection">
                    <div class="leftsection">
                        Hi, My name is <span class="red">Maaz</span>

                        <div style="width:max-content;">and I am a passionate</div>
                        <div>Web Developer</div>
                        <span id="element"></span>
                    </div>
                    <div class="rightsection">
                        <img src="bg.png" alt=""></img>
                    </div>
                </section>
                <hr></hr>
                <section class="secondsection">
                    <h1>Project Made by me</h1>

                </section>
            </main>

        </>
    )
}
export default Home;