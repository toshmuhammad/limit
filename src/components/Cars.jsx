import React, { useEffect } from "react";

export default function Cars() {
    useEffect(() => {
        setInterval(() => {
            console.log("Abdulazizning ro'moliyeeeeeee");
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div>
            <div>
                <h2>Car 1</h2>
                <p>
                    Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. На берегу, вдали?
                </p>
            </div>
            <div>
                <h2>Car 2</h2>
                <p>
                    Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Буквоград, своих?
                </p>
            </div>
        </div>
    )
}