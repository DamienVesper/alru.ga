import React from 'react';


const App = () => {
  return (
    <div className="pt-12">
      <h1 className="text-4xl text-indigo-300 text-center">Welcome to Aliance Reunited</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex">
        <div className="ml-12 w-1/4 mr-24">
          <iframe src="https://discord.com/widget?id=757079346719621150&theme=dark" title="Discord" width="100%" height={500} frameBorder={0} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />

        </div>
        <div className="flex-auto">
          <div style={{width: "60rem"}}>
              <h1 className="text-3xl text-white">Who are we?</h1>
              <p className="mt-4 ml-4 text-white">
                Reuniting friends, family, and forgotten organizations, we are a community bringing together these scattered groups as one.
                We've also been hosting servers for various different games since November 15, 2020, for the community, and more. Join our Discord to be part of our amazing community today!
              </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="grid grid-cols-3 gap-4 ml-48 mr-64">
            <div className="">
              <div className="border-2  text-center border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
                Minecraft
              </div>
            </div>

            <div className="">
              <div className="border-2 text-center border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
                GMod
              </div>
            </div>

            <div className="">
              <div className="border-2 text-center border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200">
                COD4X
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
