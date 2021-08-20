const gradientButton = document.getElementById('gradient-button')
const bgImageValue = document.getElementById('bg-img-value')
const copyBtn = document.getElementById('copy-clip')

const getRandomColor = () => {
    let color = '#'
    let letters = '0123456789ABCDEF'

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const backgroundColor = () => {
    const color1 = getRandomColor()
    const color2 = getRandomColor() 

    document.body.style.backgroundImage = `
        linear-gradient(
            ${color1},${color2}
        )
    `
    bgImageValue.value = `background-image: linear-gradient(${color1}, ${color2})`
}

const copy = () => {
    bgImageValue.select();
    bgImageValue.setSelectionRange(0, 99999)

    document.execCommand("copy")
    alert("Copied to Clipboard!")
}

gradientButton.addEventListener('click', backgroundColor)
copyBtn.addEventListener('click', copy)