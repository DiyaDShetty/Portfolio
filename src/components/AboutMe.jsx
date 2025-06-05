const AboutMe = ({theme}) => {
    return (
        <div className="bg-[#171717] text-amber-50 flex flex-col gap-4 py-6 px-6 border rounded-lg">
            <div>
                <h2 className="text-2xl">About Me</h2>
                <p className="text-xs text-gray-300">Hi, I'm Diya D Shetty, a Full Stack software developer from India.</p>
            </div>
            <div className="text-xs text-gray-300 flex flex-col gap-0.5">
                <p style={{color: theme}}>My primary tools of choice include:</p>
                <ul className="list-disc list-inside text-white">
                    <li>Java (Core + Concurrency + Streams)</li>
                    <li>Spring Boot & Spring Security</li>
                    <li>JWT, CSRF Protection, Role-Based Authentication</li>
                    <li>MySQL, JPA, Hibernate</li>
                    <li>ReactJS</li>
                </ul>
            </div>
            <p className="text-xs text-gray-300">
                I'm always eager to learn new things, whether it's a tool, technology, or concept that can help me improve how I work. I enjoy picking up new skills and finding practical ways to apply them in my projects. Staying curious and open to learning has helped me grow as a developer and adapt to different challenges along the way.
            </p>
        </div>
    );
};

export default AboutMe;
