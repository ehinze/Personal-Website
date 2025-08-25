import React from "react";
import { Link } from "react-router-dom";

export default function Workexperience() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
                        Projects & Work Experience
                    </h1>


                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Frontend Developer Intern – United Bank for Africa (UBA)
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Role:</strong> Frontend Developer (BPA Team)
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Built responsive investigator interface using React and Tailwind CSS.</li>
                            <li>Developed modals, short forms, and in-app approval components.</li>
                            <li>Collaborated with UI/UX designers using Figma mockups.</li>
                            <li>Used GitLab for version control and team collaboration.</li>
                        </ul>
                    </div>


                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Blog Website</h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Tech Stack:</strong> React, Tailwind CSS, React Router
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Designed and built a personal blog to showcase projects and CV.</li>
                            <li>Implemented routing for About, Projects, and Home pages.</li>
                            <li>Integrated image overlays and mobile responsiveness.</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Support Ticket System (Prototype)</h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Tech Stack:</strong> React, Tailwind CSS, LocalStorage
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Created a frontend prototype of a support ticketing system with dynamic UI components.</li>
                            <li>Simulated key ticketing features—creation, status updates, and prioritization—without database integration.</li>
                            <li>Designed a responsive and clean interface, laying the groundwork for future backend integration.</li>
                             <li> <a href="https://ehinze.github.io/support_ticket_system/" className="text-blue-500">Live Demo</a></li>
                        </ul>
                    </div>


                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Birthday Web Page</h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Tech Stack:</strong> HTML, CSS, JavaScript,React
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Designed and built an interactive birthday webpage with personalized elements.</li>
                            <li>Integrated dynamic animations and interactive components to enhance user experience.</li>
                            <li>Created a responsive design ensuring it works seamlessly on mobile and desktop devices.</li>
                            <li>Focused on clean, attractive UI and smooth user interaction.</li>
                           <li> <a href="https://github.com/ehinze/Birthday_Webpage.git" className="text-blue-500">Git hub repository</a></li>
                        </ul>
                    </div>


                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Version Control & Deployment</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Used Git and GitLab for branching, committing, and collaborating in teams.</li>
                            <li>Deployed React projects on Netlify with production-ready builds.</li>
                        </ul>
                    </div>
                    <div className="flex items-end justify-end">
                    <Link to="/About" className="mt-6 w-48 bg-green-700 text-white flex items-center justify-center  font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition-all duration-300"
                    >
                        Back
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}