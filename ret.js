function solve() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    if (b ** 2 - 4 * a * c > 0) {
        let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a
        let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a
        document.getElementById("quadratic-equation-result").innerHTML = `x1 = ${x1}, x2 = ${x2}`
    }
    else {
        document.getElementById("quadratic-equation-result").innerHTML = "D<0"
    }
}

function generate() {
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("y").value)
    let t = Math.round(Math.random() * (y - x)) + x
    document.getElementById("random-result").innerHTML = t
}

function pifagor() {
    let a = Number(document.getElementById("ca").value)
    let b = Number(document.getElementById("cb").value)
    let c = Number(document.getElementById("cc").value)
    if(a<0 || b<0 || c<0){
        document.getElementById("pifagor-result").innerHTML = "Ті дурачок?"
    }
    else{
        if (a != 0 && b != 0) {
            c = Math.sqrt(b * b + a * a)
            document.getElementById("cc").value = c
        }
        else if (a != 0 && c != 0) {
            b = Math.sqrt(c * c - a * a)
            document.getElementById("cb").value = b
        }
        else if (b != 0 && c != 0) {
            a = Math.sqrt(c * c - b * b)
            document.getElementById("ca").value = a
        }
    }
}

function changeFigure() {
    const selectedFigure = document.getElementById('var').value;
    const aElem = document.getElementById('sa');
    const bElem = document.getElementById('sb');
    const cElem = document.getElementById('sc');
    switch (selectedFigure) {
        case 'circle':
            aElem.disabled = false;
            bElem.disabled = true;
            bElem.value = ""
            cElem.disabled = true;
            cElem.value = ""
            break;
        case 'rectangle':
            aElem.disabled = false;
            bElem.disabled = false;
            cElem.disabled = true;
            cElem.value = ""
            break;
        case 'triangle':
            aElem.disabled = false;
            bElem.disabled = false;
            cElem.disabled = false;
            break;
    }
}

function area() {
    let s;
    const selectedFigure = document.getElementById('var').value;
    const a = Number(document.getElementById('sa').value);
    const b = Number(document.getElementById('sb').value);
    const c = Number(document.getElementById('sc').value);
    if(a<0 || b<0 || c<0){
        document.getElementById("area-result").innerHTML = "Ті дурачок?"
    }
    else{
    switch (selectedFigure) {
        case 'circle':
            s = 2 * 3.14 * a
            break;
        case 'rectangle':
            s = a * b
            break;
        case 'triangle':
            let p = (a + b + c) / 2
            s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
            break;
    }
    document.getElementById("area-result").innerHTML = s
}
}

function fraction() {
    let d;
    let n;
    const changeOperation = document.getElementById('var1').value;
    let f1 = document.getElementById('f1').value.split("/")
    let f1n = Number(f1[0])
    let f1d = Number(f1[1])
    let f2 = document.getElementById('f2').value.split("/")
    let f2n = Number(f2[0])
    let f2d = Number(f2[1])
    switch (changeOperation) {
        case 'plus':
            d = f1d * f2d
            n = f1n * f2d + f2n * f1d
            console.log(n, d)
            if (n % d == 0) {
                document.getElementById("fraction-result").innerHTML = n / d
            }
            else {
                let a = n, b = d
                while (a != 0 && b != 0) {
                    if (a > b) {
                        a -= b
                    }
                    else {
                        b -= a
                    }
                }
                let nsd = a + b
                document.getElementById("fraction-result").innerHTML = `${n / nsd}/${d / nsd}`
            }
            break
        case 'minus':
            d = f1d * f2d
            n = f1n * f2d - f2n * f1d
            if (n % d == 0) {
                document.getElementById("fraction-result").innerHTML = n / d
            }
            else {
                let a = n, b = d
                while (a != 0 && b != 0) {
                    if (a > b) {
                        a -= b
                    }
                    else {
                        b -= a
                    }
                }
                let nsd = a + b
                document.getElementById("fraction-result").innerHTML = `${n / nsd}/${d / nsd}`
            }
            break
        case 'mult':
            d = f1d * f2d
            n = f1n * f1n
            if (n % d == 0) {
                document.getElementById("fraction-result").innerHTML = n / d
            }
            else {
                let a = n, b = d
                while (a != 0 && b != 0) {
                    if (a > b) {
                        a -= b
                    }
                    else {
                        b -= a
                    }
                }
                let nsd = a + b
                document.getElementById("fraction-result").innerHTML = `${n / nsd}/${d / nsd}`
            }
            break
        case 'div':
            d = f1d * f2n
            n = f1n * f2d
            if (n % d == 0) {
                document.getElementById("fraction-result").innerHTML = n / d
            }
            else {
                let a = n, b = d
                while (a != 0 && b != 0) {
                    if (a > b) {
                        a -= b
                    }
                    else {
                        b -= a
                    }
                }
                let nsd = a + b
                document.getElementById("fraction-result").innerHTML = `${n / nsd}/${d / nsd}`
            }
    }
}

function shifr() {
    let t = (document.getElementById('t').value);
    let k = Number(document.getElementById('k').value);
    al = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя".split("")
    let g = ""
    for (let s of t) {
        let h = al.indexOf(s)
        if (h != -1) {
            h += k
            while (h < 0) {
                h += al.length
            }
            g += al[h % al.length]
        }
        else {
            g += s
        }
        console.log(s, h)
    }
    document.getElementById("shifr-result").innerHTML = g
}