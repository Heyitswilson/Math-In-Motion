const Util = {

    dist(pos1, pos2) {
        let x1, y1;
        [x1, y1] = pos1

        let x2, y2;
        [x2, y2] = pos2

        let left = Math.pow(x1 - x2, 2)
        let right = Math.pow(y1 - y2, 2)

        return Math.sqrt(left + right)
    },

    norm(pos) {
        return dist([0, 0], pos);
    },

    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    setVec(length, mouseX, mouseY, angle) {
        const deg = 2 * Math.PI * (((1 / (mouseY + mouseX)) * angle) );
        return Util.scale([Math.sin(deg), Math.sin(deg)], length);
    },

    setVecWater(length) {
        const deg = 2 * Math.PI * .2;
        return Util.scale([Math.sin(-deg), Math.cos(deg)], length);
    },


}

export default Util