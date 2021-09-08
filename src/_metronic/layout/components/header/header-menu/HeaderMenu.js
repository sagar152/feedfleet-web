/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import {  checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Classic Review-Campaign*/}
            {/*begin::1 Level*/}
            <li
                className={`menu-item ${getMenuItemActive('/campaigns', false)}`}
                // data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link" to="/campaigns">
                    <span className="menu-text">Review-Campaign</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                
            </li>
            {/*end::1 Level*/}

            {/*Videos*/}
            {/*begin::1 Level*/}
            <li
                className={`menu-item  ${getMenuItemActive('/videos')}`}
                // data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link" to="/videos">
                    <span className="menu-text">Videos</span>
                    <i className="menu-arrow"></i>
                </NavLink>
              
            </li>

            {/*Insights*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/custom')}`}>
                <NavLink className="menu-link menu-toggle" to="/custom">
                    <span className="menu-text">Insights</span>
                    <i className="menu-arrow"></i>
                </NavLink>
               
            </li>
            {/*end::1 Level*/}

             {/*begin::1 Level*/}
             {/* <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/custom')}`}>
                <NavLink className="menu-link menu-toggle" to="/custom">
                    <span className="menu-text">Insights</span>
                    <i className="menu-arrow"></i>
                </NavLink>
               
            </li> */}
            {/*end::1 Level*/}

             {/*begin::1 Level*/}
             <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/custom')}`}>
                <NavLink className="menu-link menu-toggle" to="/custom">
                    <span className="menu-text">Fleet Video</span>
                    <i className="menu-arrow"></i>
                </NavLink>
               
            </li>
            {/*end::1 Level*/}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
