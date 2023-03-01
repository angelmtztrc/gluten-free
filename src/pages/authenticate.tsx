const AuthenticatePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-darken-900 px-4">
      <form className="w-full rounded-xl border border-dark-900 p-6">
        <div className="flex flex-col space-y-4">
          <h1 className="mb-6 text-center text-xl font-bold text-white">Log In</h1>
          <input
            type="text"
            className="w-full rounded-lg bg-dark-900 px-4 py-2 text-gray-200 outline-none placeholder:text-gray-900"
            placeholder="john@doe.com"
          />
          <input
            type="text"
            className="w-full rounded-lg bg-dark-900 px-4 py-2 text-gray-200 outline-none placeholder:text-gray-900"
            placeholder="john@doe.com"
          />
          <button className="rounded-lg bg-primary-500 px-4 py-2 text-xs font-bold uppercase text-white">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthenticatePage;
