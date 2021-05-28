function countGroups(matrix) {
    const groups = [ [], [] ]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const element = matrix[i][j];
            const possibleGroups = groups[element]
                    .filter(g => belongsToGroup(g, [i, j]))
            const existingGroup = (possibleGroups?.flat() ?? [])
            groups[element] = groups[element]
                .filter(g => !possibleGroups.includes(g))
                .concat([existingGroup.concat([[i, j]])])
        }
    }
    return groups.map(g => g.length)
}
function belongsToGroup(group, pos) {
    return group
        .some(p => (p[0] === pos[0] - 1 && p[1] === pos[1]) 
                || (p[0] === pos[0] && p[1] === pos[1] - 1))
}

// zeroGroups
// [[0, 0], [0, 1], [1, 0], [1, 1], [2, 1], [2, 2]]
// [[1, 3]]
// [[3, 3]]

// oneGroups
// [[0, 2], [0, 3], [1, 2]]
// [[2, 0], [3, 0], [3, 1], [3, 2]]
// [[2, 3]]

console.log(
    countGroups(
        [
            [0, 0, 1, 1],
            [0, 0, 1, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]
        ]
    )
) // [3, 3]

console.log(
    countGroups(
        [
            [1, 0, 1, 1],
            [1, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    )
) // [2, 1]

// zeroGroups
// [[0, 0], [0, 1], [1, 0], [1, 1], [2, 1], [2, 2]]
// [[1, 3]]
// [[3, 3]]

// oneGroups
// [[0, 2], [0, 3], [1, 2]]
// [[2, 0], [3, 0], [3, 1], [3, 2]]
// [[2, 3]]