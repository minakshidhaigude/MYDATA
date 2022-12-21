const teamStructure = {
  name: "Kunal",
  teams: [
    {
      name: "Harish",
      teams: [
        {
          name: "Alisha",
          teams: [
            {
              name: "Yash",
              teams: [],
            },
          ],
        },
      ],
    },
    {
      name: "Anurag",
      teams: [],
    },
  ],
};
function getTeamDetail(t) {
  if (t.teams.length === 0) return;
  t.teams.forEach((team) => {
    console.log(team);
    getTeamDetail(team);
  });
}
getTeamDetail(teamStructure);
