/*registerPaint('smooth-corners', class {
    static get inputProperties() {
        return [
            '--smooth-corners'
        ]
    }
    paint(ctx, geom, properties) {
        const c = properties.get('--smooth-corners').toString()

        ctx.fillStyle = 'black'

        const n = c
        let m = n
        if (n > 100) m = 100
        if (n < 0.00000000001) m = 0.00000000001
        const r = geom.width / 2
        const w = geom.width / 2
        const h = geom.height / 2

        ctx.beginPath();

        for (let i = 0; i < (2*r+1); i++) {
            const x = (i-r) + w
            const y = (Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(i-r),m)),1/m)) + h

            if (i == 0)
                ctx.moveTo(x, y)
            else
                ctx.lineTo(x, y)
        }

        for (let i = (2*r); i < (4*r+1); i++) {
            const x = (3*r-i) + w
            const y = (-Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(3*r-i),m)),1/m)) + h
            ctx.lineTo(x, y)
        }

        ctx.closePath()
        ctx.fill()
    }
})
*/

class SmoothCorners {
    static get inputProperties() {
        return ['--smooth-corners'];
    }

    paint(ctx, size, properties) {
        const n = properties.get('--smooth-corners').value || 4;
        const width = size.width;
        const height = size.height;
        const m = Math.max(0.00000000001, Math.min(n, 100));
        const r = width / 2;
        const w = width / 2;
        const h = height / 2;

        ctx.fillStyle = 'black';
        ctx.beginPath();

        for (let i = 0; i <= 2 * r; i++) {
            const x = (i - r) + w;
            const y = Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(i - r), m)), 1 / m) + h;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        for (let i = 2 * r; i <= 4 * r; i++) {
            const x = (3 * r - i) + w;
            const y = -Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(3 * r - i), m)), 1 / m) + h;
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fill();
    }
}

registerPaint('smooth-corners', SmoothCorners);
