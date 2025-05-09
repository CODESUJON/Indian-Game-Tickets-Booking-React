

function Signin() {
    
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-rose-500 mb-6">Sign In</h2>

                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500 outline-none"
                        />
                    </div>

                    {/* Remember me & Forgot password */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <label className="flex items-center gap-1">
                            <input type="checkbox" className="accent-rose-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-rose-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Sign Up Redirect */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a href="#" className="text-rose-500 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Signin