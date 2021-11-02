const app = Vue.createApp({
    data() {
        return {
            games: [{
                id: 6655,
                season_id: 2021,
                name: "Buf  v Pit ",
                date: "2021-11-16",
                time: "19:00:00",
                guessing_date: "2021-10-31",
                accuracy: true,
            }],
            players: [{
                player_key: 14093,
                player_name: "Sidney Crosby",
                team_name: "Pittsburgh Penguins",
                games_played: 8, 
                games_left: 74,
                actual_score: "--",
                score: 0.6279577,
                scaling_factor: 1.3276819040833276,
                boost: 32.77,
                average_score: 0.472973,
                schedule: 1,
                x_factor: 0.97,
                gga: 1.1442377,
                home_away: 1.1962062
            },
            {
                player_key: 14093,
                player_name: "Jeff Carter",
                team_name: "Pittsburgh Penguins",
                games_played: 8, 
                games_left: 74,
                actual_score: "--",
                score: 0.4903876,
                scaling_factor: 1.7280323514908,
                boost: 72.8,
                average_score: 0.472973,
                schedule: 1,
                x_factor: 0.97,
                gga: 1.1442377,
                home_away: 1.1962062
            }
        ],
        }

    }

})

app.mount('#app')