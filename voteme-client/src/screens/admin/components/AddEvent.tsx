import React from "react";

const AddEvent = () => {
  return (
    <>
      <div className="w-full flex items-center text-lg">
        <form
          action=""
          className="p-5  shadow-6xl hover:shadow-lg bg-blue-dark w-50 rounded"
        >
          <div className="shadow ">
            <div className="flex items-center  rounded-t-lg border-blue-dark200 border-b">
              <label
                htmlFor="name"
                className="w-30 text-right mr-8 p-4 text-purple-200"
              >
                Event Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Put in your name"
                className="w-lg flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>
            <div className="flex items-center  rounded-t-lg border-blue-dark200 border-b">
              <label
                htmlFor="small"
                className="w-45 text-right mr-8 p-4 text-purple-200"
              >
                Event Type
              </label>
              <select
                id="small"
                className="flex-1 p-4 bg-transparent placeholder-purple-300 bg-gray-50 rounded-lg boutline-none border-0 dark:focus:ring-blue-500"
              >
                <option
                  className="w-lg flex-1 pl-0 bg-blue-dark200 placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                  value="public"
                >
                  public
                </option>
                <option
                  className="w-lg flex-1 pl-0 bg-blue-dark placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hiddens"
                  value="private"
                >
                  private
                </option>
              </select>
            </div>
            <div className="flex items-center  rounded-t-lg border-blue-dark200 border-b ">
              <label
                htmlFor="name"
                className="w-30 text-right mr-8 p-4 text-purple-200"
              >
                Event imgurl
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Put in your name"
                className="w-lg flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex items-center bg-purple-400  rounded-b-lg border-blue-dark200 border-b mb-10">
              <label
                htmlFor="twitter"
                className="w-30 text-right p-4 mr-8 text-purple-200"
              >
                Sort Desc
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="E.g asc voting"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>
          </div>
          <button className="bg-blue-dark200 block w-full rounded py-2 text-white font-bold shadow">
            Create Event
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEvent;
