import React from 'react'

export const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className="w-1/2 bg-black grid grid-cols-12">
            <input
                type="text"
                placeholder="Search for movies, shows, or actors"
                className="col-span-9 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
                type="submit"
                className="col-span-3 bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition duration-200"
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;