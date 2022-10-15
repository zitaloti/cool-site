function solve() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    if (b ** 2 - 4 * a * c > 0) {
        let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a
        let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a
        document.getElementById("quadratic-equation-result1").value = x1
        document.getElementById("quadratic-equation-result2").value = x2
    }
    else {
        document.getElementById("quadratic-equation-result").value = "D<0"
    }
}

function generate() {
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("y").value)
    let t = Math.round(Math.random() * (y - x)) + x
    document.getElementById("random-result").value = t
}

function pifagor() {
    let a = Number(document.getElementById("pa").value)
    let b = Number(document.getElementById("pb").value)
    let c = Number(document.getElementById("pc").value)
    if(a<0 || b<0 || c<0){
        document.getElementById("pifagor-result").innerHTML = "Ті sho дурачок?"
    }
    else{
        if (a != 0 && b != 0) {
            c = Math.sqrt(b * b + a * a)
            document.getElementById("pc").value = c
        }
        else if (a != 0 && c != 0) {
            b = Math.sqrt(c * c - a * a)
            document.getElementById("pb").value = b
        }
        else if (b != 0 && c != 0) {
            a = Math.sqrt(c * c - b * b)
            document.getElementById("pa").value = a
        }
    }
}

function changeFigure() {
    const selectedFigure = document.getElementById('var').value;
    const aElem = document.getElementById('aa');
    const bElem = document.getElementById('ab');
    const cElem = document.getElementById('ac');
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
    const a = Number(document.getElementById('aa').value);
    const b = Number(document.getElementById('ab').value);
    const c = Number(document.getElementById('ac').value);
    if(a<0 || b<0 || c<0){
        document.getElementById("area-result").value = "Ті sho дурачок?"
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
    document.getElementById("area-result").value = s
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
                document.getElementById("fraction-result").value = n / d
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
                document.getElementById("fraction-result").value = `${n / nsd}/${d / nsd}`
            }
            break
        case 'minus':
            d = f1d * f2d
            n = f1n * f2d - f2n * f1d
            if (n % d == 0) {
                document.getElementById("fraction-result").value = n / d
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
                document.getElementById("fraction-result").value = `${n / nsd}/${d / nsd}`
            }
            break
        case 'mult':
            d = f1d * f2d
            n = f1n * f1n
            if (n % d == 0) {
                document.getElementById("fraction-result").value = n / d
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
                document.getElementById("fraction-result").value = `${n / nsd}/${d / nsd}`
            }
            break
        case 'div':
            d = f1d * f2n
            n = f1n * f2d
            if (n % d == 0) {
                document.getElementById("fraction-result").value = n / d
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
                document.getElementById("fraction-result").value = `${n / nsd}/${d / nsd}`
            }
    }
}

function shifr() {
    let t = (document.getElementById('t').value);
    let k = Number(document.getElementById('k').value);
    al = "абв.,!гґд&*$еєж@\"?зиі#)(їйк+_-лмн/\\|опр;:\'сту<>{фхцч}[]шщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".split("")
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

function cos() {
    let a = Number(document.getElementById("ca").value)
    let b = Number(document.getElementById("cb").value)
    let c = Number(document.getElementById("cc").value)
    let d = Math.cos(Number(document.getElementById("cd").value) * Math.PI / 180)
    if(a<0 || b<0 || c<0 || d<0 ){
        document.getElementById("cos-result").innerHTML = "Ті дурачок?"
    }
    else{
        if (a != 0 && b != 0 && c!=0) {
            d = (Math.acos((b*b+c*c-a*a)/(2*b*c)))/Math.PI*180
            document.getElementById("cd").value =  Math.round(d)
        }
        else if (a != 0 && c != 0 && d != 0) {
            b = Math.sqrt(2*b*c*d+a*a-c*c)
            document.getElementById("cb").value = Math.round(b)
        }
        else if (b != 0 && c != 0 && b != 0) {
            a = Math.sqrt(b*b+c*c-2*b*c*d)
            document.getElementById("ca").value = Math.round(a)
        }
        else if (a != 0 && b != 0 && b != 0) {
            c = Math.sqrt(2*b*c*d+a*a-b*b)
            document.getElementById("cc").value = Math.round(c)
        }
    }
}

function sin() {
    let a = Number(document.getElementById("sa").value)
    let sina = Math.sin(Number(document.getElementById("sina").value) * Math.PI / 180)
    let b = Number(document.getElementById("sb").value)
    let sinb = Math.sin(Number(document.getElementById("sinb").value) * Math.PI / 180)
        if (a != 0 && sina != 0 && b!=0) {
            console.log(sina, sinb )
            sinb = (Math.asin(sina*b/a))/Math.PI*180
            document.getElementById("sinb").value =  Math.round(sinb)
        }
        else if (a != 0 && sinb != 0 && b!=0) {
            sina = (Math.asin(sinb*a/b))/Math.PI*180
            document.getElementById("sina").value =  Math.round(sina)
        }
        else if (b != 0 && sinb != 0 && sina != 0) {
            a = sina*b/sinb
            document.getElementById("sa").value = Math.round(a)
        }
        else if (a != 0 && sinb != 0 && sina != 0) {
            b = sinb*a/sina
            document.getElementById("sb").value = Math.round(b)
        }
    }

