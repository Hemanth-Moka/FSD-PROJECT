import React from 'react'

export default function AdminNavbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-between bg-gray-800 text-white p-4">
          <li className="mr-6"><a href="/admin/dashboard">Dashboard</a></li>
          <li className="mr-6"><a href="/admin/manage-users">Manage Users</a></li>
          <li className="mr-6"><a href="/admin/manage-events">Manage Events</a></li>
          <li className="mr-6"><a href="/admin/manage-bookings">Manage Bookings</a></li>
          <li className="mr-6"><a href="/admin/reports">Reports</a></li>
          <li className="mr-6"><a href="/admin/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}
