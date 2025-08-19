import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



function Github() {
  // Page load hone pe top par scroll
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    
    const [data, setData] = useState([])
    const[repos,setRepos]= useState([])
    useEffect(() => {

      // get user info (followers, avatar, etc.)

fetch('https://api.github.com/users/Rajveer9554 ')
.then(response => response.json())
.then(data => {
    console.log(data);
    setData(data)
})
//// get repositiories
fetch('https://api.github.com/users/Rajveer9554/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
    }, [])

  return (
     <div className="border rounded-md p-6 bg-gray-700 text-white min-h-screen">
    {/* <div className='   p-2 text-white text-2xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={180}jhtg fdsxz/>
      
    </div> */}

    <div className="flex flex-col md:flex-row items-center gap-2 bg-gray-800 rounded-full p-4  border border-gray-400 hover:border-pink-500 hover:shadow-md transition duration-300">
  <p className="text-2xl md:text-2xl text-pink-500 font-semibold">
   Github Followers: {data.followers}
  </p>
  <div className="group transition-all duration-300">
  <img
    src={data.avatar_url}
    alt="GitHub Avatar"
    className="w-44 h-44 rounded-full border-4 border-orange-900 shadow-lg  
    hover:border-pink-500 hover:shadow-pink-500/50 hover:scale-105 
             transition-all duration-300"
  />
  </div>
  <h1 className=' text-pink-400 font-bold text-5xl  ml-auto pr-10'> Hello! Visitors </h1>
</div>

     
          <h3 className="text-2xl font-semibold mt-8 mb-4">My Repositories:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {repos.map(repo => (
          <div key={repo.id} className="bg-black text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:scale-105 hover:shadow-lg p-4 rounded shadow">
            <h4 className="text-xl font-bold">{repo.name}</h4>
            <p className="text-sm text-gray-400">
              {repo.description ? repo.description : "No description"}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Github

// export const githubInfoLoader = async() => {
//    const response = await fetch('https://api.github.com/users/Rajveer9554')
//    return response.json()
// }

