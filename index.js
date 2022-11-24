superbowlWin = (array) => {
    const checkWin = array.find(element => element["result"] === "W");
    return checkWin ? checkWin.year : checkWin;
}