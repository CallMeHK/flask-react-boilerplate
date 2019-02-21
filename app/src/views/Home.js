import React from "react";

export default function Home() {
  return (
    <div>
      <h4>Welcome!</h4>
      <div style={{ margin: "20px" }}>
        <p>
          Welcome to this crappy page that I stuck some examples from the new
          hooks api on a flask server. Check out the code to see some useState, 
          useEffect, and some custom hooks in action.
        </p>
        <p>
          This site and its resources are being served by a Flask server, connected 
          to a mongoDB database.  This is not the best way to do this, but I wanted to 
          do it this way, for science.  The developer environment uses webpack to generate 
          a static js sheet to serve, which uses a version tag to circumvent caching.  
        </p>
        <p>
          This boilerplate will later implement redux hooks and other custom hooks because 
          im doing this for fun.  Hot reloading for js and py files is also on the todo list.  
          Maybe Ill add auth and see where this can take me.  I need to learn more python 
          anyway XD
        </p>
      </div>
    </div>
  );
}
