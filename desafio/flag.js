module.exports = (flag) => {
    const index = process.argv.indexOf(flag) + 1;
    return index;
}

