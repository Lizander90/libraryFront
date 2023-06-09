import { Typography } from '@material-tailwind/react'
import React from 'react'

// Filters , tags
export const HeadTable = ({ fieldsHead }) => {
    const handleSort = () => { }
    return <thead>
        <tr>
            {fieldsHead.map((head, index) => (
                <th
                    key={head}
                    className="cursor-pointer border-y bg-slate-200 border-blue-gray-100 p-4 transition-colors hover:bg-blue-gray-50"
                >
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                        {head}
                    </Typography>
                </th>
            ))}
        </tr>
    </thead>
}
