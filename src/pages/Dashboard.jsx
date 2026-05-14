const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Welcome to your Employee Management System</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6">
          <div className="text-sm text-slate-500 mb-2">Total Employees</div>
          <div className="text-3xl font-semibold text-slate-900">128</div>
          <div className="text-sm text-emerald-600 mt-2">+12% from last month</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-500 mb-2">Present Today</div>
          <div className="text-3xl font-semibold text-slate-900">115</div>
          <div className="text-sm text-slate-500 mt-2">90% attendance</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-500 mb-2">Pending Leaves</div>
          <div className="text-3xl font-semibold text-slate-900">8</div>
          <div className="text-sm text-amber-600 mt-2">Requires attention</div>
        </div>
        <div className="card p-6">
          <div className="text-sm text-slate-500 mb-2">Payroll This Month</div>
          <div className="text-3xl font-semibold text-slate-900">$142K</div>
          <div className="text-sm text-slate-500 mt-2">Processed on time</div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">JD</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-900">John Doe requested leave</div>
              <div className="text-xs text-slate-500">2 hours ago</div>
            </div>
            <span className="badge badge-warning">Pending</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">AS</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-900">Alice Smith joined</div>
              <div className="text-xs text-slate-500">Yesterday</div>
            </div>
            <span className="badge badge-success">New</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">MJ</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-900">Payroll generated for April</div>
              <div className="text-xs text-slate-500">2 days ago</div>
            </div>
            <span className="badge badge-success">Done</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
