import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardBody,
} from "@material-tailwind/react";

import { GenerateRow } from '../BookList/ListTable'
import { useGetBooksQuery } from "../../store/query/apiBook";
import { useState } from "react";
import { FilterInput } from "../FilterInput/FilterInput";
import { HeadTable } from "./HeadTable";
import { AddBookButton } from "../addButton/AddButton";
import SpinLoader from "../spinComponent/spin";
// import { FilterInput } from "../FilterInput/FilterInput";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
]

const TABLE_HEAD = ["Titulo / Autor", "Editorial", "Paginas", "Fecha publicacion"];

const PARAMS_FORMAT = [
    {
        title: 'game of throw',
        date: "20/01/02",
        editorial: "20/01/02",
        pages: "480",
        author: "liz"
    }
]

export const GenerateTable = ({ headTableFields = TABLE_HEAD, rowsTable }) => {
    const { data: books, isLoading: loadingBooks, error: errorBook, isError: isErrorBook } = useGetBooksQuery()
    const [filter, setFilter] = useState("")

    return (
        <Card className="center w-4/5">
            <div className="flex gap-5 justify-between px-2">
                <FilterInput
                    searchValue={filter}
                    setSearchValue={setFilter}
                    placeHolder="Filtrar por titulo o editorial..." />
                <AddBookButton />

            </div>
            <SpinLoader loading={!!loadingBooks} />
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <HeadTable fieldsHead={headTableFields} />
                    <GenerateRow
                        isLoading={loadingBooks}
                        error={errorBook}
                        isError={isErrorBook}
                        rowsList={books}
                        filterWord={filter}
                    />
                    
                </table>
            </CardBody>

        </Card>
    );
}