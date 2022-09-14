function generate_PI(n) {
    let point_circle = 0
    let point_square = 0

    for(i = 0; i < n; i++) {
        let points= [Math.random(), Math.random()]
        let distance = Math.sqrt(Math.pow(points[0],2) + Math.pow(points[1], 2))
        if(distance < 1) {
            point_circle++
        }

        point_square ++
    }

    return (4 * point_circle/point_square)
}

console.log(generate_PI(10000000));