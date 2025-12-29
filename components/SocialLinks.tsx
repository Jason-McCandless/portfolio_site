import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiBriefcase } from "react-icons/fi";

export default function SocialLinks() {
    return (
        <div className="flex gap-4 mt-4">
            <a
                href="https://github.com/Jason-McCandless"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-blue-400 transition text-2xl"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="mailto:Jason.McCandless@outlook.com"
                className="text-zinc-600 dark:text-zinc-300 hover:text-green-600 dark:hover:text-blue-400 transition text-2xl"
                aria-label="Email"
            >
                <FiMail />
            </a>
            <a
                href="https://www.linkedin.com/in/jason-g-mccandless/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://www.upwork.com/freelancers/~01cdc7fc3efad23059"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-green-400 transition text-2xl"
                aria-label="Upwork"
            >
                <FiBriefcase />
            </a>
        </div>
    );
}