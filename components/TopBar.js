import React from 'react';
import {SearchIcon, AtSymbolIcon, BellIcon, ChevronDownIcon, PlusIcon,ChatAlt2Icon} from '@heroicons/react/outline';
import Image from 'next/image';
function TopBar(props) {
    return (
        <div className="h-16 fixed  flex items-center justify-between pr-5 header-sec">
            <ul className="flex space-x-3 header-sec-one">
            <li className='header-left-img'>
                <div>
                <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                objectFit="cover"
                height="30"
                width="30"
                className=" rounded-full header-left-img-icon"
              />
                </div>
                <div>
                <span className="left-img-number one">15</span>
                </div>
            </li>
            <li className='header-left-img'>
                <div>
                <Image
                src="https://randomuser.me/api/portraits/men/76.jpg"
                objectFit="cover"
                className=" rounded-full header-left-img-icon"
                height="30"
                width="30"
              />
                </div>
                <div><span className="left-img-number two">11</span></div>
            </li>
            <ChevronDownIcon
              className="w-9 h-9 text-gray-500 rounded-full
            p-1 bg-white ml-5"
            /> 
          </ul>
          <span className='header-plus'>
          <PlusIcon className="header-plus-icon" />
          </span>
            <div className="flex px-5 items-center search-icon-sec">
                <SearchIcon className="w-5 h-5 search-icon"/>
                <input type="text" placeholder="Search for tasks ..."
                className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg"/>
            </div>
            <div className="flex space-x-6">
                <AtSymbolIcon className="header-right-icon"/>
                <BellIcon className="header-right-icon"/>
                <ChatAlt2Icon className="header-right-icon" />
                <div className="flex items-center">
                    <Image src="https://randomuser.me/api/portraits/men/75.jpg"
                        width="36" height="36" objectFit="cover"
                        className=" rounded-full "/>
                </div>

            </div>
        </div>
    );
}

export default TopBar;