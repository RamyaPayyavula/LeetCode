var minAreaRect = function(points) {
    const map = new Map()
    let minArea = Infinity;
    
    for(let [x, y] of points) {
        if(!map.has(x)) map.set(x, new Set());
        map.get(x).add(y);
    }
    
    for(let i = 0; i < points.length; i++) {
        
        for(let j = i+1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            
            if(x1 == x2 || y1 == y2) continue;
            
            if(map.get(x1).has(y2) && map.get(x2).has(y1)) {
                const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
                minArea = Math.min(minArea, area);
            }
        }
    }
    return minArea === Infinity ? 0 : minArea;
};