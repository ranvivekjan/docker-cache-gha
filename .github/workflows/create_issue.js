const { Octokit } = require('@octokit/rest');

async function run() {
  const token = process.argv[2];
  const octokit = new Octokit({ auth: token });

  try {
    const response = await octokit.issues.create({
      owner: 'he329178',
      repo: 'gitopscalculator',
      title: 'Manual Approval Required',
      body: 'Please review and approve this workflow run.',
      assignee: 'papannah'
    });

    console.log(`::set-output name=issue_number::${response.data.number}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
