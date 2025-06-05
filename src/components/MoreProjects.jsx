import React from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";

const MoreProjects = () => {
    return (
        <div className="bg-gray-950 text-white min-h-screen px-8 py-10">
            {}
            <Projects showAll={true} />

            <div className="mt-12 flex justify-center">
                <Link
                    to="/"
                    className="text-gray-400 text-sm hover:text-white hover:underline transition duration-300"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default MoreProjects;
