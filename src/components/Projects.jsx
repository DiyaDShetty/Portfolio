import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Projects = ({ showAll = false, theme = "#3b82f6" }) => {
    const allProjects = [
        {
            image: "/securenotes.png",
            description: "Spring Boot backend with JWT, CSRF, and role-based access.",
            github: "https://github.com/DiyaDShetty/secure-notes-app.git"
        },
        {
            image: "/chat.png",
            description: "Real-time chat app with Spring Boot, WebSocket, STOMP, responsive UI.",
            github: "https://github.com/DiyaDShetty/Realtime-chat-application.git"
        },
        {
            image: "/ela.png",
            description: "CNN and ELA-based system for detecting tampered images accurately.",
            github: "https://github.com/DiyaDShetty/Image-Forgery-Detection.git"
        },
        {
            image: "/blur.png",
            description: "Real-time face blurring app using Mediapipe, OpenCV, and Streamlit.",
            github: "https://github.com/DiyaDShetty/Face-Blur-App.git"
        },
        {
            image: "/ugwu.png",
            description: "Recreated award-winning website with smooth animations, responsive design.",
            github: "https://github.com/DiyaDShetty/award-winning-website-clone.git"
        },
        {
            image: "/report.png",
            description: "Automated forensic report generation using deep learning and NLP techniques.",
            github: "https://github.com/yourusername/forensic-report-generator"
        },
    ];

    const projectsToDisplay = showAll ? allProjects : allProjects.slice(0, 2);

    return (
        <div className="text-white bg-[#111111] flex flex-col items-center justify-center gap-4 border border-white py-4 px-2 w-full">
            <h1 className="text-2xl">Works</h1>

            <div className="flex flex-col lg:flex-row gap-10 px-4 py-4">
                {projectsToDisplay.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 items-center text-center max-w-xs"
                        style={{ minHeight: "250px" }}
                    >
                        <img className="w-40 h-32 object-contain" src={project.image} alt={`Project ${index + 1}`} />
                        <p className="text-sm leading-snug">{project.description}</p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex items-center gap-2 text-sm px-3 py-1 rounded border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                ))}
            </div>

            {!showAll && (
                <Link
                    to="/projects"
                    className="-mt-6 px-4 py-1 rounded transition-colors duration-300"
                    style={{
                        color: theme,
                        border: `1px solid ${theme}`,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = theme;
                        e.target.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = theme;
                    }}
                >
                    View More Projects
                </Link>
            )}
        </div>
    );
};

export default Projects;
