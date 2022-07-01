import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-100 px-20 text-lg font-semibold bg-slate-400 py-5">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="completed">COMPLETED TASKS</Link></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                </a>
              </li>
              <li><a>CALENDAR</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">TO-DO APP</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><Link to="completed">COMPLETED TASKS</Link></li>
            <li><Link to="toDo">TO-DO</Link></li>
            <li><Link to="calendar">CALENDAR</Link></li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn btn-outline rounded-3xl">Log in</a>
        </div>
      </div>
    );
};

export default Header;