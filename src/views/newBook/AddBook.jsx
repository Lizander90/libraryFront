import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { handleErrorMessage } from "../../libs/sweetAlert";
import { useCreateBookMutation } from "../../store/query/apiBook";
import { Link } from "react-router-dom";
const BOOK_EXAMPLE = {
    name: "A Clash of Kings",
    authors: "George R. R. Martin",
    publisher: "Bantam Books",
    country: "United States",
    released: "1999-02-02T00:00:00",
    numberOfPages: 768
}

const AddBook = () => {
    const [createNewBook, { isLoading, isError, isSuccess }] = useCreateBookMutation()

    useEffect(() => {
        if (!!isError)
            return handleErrorMessage('Ops....', 'Cant add new book now... try later please')

        if (!!isSuccess)
            return handleErrorMessage('Ok', 'Cant add new book now... try later please')
    }, [isError, isSuccess])

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createNewBook(BOOK_EXAMPLE)

    }

    return <React.Fragment>

        <div className="mx-auto drop-shadow-lg rounded bg-slate-100 w-3/5 p-5 m-12">

            <form className="flex p-9 gap-2 flex-col w-full">

                <h1 className="text-center text-4xl font-medium text-amber-950 dark:text-white">Add new Book</h1>
                <div className="relative mb-4 flex flex-wrap items-stretch">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        id="basic-addon3"
                    >Name of book</span>
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Title"
                        aria-label="Username"
                        aria-describedby="basic-addon1" />
                </div>

                <div className="relative mb-4 flex flex-wrap items-stretch">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        id="basic-addon3"
                    >Author</span>
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Alexa Liras"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />

                </div>

                <div className="relative mb-4 flex flex-wrap items-stretch">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                        id="basic-addon3"
                    >Publisher</span>
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        id="basic-url"
                        aria-describedby="basic-addon3" />
                </div>

                <div className="relative mb-4 flex flex-wrap items-stretch">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    ># pages</span
                    >
                    <input
                        type="text"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        aria-label="Amount (to the nearest dollar)" />

                </div>

                <div className="relative flex flex-wrap items-stretch">
                    <span
                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    >Book Description</span
                    >
                    <textarea
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        aria-label="With textarea"
                        placeholder="Book resume"
                    ></textarea>
                </div>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-block w-3/5 md:w-2/5 self-center rounded bg-blue-600 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Add book
                </button>

                <Link
                    className="w-4/5 md:w-2/5 text-center 
                    -mb-9 self-center rounded bg-orange-500
                     p-2 text-xs font-medium uppercase leading-normal
                      text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    to="/">
                    Go to home
                </Link>
            </form>
        </div>

    </React.Fragment >
}

export default AddBook