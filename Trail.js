let game = [
    { players : ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"], currentDrawer : null, intervalId : null },
    { players : ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"], currentDrawer : null, intervalId : null },
    { players : ["abc", "def", "ghi", "jkl" ], currentDrawer : null, intervalId : null },
    { players : ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"], currentDrawer : null, intervalId : null },
    { players : ["abc", "def", "mno", "pqr", "stu"], currentDrawer : null, intervalId : null },
]

const room = game.find(room => room.players.length < 7);

console.log(game.indexOf(room));

console.log(Math.floor(2147483647/3));
