const express = require("express")
const app = express()


const port = 5001

app.get('/api', (req, res) => {
    const slack_name = "demmydev";
    const track = "backend";
    
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toISOString();
  
    const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext'; // Replace with your actual file URL
    const githubRepoUrl = 'https://github.com/Demmy100?tab=repositories'; // Replace with your actual repo URL
  
    const response = {
      slack_name,
      current_day: currentDay,
      utc_time: utcTime,
      track,
      github_file_url: githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    };
  //http://example.com/api?slack_name=demmydev&track=backend
    res.json(response);
  });
  
  
app.listen(port, () => {
    console.log("App listening on port:", port)
})