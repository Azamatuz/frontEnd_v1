const games = [
{
    // "id": 6655,
    // "season-id": 2021,
    // "name": "Buf  v Pit ",
    // "date": "2021-11-16",
    // "time": "19:00:00",
    // "guessing-date": "2021-10-31",
    // "accuracy": true,
    "away-team": {
        "id": 3,
        "team-key": "l.nhl.com-t.12",
        "team-gaa": 3.2,
        "team-gaa-rank": 21,
        "name": "Buffalo Sabres",
        "abbreviation": "Buf",
        "guessing-score": 2.629979,
        "actual-score": 0,
    //     "players": [{
    //             "player-key": 26068,
    //             "player-name": "Brett Murray",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 2, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20931,
    //             "player-name": "Christian Wolanin",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 10, \"orig-games-played-home\": 8, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 12293,
    //             "player-name": "Craig Anderson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 20, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 13952,
    //             "player-name": "Sabres Buffalo",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 0, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 15725,
    //             "player-name": "Kyle Okposo",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 2, \"predicted-assists-season\": 16, \"predicted-games-played-season\": 57, \"predicted-goals-season\": 7}",
    //                     "score": "0.0666667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 18, \"orig-games-played-home\": 24, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 7, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 2}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 7, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"percentage\": 0, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"percentage\": 1, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0626846,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.0666667
    //             }
    //         },
    //         {
    //             "player-key": 16031,
    //             "player-name": "Dustin Tokarski",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 1, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 17455,
    //             "player-name": "Cody Eakin",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 11, \"predicted-games-played-season\": 79, \"predicted-goals-season\": 11}",
    //                     "score": "0.1333333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 22, \"orig-games-played-home\": 27, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 11, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 11, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 11, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 11, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.125369,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.1333333
    //             }
    //         },
    //         {
    //             "player-key": 17896,
    //             "player-name": "Jeff Skinner",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 17, \"predicted-games-played-season\": 78, \"predicted-goals-season\": 17}",
    //                     "score": "0.2133333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 28, \"orig-games-played-home\": 32, \"orig-goals-scored-away\": 6, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 17, \"scaling-factor\": 0.9521086, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.9521086,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 17, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 17, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 17, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2005905,
    //                 "scaling_factor": 0.9402681774503999,
    //                 "boost": -5.97,
    //                 "average_score": 0.2133333
    //             }
    //         },
    //         {
    //             "player-key": 17919,
    //             "player-name": "Mark Pysyk",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 8, \"predicted-games-played-season\": 75, \"predicted-goals-season\": 4}",
    //                     "score": "0.0533333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 21, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 4, \"scaling-factor\": 0.9521081, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521081,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 4, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 4, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 4, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0501476,
    //                 "scaling_factor": 0.9402676836684,
    //                 "boost": -5.97,
    //                 "average_score": 0.0533333
    //             }
    //         },
    //         {
    //             "player-key": 19220,
    //             "player-name": "Colin Miller",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 5, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 9, \"predicted-games-played-season\": 57, \"predicted-goals-season\": 3}",
    //                     "score": "0.04"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 26, \"orig-games-played-home\": 29, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 0.9521075, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521075,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 3, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0376107,
    //                 "scaling_factor": 0.94026709113,
    //                 "boost": -5.97,
    //                 "average_score": 0.04
    //             }
    //         },
    //         {
    //             "player-key": 19312,
    //             "player-name": "Drake Caggiula",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 8, \"predicted-games-played-season\": 51, \"predicted-goals-season\": 3}",
    //                     "score": "0.0266667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 20, \"orig-games-played-home\": 25, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 3, \"scaling-factor\": 0.95211, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.95211,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 3, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0250739,
    //                 "scaling_factor": 0.9402695600400001,
    //                 "boost": -5.97,
    //                 "average_score": 0.0266667
    //             }
    //         },
    //         {
    //             "player-key": 19356,
    //             "player-name": "Zemgus Girgensons",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 3, \"predicted-assists-season\": 11, \"predicted-games-played-season\": 68, \"predicted-goals-season\": 10}",
    //                     "score": "0.0933333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 2, \"orig-games-played-home\": 5, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 10, \"scaling-factor\": 0.9521089, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 2}",
    //                     "scaling_factor": 0.9521089,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 10, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0877584,
    //                 "scaling_factor": 0.9402684737196,
    //                 "boost": -5.97,
    //                 "average_score": 0.0933333
    //             }
    //         },
    //         {
    //             "player-key": 19603,
    //             "player-name": "Vinnie Hinostroza",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 12, \"predicted-games-played-season\": 70, \"predicted-goals-season\": 9}",
    //                     "score": "0.1066667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 15, \"orig-games-played-home\": 18, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 5, \"predicted-goals-season\": 9, \"scaling-factor\": 0.9521081, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.9521081,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 9, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 9, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 9, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1002953,
    //                 "scaling_factor": 0.9402676836684,
    //                 "boost": -5.97,
    //                 "average_score": 0.1066667
    //             }
    //         },
    //         {
    //             "player-key": 19863,
    //             "player-name": "Jack Eichel",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 40, \"predicted-games-played-season\": 77, \"predicted-goals-season\": 26}",
    //                     "score": "0.3466667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 12, \"orig-games-played-home\": 9, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 26, \"scaling-factor\": 0.9521083, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521083,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 26, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.3259596,
    //                 "scaling_factor": 0.9402678811812,
    //                 "boost": -5.97,
    //                 "average_score": 0.3466667
    //             }
    //         },
    //         {
    //             "player-key": 20122,
    //             "player-name": "Will Butcher",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 15, \"predicted-games-played-season\": 62, \"predicted-goals-season\": 5}",
    //                     "score": "0.0666667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 13, \"orig-games-played-home\": 16, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 5, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 5, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 5, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 5, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0626846,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.0666667
    //             }
    //         },
    //         {
    //             "player-key": 20193,
    //             "player-name": "Robert Hagg",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0133333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 19, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0133333
    //             }
    //         },
    //         {
    //             "player-key": 20202,
    //             "player-name": "John Hayden",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 17, \"orig-games-played-home\": 16, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20800,
    //             "player-name": "Anders Bjork",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 14, \"predicted-games-played-season\": 80, \"predicted-goals-season\": 14}",
    //                     "score": "0.1733333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 24, \"orig-games-played-home\": 28, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 14, \"scaling-factor\": 0.9521083, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.9521083,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 14, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 14, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 14, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1629797,
    //                 "scaling_factor": 0.9402678811812,
    //                 "boost": -5.97,
    //                 "average_score": 0.1733333
    //             }
    //         },
    //         {
    //             "player-key": 20957,
    //             "player-name": "Victor Olofsson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 4, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 4, \"predicted-assists-season\": 28, \"predicted-games-played-season\": 79, \"predicted-goals-season\": 19}",
    //                     "score": "0.2"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 30, \"orig-games-played-home\": 33, \"orig-goals-scored-away\": 7, \"orig-goals-scored-home\": 10, \"predicted-goals-season\": 19, \"scaling-factor\": 0.8746025, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 4}",
    //                     "scaling_factor": 0.8746025,
    //                     "boost": -12.54
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 4, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 19, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 4, \"percentage\": 0, \"predicted-goals-season\": 19, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 4, \"percentage\": 1, \"predicted-goals-season\": 19, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1727452,
    //                 "scaling_factor": 0.86372594331,
    //                 "boost": -13.63,
    //                 "average_score": 0.2
    //             }
    //         },
    //         {
    //             "player-key": 21735,
    //             "player-name": "Andrew Oglevie",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 21785,
    //             "player-name": "Rasmus Dahlin",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 4, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 35, \"predicted-games-played-season\": 82, \"predicted-goals-season\": 7}",
    //                     "score": "0.0933333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 30, \"orig-games-played-home\": 33, \"orig-goals-scored-away\": 3, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 7, \"scaling-factor\": 0.9521089, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521089,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 7, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0877584,
    //                 "scaling_factor": 0.9402684737196,
    //                 "boost": -5.97,
    //                 "average_score": 0.0933333
    //             }
    //         },
    //         {
    //             "player-key": 25970,
    //             "player-name": "Tage Thompson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 2, \"predicted-assists-season\": 12, \"predicted-games-played-season\": 69, \"predicted-goals-season\": 12}",
    //                     "score": "0.1333333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 17, \"orig-games-played-home\": 28, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 8, \"predicted-goals-season\": 12, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 2}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 12, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"percentage\": 0, \"predicted-goals-season\": 12, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 2, \"percentage\": 1, \"predicted-goals-season\": 12, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.125369,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.1333333
    //             }
    //         },
    //         {
    //             "player-key": 25984,
    //             "player-name": "Rasmus Asplund",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 3, \"predicted-assists-season\": 20, \"predicted-games-played-season\": 78, \"predicted-goals-season\": 20}",
    //                     "score": "0.2266667"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 16, \"orig-games-played-home\": 19, \"orig-goals-scored-away\": 6, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 20, \"scaling-factor\": 0.9521082, \"season-goals-scored-away\": 2, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0.9521082,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 20, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 20, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 20, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2131274,
    //                 "scaling_factor": 0.9402677824247999,
    //                 "boost": -5.97,
    //                 "average_score": 0.2266667
    //             }
    //         },
    //         {
    //             "player-key": 26332,
    //             "player-name": "Arttu Ruotsalainen",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 20, \"predicted-games-played-season\": 77, \"predicted-goals-season\": 23}",
    //                     "score": "0.2933333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 11, \"orig-games-played-home\": 12, \"orig-goals-scored-away\": 3, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 23, \"scaling-factor\": 0.9521083, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521083,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 23, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 23, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 23, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2758119,
    //                 "scaling_factor": 0.9402678811812,
    //                 "boost": -5.97,
    //                 "average_score": 0.2933333
    //             }
    //         },
    //         {
    //             "player-key": 26493,
    //             "player-name": "Jacob Bryson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 14, \"predicted-games-played-season\": 74, \"predicted-goals-season\": 4}",
    //                     "score": "0.0533333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 22, \"orig-games-played-home\": 23, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 4, \"scaling-factor\": 0.9521081, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521081,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 4, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 4, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 4, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0501476,
    //                 "scaling_factor": 0.9402676836684,
    //                 "boost": -5.97,
    //                 "average_score": 0.0533333
    //             }
    //         },
    //         {
    //             "player-key": 26524,
    //             "player-name": "Henri Jokiharju",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 15, \"predicted-games-played-season\": 80, \"predicted-goals-season\": 6}",
    //                     "score": "0.08"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 25, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 6, \"scaling-factor\": 0.9521088, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521088,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 6, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 6, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 6, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0752215,
    //                 "scaling_factor": 0.9402683749631999,
    //                 "boost": -5.97,
    //                 "average_score": 0.08
    //             }
    //         },
    //         {
    //             "player-key": 26613,
    //             "player-name": "Casey Mittelstadt",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 18, \"predicted-games-played-season\": 76, \"predicted-goals-season\": 15}",
    //                     "score": "0.2"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 20, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 6, \"predicted-goals-season\": 15, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 15, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 15, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 15, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1880536,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.2
    //             }
    //         },
    //         {
    //             "player-key": 27213,
    //             "player-name": "Mattias Samuelsson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 12, \"predicted-games-played-season\": 67, \"predicted-goals-season\": 1}",
    //                     "score": "0.0133333"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 6, \"orig-games-played-home\": 6, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 1, \"scaling-factor\": 0.95211, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.95211,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 1, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 1, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 1, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0125369,
    //                 "scaling_factor": 0.9402695600400001,
    //                 "boost": -5.97,
    //                 "average_score": 0.0133333
    //             }
    //         },
    //         {
    //             "player-key": 27450,
    //             "player-name": "Dylan Cozens",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 1, \"predicted-assists-season\": 23, \"predicted-games-played-season\": 80, \"predicted-goals-season\": 16}",
    //                     "score": "0.2"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 26, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 16, \"scaling-factor\": 0.9521085, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9521085,
    //                     "boost": -4.79
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 16, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 16, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 16, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1880536,
    //                 "scaling_factor": 0.940268078694,
    //                 "boost": -5.97,
    //                 "average_score": 0.2
    //             }
    //         },
    //         {
    //             "player-key": 28098,
    //             "player-name": "Lukas Rousek",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 7, \"games-left\": 75, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 0, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"away\", \"games-left-away\": 39, \"games-left-home\": 36, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"opponent-gaa\": 2.7, \"predicted-goals-season\": 0, \"scaling-factor\": 0.987564, \"upcoming-opponents-gaa\": 2.734}",
    //                     "scaling_factor": 0.987564,
    //                     "boost": -1.24
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 75, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         }
    //     ]
    // },
    // "home-team": {
    //     "id": 18,
    //     "team-key": "l.nhl.com-t.5",
    //     "team-gaa": 2.9,
    //     "team-gaa-rank": 14,
    //     "name": "Pittsburgh Penguins",
    //     "abbreviation": "Pit",
    //     "guessing-score": 3.991712,
    //     "actual-score": 0,
    //     "players": [{
    //             "player-key": 25852,
    //             "player-name": "Kasper Bjorkqvist",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20332,
    //             "player-name": "Juuso Riikola",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 0, \"orig-games-played-home\": 2, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 26657,
    //             "player-name": "Pierre-Olivier Joseph",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 11, \"predicted-games-played-season\": 60, \"predicted-goals-season\": 3}",
    //                     "score": "0.0405405"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 10, \"orig-games-played-home\": 6, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 3, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0488289,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.0405405
    //             }
    //         },
    //         {
    //             "player-key": 13487,
    //             "player-name": "Brian Boyle",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 2, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 0, \"predicted-goals-season\": 0}",
    //                     "score": "-0.027027"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 2, \"orig-games-played-home\": 5, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.027027
    //             }
    //         },
    //         {
    //             "player-key": 13492,
    //             "player-name": "Jeff Carter",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 22, \"predicted-games-played-season\": 79, \"predicted-goals-season\": 22}",
    //                     "score": "0.2837838"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 30, \"orig-games-played-home\": 28, \"orig-goals-scored-away\": 5, \"orig-goals-scored-home\": 13, \"predicted-goals-season\": 22, \"scaling-factor\": 1.510204, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.510204,
    //                     "boost": 51.02
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 22, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 22, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 22, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.4903876,
    //                 "scaling_factor": 1.7280323514908,
    //                 "boost": 72.8,
    //                 "average_score": 0.2837838
    //             }
    //         },
    //         {
    //             "player-key": 13969,
    //             "player-name": "Penguins Pittsburgh",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 0, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 14093,
    //             "player-name": "Sidney Crosby",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 54, \"predicted-games-played-season\": 80, \"predicted-goals-season\": 35}",
    //                     "score": "0.472973"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 28, \"orig-games-played-home\": 27, \"orig-goals-scored-away\": 10, \"orig-goals-scored-home\": 14, \"predicted-goals-season\": 35, \"scaling-factor\": 1.1962062, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.1962062,
    //                     "boost": 19.62
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 35, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": -3, \"predicted-goals-season\": 35, \"scaling-factor\": 0.97, \"x-factor-reason\": \"new endorsement deal\"}",
    //                     "scaling_factor": 0.97,
    //                     "boost": -3
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 35, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.6279577,
    //                 "scaling_factor": 1.3276819040833276,
    //                 "boost": 32.77,
    //                 "average_score": 0.472973
    //             }
    //         },
    //         {
    //             "player-key": 14686,
    //             "player-name": "Evgeni Malkin",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 35, \"predicted-games-played-season\": 62, \"predicted-goals-season\": 18}",
    //                     "score": "0.2432432"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 16, \"orig-games-played-home\": 17, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 18, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 18, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 18, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 18, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2929738,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.2432432
    //             }
    //         },
    //         {
    //             "player-key": 15031,
    //             "player-name": "Kris Letang",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 4, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 46, \"predicted-games-played-season\": 75, \"predicted-goals-season\": 10}",
    //                     "score": "0.1351351"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 29, \"orig-games-played-home\": 30, \"orig-goals-scored-away\": 3, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 10, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 10, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1627632,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.1351351
    //             }
    //         },
    //         {
    //             "player-key": 17121,
    //             "player-name": "Zach Aston-reese",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 10, \"predicted-games-played-season\": 59, \"predicted-goals-season\": 10}",
    //                     "score": "0.1351351"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 21, \"orig-games-played-home\": 29, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 5, \"predicted-goals-season\": 10, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 10, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 10, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1627632,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.1351351
    //             }
    //         },
    //         {
    //             "player-key": 17432,
    //             "player-name": "Brian Dumoulin",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 17, \"predicted-games-played-season\": 79, \"predicted-goals-season\": 8}",
    //                     "score": "0.1081081"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 21, \"orig-games-played-home\": 27, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 8, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 8, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 8, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 8, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1302106,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.1081081
    //             }
    //         },
    //         {
    //             "player-key": 17907,
    //             "player-name": "Jason Zucker",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 3, \"predicted-assists-season\": 25, \"predicted-games-played-season\": 75, \"predicted-goals-season\": 26}",
    //                     "score": "0.3108108"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 23, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 8, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 26, \"scaling-factor\": 1.0526207, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 3}",
    //                     "scaling_factor": 1.0526207,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 26, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.3743555,
    //                 "scaling_factor": 1.20444828874039,
    //                 "boost": 20.44,
    //                 "average_score": 0.3108108
    //             }
    //         },
    //         {
    //             "player-key": 18189,
    //             "player-name": "Evan Rodrigues",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 3, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0405405"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 17, \"orig-games-played-home\": 25, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 6, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 2, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0405405
    //             }
    //         },
    //         {
    //             "player-key": 18372,
    //             "player-name": "Bryan Rust",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 26, \"predicted-games-played-season\": 74, \"predicted-goals-season\": 26}",
    //                     "score": "0.3378378"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 30, \"orig-games-played-home\": 28, \"orig-goals-scored-away\": 10, \"orig-goals-scored-home\": 13, \"predicted-goals-season\": 26, \"scaling-factor\": 1.1746032, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.1746032,
    //                     "boost": 17.46
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 26, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 26, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.4540625,
    //                 "scaling_factor": 1.3440252639806398,
    //                 "boost": 34.4,
    //                 "average_score": 0.3378378
    //             }
    //         },
    //         {
    //             "player-key": 18719,
    //             "player-name": "Casey DeSmith",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 1, \"predicted-games-played-season\": 29, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 19444,
    //             "player-name": "Mike Matheson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 17, \"predicted-games-played-season\": 77, \"predicted-goals-season\": 7}",
    //                     "score": "0.0810811"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 22, \"orig-games-played-home\": 26, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 4, \"predicted-goals-season\": 7, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 7, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 7, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.097658,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.0810811
    //             }
    //         },
    //         {
    //             "player-key": 19449,
    //             "player-name": "Brock McGinn",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 16, \"predicted-games-played-season\": 76, \"predicted-goals-season\": 17}",
    //                     "score": "0.2162162"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 22, \"orig-games-played-home\": 22, \"orig-goals-scored-away\": 4, \"orig-goals-scored-home\": 5, \"predicted-goals-season\": 17, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 17, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 17, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 17, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2604212,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.2162162
    //             }
    //         },
    //         {
    //             "player-key": 19604,
    //             "player-name": "Teddy Blueger",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 2, \"predicted-assists-season\": 17, \"predicted-games-played-season\": 77, \"predicted-goals-season\": 9}",
    //                     "score": "0.0945946"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 23, \"orig-games-played-home\": 27, \"orig-goals-scored-away\": 2, \"orig-goals-scored-home\": 7, \"predicted-goals-season\": 9, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 9, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"percentage\": 0, \"predicted-goals-season\": 9, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 2, \"percentage\": 1, \"predicted-goals-season\": 9, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1139343,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.0945946
    //             }
    //         },
    //         {
    //             "player-key": 19616,
    //             "player-name": "Kasperi Kapanen",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 4, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 25, \"predicted-games-played-season\": 59, \"predicted-goals-season\": 24}",
    //                     "score": "0.3243243"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 20, \"orig-games-played-home\": 27, \"orig-goals-scored-away\": 5, \"orig-goals-scored-home\": 6, \"predicted-goals-season\": 24, \"scaling-factor\": 0.9381933, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.9381933,
    //                     "boost": -6.18
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 24, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 24, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 24, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.3481674,
    //                 "scaling_factor": 1.07351614374741,
    //                 "boost": 7.35,
    //                 "average_score": 0.3243243
    //             }
    //         },
    //         {
    //             "player-key": 19729,
    //             "player-name": "Chad Ruhwedel",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 11, \"orig-games-played-home\": 13, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20187,
    //             "player-name": "Jake Guentzel",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 47, \"predicted-games-played-season\": 78, \"predicted-goals-season\": 34}",
    //                     "score": "0.4459459"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 29, \"orig-games-played-home\": 33, \"orig-goals-scored-away\": 17, \"orig-goals-scored-home\": 7, \"predicted-goals-season\": 34, \"scaling-factor\": 0.5182859, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0.5182859,
    //                     "boost": -48.17
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 34, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 34, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 34, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.2644648,
    //                 "scaling_factor": 0.5930422661584299,
    //                 "boost": -40.7,
    //                 "average_score": 0.4459459
    //             }
    //         },
    //         {
    //             "player-key": 20224,
    //             "player-name": "Tristan Jarry",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 6, \"predicted-games-played-season\": 57, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 0, \"orig-games-played-home\": 0, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20501,
    //             "player-name": "Dominik Simon",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0135135"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 8, \"orig-games-played-home\": 10, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 1, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0135135
    //             }
    //         },
    //         {
    //             "player-key": 20780,
    //             "player-name": "Marcus Pettersson",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0135135"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 24, \"orig-games-played-home\": 30, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 2, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0135135
    //             }
    //         },
    //         {
    //             "player-key": 20797,
    //             "player-name": "Anthony Angello",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 0, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 8, \"orig-games-played-home\": 11, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20805,
    //             "player-name": "Mark Friedman",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 10, \"predicted-games-played-season\": 73, \"predicted-goals-season\": 3}",
    //                     "score": "0.0405405"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 8, \"orig-games-played-home\": 7, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 1, \"predicted-goals-season\": 3, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 3, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 3, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.0488289,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.0405405
    //             }
    //         },
    //         {
    //             "player-key": 20905,
    //             "player-name": "Sam Lafferty",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 1, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 0, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "0"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 20, \"orig-games-played-home\": 19, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 0}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 0, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": 0
    //             }
    //         },
    //         {
    //             "player-key": 20951,
    //             "player-name": "Danton Heinen",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 3, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0405405"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 22, \"orig-games-played-home\": 28, \"orig-goals-scored-away\": 7, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 2, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0405405
    //             }
    //         },
    //         {
    //             "player-key": 21104,
    //             "player-name": "John Marino",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 3, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 1, \"predicted-assists-season\": 30, \"predicted-games-played-season\": 82, \"predicted-goals-season\": 8}",
    //                     "score": "0.0945946"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 28, \"orig-games-played-home\": 31, \"orig-goals-scored-away\": 1, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 8, \"scaling-factor\": 1.0526204, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 1}",
    //                     "scaling_factor": 1.0526204,
    //                     "boost": 5.26
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 8, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 0, \"predicted-goals-season\": 8, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 1, \"percentage\": 1, \"predicted-goals-season\": 8, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0.1139343,
    //                 "scaling_factor": 1.2044479454690797,
    //                 "boost": 20.44,
    //                 "average_score": 0.0945946
    //             }
    //         },
    //         {
    //             "player-key": 27719,
    //             "player-name": "Drew O'Connor",
    //             "actual-score": "--",
    //             "algorithms": {
    //                 "average": {
    //                     "intermediate_values": "{\"actual-assists\": 2, \"actual-games-played\": 8, \"games-left\": 74, \"goals-scored\": 3, \"predicted-assists-season\": 0, \"predicted-games-played-season\": 1, \"predicted-goals-season\": 0}",
    //                     "score": "-0.0405405"
    //                 },
    //                 "home-away-weighting": {
    //                     "intermediate_values": "{\"game-house\": \"home\", \"games-left-away\": 39, \"games-left-home\": 35, \"orig-games-played-away\": 8, \"orig-games-played-home\": 8, \"orig-goals-scored-away\": 0, \"orig-goals-scored-home\": 3, \"predicted-goals-season\": 0, \"scaling-factor\": 0, \"season-goals-scored-away\": 0, \"season-goals-scored-home\": 3}",
    //                     "scaling_factor": 0,
    //                     "boost": -100
    //                 },
    //                 "goals-against-average": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"opponent-gaa\": 3.2, \"predicted-goals-season\": 0, \"scaling-factor\": 1.1442377, \"upcoming-opponents-gaa\": 2.7966216}",
    //                     "scaling_factor": 1.1442377,
    //                     "boost": 14.42
    //                 },
    //                 "x-factor": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 0, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"x-factor-reason\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 },
    //                 "schedule": {
    //                     "intermediate_values": "{\"games-left\": 74, \"goals-scored\": 3, \"percentage\": 1, \"predicted-goals-season\": 0, \"scaling-factor\": 1, \"schedule-situation\": null}",
    //                     "scaling_factor": 1,
    //                     "boost": 0
    //                 }
    //             },
    //             "guessing-score": {
    //                 "score": 0,
    //                 "scaling_factor": 0,
    //                 "boost": -100,
    //                 "average_score": -0.0405405
    //             }
    //         }
    //     ]
    // }
}
];
