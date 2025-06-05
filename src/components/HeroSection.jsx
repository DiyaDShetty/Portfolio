

const HeroSection = ({ theme }) => {
    return (
        <section className="bg-[#171717] text-amber-50 flex flex-col gap-12 py-6 px-6 border  rounded-lg">
            <div>
                <h6 style={{ color: theme }} >Welcome</h6>
                <div className="flex flex-col gap-3 text-gray-300">
                    <p>Hi, I'm <em>Diya D Shetty</em>, a software developer with a strong focus on security, user experience and micro interactions..</p>
                    <p>Feel free to reach out to me if you have any projects in mind, or just to say hello.</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-7">
                    <a style={{ border: `2px solid ${theme}` }} className="rounded-tl-xs py-1.5 px-4" target="_blank" href="https://github.com/DiyaDShetty"><button><img className="w-6 h-6" src="/social.png" alt="" /></button></a>
                    <a style={{ border: `2px solid ${theme}` }} className="rounded-tl-xs py-1.5 px-4" target="_blank" href="https://www.linkedin.com/in/diya-shetty-880363259"><button><img className="w-6 h-6" src="/linkedin.png" alt="" /></button></a>
                    <a style={{ border: `2px solid ${theme}` }} className="rounded-tl-xs py-1.5 px-4" target="_blank" href="https://leetcode.com/u/diyadshettyy/"><button><img className="w-6 h-6" src="/leetcode.png" alt="" /></button></a>
                </div>
                <button style={{ border: `2px solid ${theme}` }} className="w-fit border-2 border-red rounded-tl-xs py-2 px-10"><a href="/resume.pdf" download="Diya_Shetty_Resume.pdf">
                    Download CV
                </a></button>
            </div>
        </section>
    );
};

export default HeroSection;
