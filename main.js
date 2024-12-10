function knightMoves(start, end) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start];
    }

    const queue = [[start, [start]]];
    const visited = [];

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const key = current.join(',');

        if (visited.includes(key)) continue;
        visited.push(key);

        for (const move of getValidMoves(current)) {
            if (move[0] === end[0] && move[1] === end[1]) {
                return [...path, move];
            }
            queue.push([move, [...path, move]]);
        }
    }
    return null;
}

function getValidMoves([x, y]) {
    const allMoves = [
        [x + 2, y + 1], [x + 2, y - 1],
        [x - 2, y + 1], [x - 2, y - 1],
        [x + 1, y + 2], [x + 1, y - 2],
        [x - 1, y + 2], [x - 1, y - 2]
    ];

    return allMoves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
}

console.log(knightMoves([0, 0], [7, 7]));
