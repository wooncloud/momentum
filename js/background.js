const images = [
    "241346.jpg",
    "345330.jpg",
    "660691.jpg",
    "685208.jpg",
    "1131838.jpg",
    "1218147.jpg",
    "1638831.jpg",
    "2849879.jpg",
    "3227097.jpg",
    "3334295.jpg",
    "3497712.jpg",
    "5069504.jpg",
    "5555056.jpg",
    "5555075.jpg",
    "5555079.jpg",
    "5555093.jpg",
    "5555104.jpg",
    "5555106.jpg",
    "5555108.jpg",
    "5555124.jpg",
    "5555128.jpg",
    "5555148.jpg",
    "6114583.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;