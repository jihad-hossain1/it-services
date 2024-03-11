const Login = () => {
  return (
    <div className="">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:block hidden lg:text-left h-full w-full  ">
            <img
              className="h-full object-cover"
              src="https://i.ibb.co/DpXydjr/vecteezy-cloud-computing-modern-flat-concept-for-web-banner-design-5879539-removebg-preview-3.png"
              alt=""
            />
          </div>
          <div className=" border-2 border-white card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit="handle" className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
             
                /> */}{" "}
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                <input
                  type="text"
                  name="test"
                  placeholder="test"
                  className="input hidden input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="flex justify-start mt-2"> </label>
              </div>
              <div className="form-control mt-6">
                <button className="hover:bg-blue-500 btn bg-red-500 btn-primary border-0 text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center w-full">
              <button
                onClick="dummy"
                className="hover:bg-blue-500 lg:w-[320px] w-[220px] btn mt-1 mb-5  bg-red-500 border-0 text-white"
              >
                Log In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
