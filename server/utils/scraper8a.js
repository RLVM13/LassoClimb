const puppeteer = require("puppeteer");

// Creamos una función para extraer la información de cada producto
const extractProductData = async (url, browser) => {

    try {
        // Creamos un objeto vacío donde almacenaremos la información de cada producto
        const productData = {}
        // Abrimos una nueva pestaña
        const page = await browser.newPage()
        // Accedemos al link de cada producto que nos llega por parámetros
        await page.goto(url)

        // Utilizamos el método newPage.$eval(selector, function) y almacenamos en productData:
        
        /********** A RELLENAR todos los page.$eval(selector, function)  *********/
        productData['provincia'] = await page.$eval(".link", provincia => provincia.innerText)
        productData['lugar'] = await page.$eval(".title", lugar => lugar.innerText)
        productData['via'] = await page.$eval(".name-link", via => via.innerText)
        productData['grado'] = await page.$eval(".grade", grado => grado.innerHTML)
        productData['sector'] = await page.$eval(".sub-link", sector => sector.innerText)
        productData['ascensiones'] = await page.$eval("#__layout > div > div > div > div > div > div > div > div > div > div > div.actual-content > div > div > table > tbody > tr > td.col-ascents.number", ascensiones=>ascensiones.innerText)
        /* if(await page.$("#profileApp div main section div article div div div p")) {
            productData['via'] = await page.$eval("#__layout > div > div > div > div > div > div > div > div > div > div > div > div > div > table > tbody > tr > td > p > a", via=>via.innerText)
        }
        else{
            productData['descripcionOferta'] = await page.$eval("#profileApp div main section div article div div div", descripcionOferta=>descripcionOferta.innerText)
        } */
        return productData // Devuelve los datos de un producto
    }
    catch (err) {
        // Devolvemos el error 
        return { error: err }
    }
}


const scrap = async (url) => {
    try {
        // Creamos un array vacío scrapedData donde almacenaremos la información obtenida del scraping
        const scrapedData = []
        // inicializamos una instancia del navegador (browser) con puppeteer.launch() y añadimos en el objeto de configuración la opción headless
        console.log("Opening the browser......");
        const browser = await puppeteer.launch({ headless: false })

        // Abrimos una nueva pestaña en el navegador creando una instancia con el método newPage() a la que llamaremos page
        const page = await browser.newPage();
        // Indicamos la url que debe cargarse en la pestaña con page.goto(url)
        await page.goto(url);
        console.log(`Navigating to ${url}...`);

        // Extraemos todos los links a los que luego navegaremos para obtener el detalle de cada producto

        // Utilizamos el método $$eval(selector, callback) para capturar una colección de nodos y aplicar la lógica que necesitemos
        // En este caso , en el CB filtramos el array de items, guardando en un nuevo array

        /********** A RELLENAR page.$eval(selector, function)  *********/

        //Buscamos todos los titulos de la web https://www.8a.nu. Esto es como hacer el querySelectorAll
        const tmpClimb = await page.$$eval("#__layout > div > div > div > div > div > div > div > div > div > div > div > div > div > table > tbody > tr > td > p > a", res => res.map(a => a.href));

        // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractProductData por cada link en el array. Luego pusheamos el resultado a scraped data
          for(productLink in tmpClimb){
            const product = await extractProductData(tmpClimb[productLink],browser)
            scrapedData.push(product)
        }
        
        console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length)

        // cerramos el browser con el método browser.close
        await browser.close()
        // Devolvemos el array con los productos
        return scrapedData;

    } catch (err) {
        console.log("Error:", err);
    }
}

exports.scrap = scrap;

/********** DESCOMENTAR PARA PROBAR *********/
scrap("https://www.thecrag.com/es/escalar/spain/madrid-area").then(data => console.log(data))