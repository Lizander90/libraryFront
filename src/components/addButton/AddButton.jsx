import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const AddBookButton = () => {
    const [isBookAdded, setIsBookAdded] = useState(false);

    const handleClick = () => {
        // setIsBookAdded(true);
        Swal.fire('Loloasd')
    };

    return <>
        <Link className="w-fit p-2.5 mb-2 drop-shadow rounded text-white  bg-blue-600"
            to="/addbook">
            New Book
        </Link >
    </>

}