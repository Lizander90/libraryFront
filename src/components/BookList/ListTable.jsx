import React from 'react'
import {
    Typography
} from "@material-tailwind/react";

export const GenerateRow = ({ rowsList, isLoading, error, isError, filterWord }) => {

    const filterConditions = (publisher, name, filterWord) => {
        return (publisher.toUpperCase().includes(filterWord.toUpperCase()) || name.toUpperCase().includes(filterWord.toUpperCase())) && filterWord !== undefined
    }

    return <React.Fragment>
        {/* Top cuerpo de la tabla */}
        < tbody >
            {
                !isLoading && !isError &&
                rowsList
                    .filter(({ publisher, name }) => (filterConditions(publisher, name, filterWord)))
                    .map(({ name, authors, publisher, numberOfPages, released }, index) => {
                        const isLast = index === rowsList.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={name + authors}>
                                <td className={classes}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {name}
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal opacity-70"
                                            >
                                                {authors}
                                            </Typography>
                                        </div>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="flex flex-col">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {publisher}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="w-max">
                                        {'[ ' + numberOfPages + ' ]'}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {released}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })
            }
        </tbody >
    </React.Fragment >
}

export default GenerateRow