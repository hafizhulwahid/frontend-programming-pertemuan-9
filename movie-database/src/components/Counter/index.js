import { useEffect, useState } from "react";

function Counter() {
    // let angka = 0;

    const [angka, setAngka] = useState(0);

    function addAngka() {
        // angka = angka + 1;
        // console.log(angka);

        setAngka(angka + 1);
    }
    // console.log(angka);

    function updateD0M() {
        console.log("Lifecycle: Dimont");

        document.title = `Hasil: ${angka}`;
    }

    // useEffect(function() {
        // console.log("Lifecycle: Dimont");

        // document.title = `Hasil: ${angka}`;
    // }, 
    // [,angka]);

    useEffect(updateD0M, [angka]);

    console.log("Lifecycle: Dirender");

    return(
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}


export default Counter;


