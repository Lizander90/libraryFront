import { IconButton } from '@material-tailwind/react';
import React from 'react';
const PLACE_HOLDER = 'Escribe sugerencia...';

export const FilterInput = ({ searchValue, setSearchValue, placeHolder = PLACE_HOLDER }) => {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
            <input
                className="w-2/6 mb-2 px-4 py-2 rounded-md shadow-[2px_2px_6px_-4px_#3b71ca]"
                placeholder={placeHolder}
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </>
    );
}
