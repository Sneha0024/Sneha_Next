import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { UserGroupIcon, ServerIcon, BellIcon,AtSymbolIcon, CalendarIcon, ChartSquareBarIcon, DashboardIcon,
    CogIcon } from '@heroicons/react/outline';
    
const menuItems = [
  { id: 1, label: "Dashboard", icon: ChartSquareBarIcon, link: "/" },
  { id: 2, label: "Workflow", icon: ServerIcon, link: "/posts" },
  { id: 3, label: "Calendar", icon: CalendarIcon, link: "/users" },
  { id: 4, label: "SocialRM", icon: AtSymbolIcon, link: "/tutorials" },
  { id: 5, label: "Metrics", icon: ChartSquareBarIcon, link: "/tutorials" },
  { id: 6, label: "Leads", icon: ServerIcon, link: "/tutorials" },
  { id: 7, label: "Users", icon: UserGroupIcon, link: "/tutorials" },
  { id: 8, label: "Notifications", icon: BellIcon, link: "/tutorials" },
  { id: 9, label: "Documents", icon: ChartSquareBarIcon, link: "/tutorials" },
  { id: 10, label: "Segments", icon: UserGroupIcon, link: "/tutorials" },
];
import Image from 'next/image'


const Sidebar = (props) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "sidebar-sec",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "px-4 rounded bg-light-lighter absolute right-0 bg-white",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
        <div className="flex flex-col relative">
          <div className="flex items-center pl-1 gap-4 pb-6">
            {/* <LogoIcon /> */}
            {!toggleCollapse && 
            <Image height={30} width={30} src="/images/greenCircle.png"/>
}
            <span
              className={classNames("text-lg font-bold text-text", {
                hidden: toggleCollapse,
              })}
            >
              Zaan Corp
            </span>
          </div>
          <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              {/* <CollapsIcon /> */}
              {/* <Image height={30} width={30} src="/images/arrow.svg"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>

            </button>
        <div className="flex flex-col items-start sidebar-items">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="menu-name">
                    <div style={{ width: "25px" }}>
                      <Icon/>
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-400 text-text-light px-3"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            {/* Logout */}
          </span>
        )}
      </div>
    </div>
      );
};

export default Sidebar;
