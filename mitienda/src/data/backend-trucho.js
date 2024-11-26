const base_de_datos = [
    {
        raza: "beagle", 
        precio: "800.000",
        estatura: "mediano",
        img: "https://www.pdsa.org.uk/media/7702/beagle-outdoors-gallery-5-min.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132158008000000000"
    }, 
    {
        raza: "golden retriver",
        precio: "900.000",
        estatura: "alto", 
        img: "https://www.pdsa.org.uk/media/7646/golden-retriever-gallery-2.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=133020229510000000" 
    }, 
    {
        raza: "shiba inu", 
        precio: "1.500.000",
        estatura: "mediano",
        img: "https://www.hola.com/imagenes/mascotas/20190102134933/razas-perro-similares-otros-animales-cs/0-632-530/AdobeStock_172375374-Shiba_Inu-z.jpg?im=Resize=(360)"
    }, 
    {
        raza: "bulldog frances",
        precio: "500.000", 
        estatura: "chiquito", 
        img: "https://kennelclubargentino.org.ar/storage/2017/07/bullDog-franes-blue-pied.jpg"
    }
]

export const getProducts = () => {
    return new Promise((result, reject) => {
        setTimeout(() => {
            result(base_de_datos)
            reject("error")
        }, 3000);
    });
}

export const getProductsByCategory = (categoria) => {
    return new Promise((result, reject) => {
        setTimeout(() => {
            result(base_de_datos.filter(e => e.category === category))
            reject("error")
        }, 3000);
    });
}