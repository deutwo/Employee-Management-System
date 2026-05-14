import { Link, useNavigate } from 'react-router-dom';

const LoginSide = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="admin@quickems.com"
              defaultValue="admin@quickems.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              defaultValue="password"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-center md:text-left text-sm text-slate-500">
            Don't have an account?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Contact Administrator
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Demo credentials: admin@quickems.com / password
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSide;
