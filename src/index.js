module.exports = function towelSort (matrix) {
    if (arguments.length === 0) return [];
    if (matrix.length === 0) return [];
    let result = [];
    for (let i = 0; i < matrix.length; i++)
    {
        if (i % 2 === 0)
        {
            result = result.concat(matrix[i]);
        }
        else if (i % 2 === 1)
        {
            result = result.concat(matrix[i].sort().reverse());
        }
    }
    return result;
}
