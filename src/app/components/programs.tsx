import React from 'react';

export const Programs: React.FC = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[110px] py-16 md:py-24 bg-[#fafdff]">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F1728]">
                    Choose Your Path to <span className="text-[#156FEE]">Success</span>
                </h1>
                <p className="text-[#667084] mt-2 sm:mt-3 text-sm sm:text-base">
                    Explore programs built to transform your skills into career opportunities.
                </p>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 md:mt-16">
                {/* Program Card 1 */}
                <div className="p-6 rounded-lg shadow-md bg-white">
                    <div className="flex justify-center">
                        <img src="fullstackdevelopment.svg" alt="Full Stack Development" />
                    </div>
                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#0F1728]">
                        Full Stack Development
                    </h3>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="clock.svg" className="w-3 h-3" alt="Clock" />
                        <span className="text-sm text-[#98A1B2]">Duration:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">5 Months</span>
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="computer.svg" className="w-3 h-3" alt="Computer" />
                        <span className="text-sm text-[#98A1B2]">Mode:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">Online, Offline</span>
                    </p>
                    <div className="mt-4 text-[#667084] space-y-2">
                        {[
                            "Classes by industry experts.",
                            "Face-to-face mock interviews and HR expert sessions.",
                            "Get real-world industry-standard experience.",
                            "Build realistic web applications.",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src="star.svg" className="w-3.5 h-3.5" alt="Star" />
                                <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-2.5 px-4 mt-6 text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                        Curriculum
                    </button>
                </div>

                {/* Program Card 2 */}
                <div className="p-6 rounded-lg shadow-md bg-white">
                    <div className="flex justify-center">
                        <img src="cyber.svg" alt="Cybersecurity" />
                    </div>
                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#0F1728]">
                        Cybersecurity
                    </h3>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="clock.svg" className="w-3 h-3" alt="Clock" />
                        <span className="text-sm text-[#98A1B2]">Duration:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">4 Months</span>
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="computer.svg" className="w-3 h-3" alt="Computer" />
                        <span className="text-sm text-[#98A1B2]">Mode:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">Online, Offline</span>
                    </p>
                    <div className="mt-4 text-[#667084] space-y-2">
                        {[
                            "Live Classes by Industry Experts",
                            "24x7 Doubt Support",
                            "1:1 Mock Interviews and HR Expert Sessions",
                            "Pay After Placement Available",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src="star.svg" className="w-3.5 h-3.5" alt="Star" />
                                <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-2.5 px-4 mt-6 text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                        Curriculum
                    </button>
                </div>

                {/* Program Card 3 */}
                <div className="p-6 rounded-lg shadow-md bg-white">
                    <div className="flex justify-center">
                        <img src="softskill.svg" alt="Soft Skills" />
                    </div>
                    <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-[#0F1728]">
                        Soft Skills Development
                    </h3>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="clock.svg" className="w-3 h-3" alt="Clock" />
                        <span className="text-sm text-[#98A1B2]">Duration:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">2 Months</span>
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                        <img src="computer.svg" className="w-3 h-3" alt="Computer" />
                        <span className="text-sm text-[#98A1B2]">Mode:</span>
                        <span className="text-sm sm:text-base text-[#475466] font-semibold">Online, Offline</span>
                    </p>
                    <div className="mt-4 text-[#667084] space-y-2">
                        {[
                            "Classes by industry experts.",
                            "One-to-one mock interviews.",
                            "Designed to improve your soft skills, which are mandatory in today's job market.",
                            "N number of group discussions, storytelling classes, and group debates will be conducted.",
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <img src="star.svg" className="w-3.5 h-3.5" alt="Star" />
                                <span className="text-sm sm:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-2.5 px-4 mt-6 text-[#175cd3] bg-[#eff8ff] rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                        Curriculum
                    </button>
                </div>
            </div>
        </div>
    );
};