const boxImages = document.getElementById("container")

console.log("prova stampa")

const arrayOfImages = [
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709741665/Progetto_Parco/Galleria_Foto_Escursioni/siywhqnfockxcr5o4mxm.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709726017/Progetto_Parco/Galleria_Foto_Escursioni/g4swwdqhponplud4lakv.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709726044/Progetto_Parco/Galleria_Foto_Escursioni/zymhxhma6ggy06efpd17.png",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709725003/Progetto_Parco/Galleria_Foto_Escursioni/vw5ns9rv3yvstvwak94f.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709724673/Progetto_Parco/Galleria_Foto_Escursioni/pvpgnjban2lil0hds2r5.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709717859/Progetto_Parco/Galleria_Foto_Escursioni/vplzed4t8lcxehiiyceh.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709735804/Progetto_Parco/Galleria_Foto_Escursioni/ee6es9bmvmagrwsgqpqk.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709735896/Progetto_Parco/Galleria_Foto_Escursioni/rc0zbaem37n0dpohfvyn.png",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709717888/Progetto_Parco/Galleria_Foto_Escursioni/h3sao34wneezn1cjkvua.jpg",    // uwyeduweydguwyegd
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709726019/Progetto_Parco/Galleria_Foto_Escursioni/o5scqu8xmcd3b7wb8tsu.jpg",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709724577/Progetto_Parco/Galleria_Foto_Escursioni/hizltz7jjxjrcfxjvwe6.webp",
    "https://res.cloudinary.com/diklzegyw/image/upload/v1709716614/Progetto_Parco/Galleria_Foto_Escursioni/ziii1efofgfbd0zwxahx.jpg"
]

arrayOfImages.forEach(url => {

    const box = document.createElement("div")
    box.classList.add("item")

    const image = document.createElement("img")
    image.src = url

    boxImages.appendChild(box)
    box.appendChild(image)

})




