import { AiFillHome } from "react-icons/ai";
import { FcNext } from "react-icons/fc";
import Link from 'next/link';
import React from 'react';

const BreadCrums = ({ typeNo, title1, title2, title3, title4, link1, link2, link3, link4 }) => {
    return (
        <div className='flex justify-center mt-1' >
            <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 justify-center" aria-label="Breadcrumb" style={{ maxWidth: '90vw', minWidth: "89vw" }}>
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <Link href={`${link1}`}>
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white captialize">
                                <AiFillHome className="mr-1" />
                                {title1}
                            </a>
                        </li>
                    </Link>
                    <Link href={`${link2}`}>
                        <li>
                            <div className="flex items-center">
                                <FcNext />
                                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white captialize">{title2}</a>
                            </div>
                        </li>
                    </Link>
                    {typeNo >= 3 ?
                        <Link href={`${link3}`}>
                            <li>
                                <div className="flex items-center">
                                    <FcNext />
                                    <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white captialize">{title3}</a>
                                </div>
                            </li>
                        </Link>
                        : null}
                    {typeNo >= 4 ?
                        <Link href={`${link4}`}>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <FcNext />
                                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{title4}</span>
                                </div>
                            </li>
                        </Link>
                        : null}
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrums
