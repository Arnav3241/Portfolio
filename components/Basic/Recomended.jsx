import React from 'react';
import Link from "next/link";

const Recomended = ({ image, title, description, category, link }) => {
    return (
        <React.Fragment>
            <div className="p-4 md:w-1/3 cursor-pointer">
                <Link href={`${link}`} >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" width={720} height={400} />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{title}</h1>
                            <p className="leading-relaxed mb-3">{description}</p>
                            <div className="flex items-center flex-wrap">
                                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={`${link}`} >Learn More</Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Recomended;