"use client";

import profilepicture from '../media/profilephoto.jpeg';
import FloatingLines from "../components/FloatingLines";
import SocialLinks from "../components/SocialLinks";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex flex-col py-20 items-center justify-center bg-gradient-to-br from-zinc-50 to-blue-100 dark:from-black dark:to-zinc-900 font-sans overflow-auto">
      {/* FloatingLines background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingLines linesGradient={["#38bdf8", "#22d3ee", "#4ade80"]} />
      </div>
      <main className="relative z-10 flex flex-col items-center w-full max-w-2xl py-20 px-8 bg-white/80 dark:bg-zinc-950/80 rounded-xl shadow-xl">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
            <img
              src={profilepicture.src}
              alt="Jason McCandless"
              className="w-36 h-36 object-cover object-center"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
            Jason McCandless
          </h1>
          <h2 className="text-xl text-blue-700 dark:text-blue-300 mb-4">
            Data Platform Engineer &#8594; Full Stack Developer
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-center mb-6 max-w-md">
            After years in platform and data engineering, I’m channeling my passion into building full stack web applications.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 text-center mb-6 max-w-md">
            My other interests include golf, travelling, & online gaming.
          </p>
          {/* <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">JavaScript</span>
            <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-semibold">TypeScript</span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">React</span>
            <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
          </div> */}
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
            Contact me below!
          </h3>
          <SocialLinks />
        </div>

        {/* Career Timeline Section */}
        <section className="w-full mt-12">
          <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Career Timeline</h3>
          <ul className="space-y-4 border-l-2 border-blue-200 dark:border-blue-900 pl-6">
            <li>
              <div className="font-semibold text-blue-700 dark:text-blue-300">2025–Present</div>
              <div>Freelance Full Stack</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Building a portfolio of web applications. Undertaking the <b>AWS Cloud Practitioner</b> certification course.</div>
            </li>
            <li>
              <div className="font-semibold text-blue-700 dark:text-blue-300">2022–2025</div>
              <div>Data Platform Engineer</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Integrated a vended Feature Store (Hopsworks) into the data pipeline. Managed ~120 RHEL Servers across 2 data centers and 3 environments. Worked with Data Scientists and other key stakeholders to enhance data accessibility and usability. Attended regular CAB meetings to demonstrate platform changes for production deployment. Delivered a smoke test suite to continuously validate platform uptime and serve as an early-warning system.</div>
              <br></br>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm"><b>Tech:</b> Hopsworks, Apache Kafka, Java, Python, BASH, RHEL 8, Ansible (Infrastructure as Code), Github for version control</div>
            </li>
            <li>
              <div className="font-semibold text-blue-700 dark:text-blue-300">2021–2022</div>
              <div>Big Data Engineer</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Worked with the Policy data team before it merged with Claims and Quotes to form a Data Lake. From there onwards I supported Claims, Quotes, and Policy MDMs existing applications as the Data Lake team began to build out new infrastructure.
              </div>
              <br></br>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm"><b>Tech:</b> Dremio, Spark/Scala, Unix</div>
            </li>
            <li>
              <div className="font-semibold text-blue-700 dark:text-blue-300">2019-2020</div>
              <div>Test Data Analyst</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Worked within the Privacy department's Obfuscation team. Used data masking techniques to protect sensitive information using Ab Initio and Delphix. Engineered a dashboard within our Obfuscation as a Service tool to extract and visualize obfuscation metrics.</div>
              <br></br>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm"><b>Tech:</b> Ab Initio, Delphix, Bash, RHEL, SQL, ETL</div>
            </li>
            {/* Add more timeline items as needed */}
          </ul>
        </section>

        {/* Projects Section */}
        <section className="w-full mt-12">
          <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Side Projects</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-semibold text-blue-700 dark:text-blue-300">Greensided</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">A golf-themed social media platform.</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Users can create accounts, share their golfing experiences, and connect with other golf enthusiasts. They can sign up to clubs and participate in discussions/competitions, as well as log rounds across the world.</div>
              <br></br>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm"><b>Tech:</b> HTML, CSS, SQL, RESTful APIs, Next.js, TypeScript, Mantine, Vercel, Render, Supabase</div>
              <a href="https://greensided.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Visit the site</a>
            </li>
            <li>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Upcoming Projects</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">These are projects I am currently working on or planning to start soon to expand my skill set:</p>
              <br></br>
              <div className="font-semibold">Task Tracker</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Task management tool built with React Native.</div>
              {/* <a href="https://github.com/yourusername/open-source-widget" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black dark:text-blue-400 hover:underline text-sm">
                <FaGithub className="text-lg" />
                View on GitHub
              </a> */}
            </li>
            <li>
              <div className="font-semibold">Pet-Sitting Service App</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm">Flask app for connecting pet owners with sitters, with GraphQL.</div>
              {/* <a href="https://github.com/yourusername/open-source-widget" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black dark:text-blue-400 hover:underline text-sm">
                <FaGithub className="text-lg" />
                View on GitHub
              </a> */}
            </li>
            {/* Room for extra projects */}
          </ul>
        </section>
      </main>
    </div>
  );
}