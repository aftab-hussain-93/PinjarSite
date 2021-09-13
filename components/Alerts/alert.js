import React from "react";

const Alert = ({ showAlert, message, type, closeAlertBox }) => {
    let styles;
    if (type === "info") styles ="text-white px-6 py-4 border-0 rounded fixed top-2 right-30 md:right-50 w-2/3 md:w-1/2 z-50 mb-4 bg-blue-400 opacity-95"
    else if (type === "error") styles = "text-white px-6 py-4 border-0 rounded fixed top-2 right-30 md:right-50 w-2/3 md:w-1/2 z-50 mb-4 bg-red-400 opacity-95"
    else styles = "text-white px-6 py-4 border-0 rounded fixed top-2 right-30 md:right-50 w-2/3 md:w-1/2 z-50 mb-4 bg-green-400 opacity-95"

    return (
        <>
            {showAlert ? (
                <div
                    className={styles}
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8 text-xl">
                        {message}
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={closeAlertBox}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Alert;
