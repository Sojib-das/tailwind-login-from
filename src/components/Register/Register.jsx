const Register = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are no member, easily Register
            </p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="test"
                name="name"
                placeholder="Name"
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Register
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Log in
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/free-photo/teenager-student-arm-studio-body_1301-1902.jpg?t=st=1713307677~exp=1713311277~hmac=9a3664f53e91237519ded0363339f4744e3270ffb80e33e5f681f5ddc77bb458&w=740"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
