Express Router
========
Directs traffic through a simple server (does not have user-tracking or cookies, just a simple traffic redirector) using Express.js.

Using the public instance
========
The public instance is hosted on https://router-express.glitch.me (though going to the root of this domain redirects you to Glitch). This instance is limited, and if you would like customizable redirects, I would recommend going self-hosted or through Glitch.

**__INCLUDED REDIRECTS WITH THE PUBLIC INSTANCE__**
index.js is an exact copy of the public instance's index.js (as of 4 November 2019), so see that file to check the list of included redirects.

Hosting with Glitch
========
Hosting on Glitch is simple! Simply click [here](https://glitch.com/edit/#!/remix/router-express) and an instance of Express Router will automatically be created for you, with the most up-to-date versions of the instance files (as of the time that you forked/remixed the instance). **Hosting an instance with Glitch is the best option if you want best of both worlds, because you will be getting both customization options** ***and*** **a up-to-date base instance at the time of your fork/remix. If you want to update your index.js file to have the newest redirections, you can click [here](https://glitch.com/edit/#!/router-express?path=index.js:81:0) and copy the newest additions (the additions will be labelled) to your file.**

Self-hosted instances
========
Meanwhile, self-hosting your own instance is trickier than using the using the public instance or hosting with Glitch.


(**!CRITICAL! MAKE SURE PORT 3000 IS ALWAYS OPEN (or open when Express Router is being used) SO EXPRESS ROUTER CAN HOST A WEBSERVER!**)


**__PREREQUISITES AND DEPENDENCIES__**
- Node 8.x or higher
- pm2 or nodemon (optional, recommended for always-on setups)
- Port forwarding (Not needed if hosted on a VPS or similar; Also not needed if the instance is only being used locally)

**Option 1: (WINDOWS ONLY) Using the batch installer**
- 1. Download the [batch installer here](https://github.com/BeanedTaco/express-router/releases) and extract the zip file to the place of your choice.
- 2. Run the script and wait for the batch installer to finish running. Router Express should be in a folder called router-express or express-router. 
- 3. If you encounter an error at the end (a dialog will show up), manually run ``npm install express`` in cmd, directory set to the router-express/express-router folder.
- 4. You can run Router Express by running ``node index.js`` in cmd, directory still set to the router-express/express-router folder.
- 5. If you want to, you can setup pm2, nodemon, or another process manager to automatically run Router Express.

**Option 2: Self-compiling and manually running**
- 1. Download the repository

 - 1a. Use git-scm: In terminal, ``git clone https://github.com/BeanedTaco/express-router.git`` in your desired directory
  
 - 1b. Download from website: Above the latest commit message, click the green button that says "Clone or download", then click "Download ZIP"
- 2. If you downloaded from ZIP, extract the file to the directory of your choice.
- 3. Run in the terminal ``npm install express`` in the directory where the repository download / local clone is located.
- 4. In the terminal again, run ``node index.js``.
- 5. Set up your desired Node process manager like pm2 or nodemon (OPTIONAL).
- 6. You're all set!
