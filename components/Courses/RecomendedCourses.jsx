import Image from 'next/image';
import React from 'react';

const Recomended = ({ image, title, description, category }) => {
    return (
        <React.Fragment>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                    <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" width={720} height={400} />
                    <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        <p className="leading-relaxed mb-3">{description}</p>
                        <div className="flex items-center flex-wrap">
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Recomended;