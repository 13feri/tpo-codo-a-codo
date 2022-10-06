const products = [
  {
    id: '1',
    title: 'Labial Líquido | Maybelline Super Stay Matte Ink',
    description:"Nuevo Labial líquido con acabado matte intenso. Color permanente.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/222114_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.webp',
    price: 2928.50,
  },
  {
    id: '2',
    title: ' Máscara de Pestañas | Maybelline Colossal 36h Waterproof',
    description:"Su fórmula ultra resistente envuelve tus pestañas y consigue máximo volumen y resistencia hasta 36h. Aguanta roces, agua, sudor y lágrimas.Su maxi cepillo fijan el volumen de tus pestañas. ¡La máscara de pestañas que lo resiste todo!.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/225089_mascara-de-pestanas-maybelline-colossal-36h-waterproof_imagen-1.webp',
    price: 2284.50,
  },
  {
    id: '3',
    title: 'Esmalte para Uñas | Studio 9 Semipermanente x 11 ml',
    description:"La línea de esmaltes semipermanentes Studio 9 tienen un resultado profesional de larga duración de fácil y rápida aplicación. El Top Coat Studio 9 se trata de una capa transparente que actúa como barrera de protección del esmalte, alargando su duración.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/218373_esmalte-para-unas-studio-9-semipermanente-x-11-ml_imagen-1.webp',
    price: 417,
  },
  {
    id: '4',
    title: 'Agua Micelar Desmaquillante | Garnier Skin Active x 400 ml',
    description:"El Agua Micelar Todo en 1 limpia, desmaquilla y tonifica en un solo gesto rostro, ojos y labios.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/204369_agua-micelar-skin-active-x-400-ml_imagen-1.webp',
    price: 1553,
  },
  {
    id: '5',
    title: 'Base Fluida de Maquillaje | LOreal París True Match x 30 ml',
    description:"Base de maquillaje de textura fluida que se adapta a las diferentes tonalidades y empareja la textura de la piel.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/155703_Base-Fluida-de-Ma---L-Oreal-Paris_imagen-1.webp',
    price: 4626,
  },
  {
    id: '6',
    title: 'Mini Paleta de Sombras para Ojos | Get The Look Pigment Bronze x 5 un ',
    description:"La mini paleta de sombras de Ojos Get The Look Pigment es una formulación de polvos micronizados de extraordinaria suavidad. Incluye 5 tonos con pigmentos y perlas que otorgan alta permanencia. Tienen gran poder cubritivo y son fáciles de esfumar. Te permite combinar tonos mate y satinados para looks naturales e intensos. ¡Múltiples opciones en un solo envase!",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/218361_mini-paleta-de-sombras-para-ojos-get-the-look-pigment-bronze-x-5-un_imagen-1.webp',
    price: 2088.75,
  },
  {
    id: '7',
    title: 'Lápiz Labial | Rimmel Lasting Finish Extreme", "Maquillaje ',
    description:"El lápiz labial Rimmel Lasting Finish Extreme brinda colores impactantes que te harán enloquecer! Barra de labios de larga duración, hasta 8 horas.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/216447_lapiz-labial-rimmel-lasting-finish-extreme_imagen-1.webp',
    price: 1496.95,
  },
  {
    id: '8',
    title: ' Uñas Postizas | Glue On Kiss Gel Fantasy Fanciful ',
    description:"Las uñas más modernas, el gel listo para usar se mantiene brillante con un acabado ultra suave.La manicura en gel tarda minutos en aplicarse y dura días.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/225298_unas-postiza-kiss-gel-fantasy-fanciful_imagen-3.webp',
    price: 5252,
  },
  {
    id: '9',
    title: 'Set de Brochas | Fascino Tools Pro Set x 7 un - Set de Brochas Fascino Tools Pro x 7 un ',
    description:"Set de brochas para maquillaje profesional x 7 unidades de diversas medidas.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/213217_set-de-brochas-fascino-tools-pro-set-x-7-un_imagen-2.webp',
    price: 8340,
  },
  {
    id: '10',
    title: 'Esmalte de Uñas | Revlon Ultra HD Snap x 8 ml ',
    description:"Contiene una fórmula vegana, pues el 78% de sus ingredientes son naturales y está libre de elementos derivados del petróleo.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/224689_esmalte-de-una-ultra-hd-snap-x-8-ml_imagen-2.webp',
    price: 821.60,
  },
  {
    id: '11',
    title: 'Quitaesmalte para Uñas | Studio 9 Fortalecedor sin Acetona x 100 ml ',
    description:"Quitaesmalte fortalece y cuida tus uñas mientras sacas el color de ellas. Aporta vitamina E y Keratina no contiene acetona.",
    company: 'MAQUILLAJE',
    image:
      './Img/MAQUILLAJE/220163_quitaesmalte-para-unas-studio-9-fortalecedor-sin-acetona-x-100-ml_imagen-1.webp',
    price: 246,
  },
  
  {
    id: '12',
    title: 'Medias Kids | Disney - Aristogatos',
    description:"Modelo: Aristogatos. Talle: Adaptable del 25 al 30",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-kids-aristogatos1-e53f58919f72396b8816631850708521-1024-1024.jpg',
    price: 899,
  },
  {
    id: '13',
    title: 'Medias | Flork Meme',
    description:"Modelo: Flork. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-flork-meme1-a0903e6523cef4f6e016631872660702-1024-1024.jpg',
    price: 1200,
  },
  {
    id: '14',
    title: 'Soquetes | My Melody - Kuromi',
    description:"Modelo: Kuromi. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/de2a45961-0f1b8fac77496eca8916627326561422-640-0.jpg',
    price: 750,
  },
  {
    id: '15',
    title: 'Medias | Breaking Bad - Los Pollos Hermanos',
    description:"Modelo: Breaking Bad. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-breaking-bad-los-pollos-hermanos1-f43d84d48df1cf35fe16256804013678-1024-1024.jpg',
    price: 1250,
  },
  {
    id: '16',
    title: 'Medias | Disney - Lilo & Stitch',
    description:"Modelo: Stitch. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-disney-stitch1-d832e361e13f54449d16250742117998-640-0.jpg',
    price: 1250,
  },
  {
    id: '17',
    title: 'Medias | Friends',
    description:"Modelo: Friends. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/2161-3659-11-d3ee52e2718a23e4f116220773505832-1024-1024.jpg',
    price: 1199,
  },
  {
    id: '18',
    title: 'Medias | Disney - El Rey León Hakuna Matata',
    description:"Modelo: Hakuna Matata. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/2178-37461-cad0a231a8c208ac9916247160793846-1024-1024.jpg',
    price: 750,
  },
  {
    id: '19',
    title: 'Medias | Chicas Superpoderosas',
    description:"Modelo: Las Chicas Superpoderosas. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-chicas-superpoderosas-powerpuff-girls-cartoon-network-cn-fotocaja-tienda-geek-91-a1fe944ed0f16dd28b15912405394343-1024-1024.jpg',
    price: 990,
  },
  {
    id: '20',
    title: 'Medias | Pokemon Bulbasaur',
    description:"Modelo: Bulbasaur. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-fotocaja-tienda-geek-161-430286bbfcf84d305615922747750194-1024-1024.jpg',
    price: 990,
  },
  {
    id: '20',
    title: 'Medias | Pokemon Pikachu',
    description:"Modelo: Pikachu. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-fotocaja-tienda-geek-131-dcafeea304d7dd374615946945528949-1024-1024.jpg',
    price: 990,
  },
  {
    id: '21',
    title: 'Medias | Pokemon Pokebola',
    description:"Modelo: Pokebola. Talle: Adaptable del 34 al 43",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-pokebola1-d3a786dc71f7adcac015946944919927-1024-1024.jpg',
    price: 1190,
  },
  {
    id: '22',
    title: 'Medias Kids | Escandalosos',
    description:"Modelo: Escandalosos. Talle: Adaptable del 25 al 30",
    company: 'MEDIAS',
    image:
      './Img/MEDIAS/medias-kids-escandalosos1-140047ef86cb7bbf6816631858259760-1024-1024.jpg',
    price: 899,
  },
  {
    id: '23',
    title: 'Cargador IPhone | Cable Usb 1 mt Original Usb a Lighting',
    description:"Cable USB IPhone 5S 6S 7 8 X XS MAX PLUS Original Tipo: USB Original Apple ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/111-c198f968d8f22b95f016496990428137-480-0.png',
    price: 1250,
  },
  {
    id: '24',
    title: 'Accesorio Celular | Lightning Headphone Jack',
    description:"Adaptador Para Auricular, Lightning A Jack 3.5mm Este adaptador te permite conectar dispositivos que tienen un conector de audio de Jack 3.5 mm a tus dispositivos con Lightning. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/476a80ab358a45a5de93afdb0e8ab7d445d20750cfe914610fce54b1798ebe20104085.jpeg',
    price: 1820,
  },
  {
    id: '25',
    title: 'Accesorio Celular | Auriculares 3.5',
    description:"¡Te presentamos nuestros Auriculares 3.5 ! Cuentan con una gran calidad de sonido y una excelente terminacion del producto. Vienen con ficha auxiliar (redonda), por lo que es compatible para IOS (desde IPhone 6 Plus para abajo o con adaptador) y para Android. Los mismos cuentan con garantia ante cualquier inconveniente o falla en el funcionamiento del producto. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/131-bdbdf1271199eb2fd916496993885277-640-0.png',
    price: 990,
  },
  {
    id: '26',
    title: 'Parlante Portatil | Noga Go! NGS-310 con Bluetooth Rosa',
    description:"Noga NGS-310 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/D_NQ_NP_2X_977014-MLA42050349070_062020-F.webp',
    price: 950,
  },
  {
    id: '27',
    title: 'Smart Watch Reloj | Mi Band 5 Xiaomi ',
    description:"La heredera de la Xiaomi Mi Band 4 trae novedades como la carga magnética, control del ciclo menstrual, pantalla OLED 1.1 más grande, monitorización del sueño entre otras prestaciones. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/smartband-xiaomi-mi-band-5-reloj-inteligente-notificaciones-modo-deportes-calorias-distancia.jpg',
    price: 7699,
  },
  {
    id: '28',
    title: 'Accesorio Smart Watch Reloj | Pulsera Correa Para Reloj Mi Smart Band 3 4 Y 5 Xiaomi Malla',
    description:"Malla Para Mi Band 3-4-5-6 Xiaomi, Compatibles con: Mi Band 3 - Mi Band 4 -  Mi Band 5. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/correa-pulsera-para-xiaomi-mi-band-5-silicona-malla.jpg',
    price: 750,
  },
  {
    id: '29',
    title: 'Aro de Luz |  Grande Celular Tripode Profesional 2.10mts',
    description:"Increible y Profesional Aro De Luz Led De 26cm Con Tripode Extensible! Ideal para live Streaming, Selfies, Tik Tok, Vídeo llamadas, Fotos de productos, Grabar todo tipo de clases y Maquillaje entre otras para compartir con el mundo!.  3 modos de iluminación de 3 colores: blanco, amarillo cálido y blanco cálido. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/e4107850900abfaf93f412a11e711c89.jpeg',
    price: 7950,
  },
  {
    id: '30',
    title: 'Periféricos | Kit Mini Teclado Español + Mouse Xinua Km3 Rosa Inalambrico',
    description:"El set de teclado mini y mouse rosa KM3 es un kit de conexión inalámbrica 2.4 ghz. El teclado junto al mouse de diseño simple lo convierten en una opción minimalista para aquellos que buscan simpleza y diseño en sus periféricos. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/D_NQ_NP_2X_939180-MLA48956049636_012022-F.webp',
    price: 4590,
  },
  {
    id: '31',
    title: 'Parlante Portatil | RGB Coby Bluetooth con Luces ',
    description:"Parlante Portátil Coby Light Up tiene un diseño moderno tipo Domo muy suave al tacto y cuenta con luces LED de varios colores. Excelente calidad de sonido y es compatible con cualquier dispositivo Bluetooth. Las luces se sincronizan y parpadean con el ritmo de la música que estés escuchando. ",
    company: 'TECNOLOGÍA',
    image:
      './Img/TECNOLOGIA/aebfa942a64f56cc5d8351a9009554ded027d5f1f56c779852bf1e14d3383149104085.jpeg',
    price: 2500,
  },
  {
    id: '32',
    title: 'Accesorio Cargador | Come Cable Animalitos',
    description:"¡Te presentamos nuestros Come Cables! Accesorios con mucha onda que protegen tu pin de carga. ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/sin-titulo-31-a484e0c78e4b8092e715964698713846-640-0.jpg',
    price: 550,
  },
  {
    id: '33',
    title: 'Accesorio Cargador | Come Cable Disney',
    description:"Come Cable de tu personaje Disney favorito. Accesorios con mucha onda que protegen tu pin de carga. ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/9898389ae0f8f9a14a0c7b7f0a2a97c2.jpg',
    price: 950,
  },

  {
    id: '34',
    title: 'Accesorio cinturon de mujer  |cinturon en cuero negro ',
    description:"Cinturon de mujer cuerno negro con puntera y hebilla labrada ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/cinto negro.jpg',
    price: 1950,
  },
  {
    id: '35',
    title: 'Accesorio espejito| Espejito Macbook',
    description:"Mini macbook air de bolsillo,espejito de las applefans mas coquetas ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/espejito macbook.jpg',
    price: 1200,
  },
  {
    id: '36',
    title: 'Accesorio estuche Airpods | Airpods Animados de silicona',
    description:"estuche super lindo para Airpods,se adapta perfectamentea su estuche de carga  ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/estuche airpods.jpg',
    price: 950,
  },
  {
    id: '37',
    title: 'Llavero de iman| Llavero de Nube Inmantada  ',
    description:" Porta llaves inmantado.Ideal para colgar tus llaves.  ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/llavero con iman.jpg',
    price: 1080,
  },
  {
    id: '38',
    title: 'Neceser Transparente| Neceser impermeable porta cosmetico transparente',
    description:" Bolso de mujer impermeable Playa Piscina.Bolso de viaje Transparente",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/neceser.webp',
    price: 2500,
  },
  {
    id: '39',
    title:'Pulsera|Pulsera de Acero Quirurgico ',
    description:"Pulsera de Acero Quirurgico dije de cruz y bolitas ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/PULACERA.webp',
    price: 650,
  },
  {
    id: '40',
    title: 'Reloj de mano|Reloj gatito',
    description:" Bonito reloj de pulsera con forma de gatito.Con gafas y orejillas",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/reloj gatico.jpg',
    price: 1250,
  },
  {
    id: '41',
    title: 'Ringo | Anillo Ringo para celular con diseños',
    description:"Anillo Ringo para celular con adhesivo,apto para todo tipo de celulares. ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/ring celu.jpg',
    price: 540,
  },
  {
    id: '42',
    title: 'Anillos Anti Robo| Anillo antirobo para celular',
    description:"Anillo soporte universal para tu celular o tablet.Material metal",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/ring celular.jpg',
    price:350 ,
  },
  {
    id: '43',
    title: 'Tarjetero |Tarjetero VULKIT con bolsillo ',
    description:"El cierre con magnetismo incorporado mantiene tus tarjetas y dinero en el bolsillo.Bloque RFID/NFC.",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/tarjetero.jpg',
    price: 9000,
  },
  {
    id: '44',
    title: 'vincha| Diademas Bohemias  ',
    description:"Diademas trenzas de bisel ancho para mujer.Bandanas de moda  ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/vincha cabello.jpg',
    price: 260,
  },
  {
    id: '45',
    title: ' Aro Luz accesorio |Aro Luz para selfie celular ',
    description:" Luz LED para selfies te proporciona la iluminacion necesaria para tomar una buena fotografia o video",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/luz accesorio.jpg',
    price: 1050,
  },
  
  {
    id: '48',
    title: 'Set | Set  tabla 5 casuelas picada',
    description:"Material tabla:pino Largo:50cm Ancho:10cm ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/set de tabla picada.jpg',
    price: 3960,
  },
  {
    id: '49',
    title: 'Porta Servilleta| Cocinero portaservilleta',
    description:" Material:poliresina ,12.5 CM",
    company: 'BAZAR',
    image:
      './Img/BAZAR/portaservilletacocinero.jpg',
    price: 750,
  },
  {
    id: '50',
    title: 'Plato | Plato de sitio con ondas rojo ',
    description:"material: plastico dimensiones:33cm ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/platodesitio.jpg',
    price: 550,
  },
  {
    id: '51',
    title: 'Jarro | Jarro cactus con tapa y sorbete ',
    description:" Material:vidrio,Tapa de color,Asa de agarre. ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/jarrocactus.jpg',
    price: 890,
  },
  {
    id: '52',
    title: 'Juego de cubiertos | Juego de cubiertos tramontina x24',
    description:" 24 piezas de Acero inoxidable tramontina,de gran durabilidad.",
    company: 'BAZAR',
    image:
      './Img/BAZAR/havana juego de cubiertos.jpg',
    price: 10600,
  },
  {
    id: '53',
    title: 'Secador| secaplatos dos niveles ',
    description:" aterial:plastico y acero cromado.Medidas 37cmx37cmx37cm. ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/escurridero.jpg',
    price: 2200,
  },
  {
    id: '54',
    title: 'Copa | Copa Marine Nadir Agua De Vidrio Labrada',
    description:"color :transparente,Capacidad: 340ml ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/copamarine.jpg',
    price: 1000,
  },
  {
    id: '55',
    title: 'Centro de Mesa| Centro de mesa frutera',
    description:"Centro de mesa decorativa cromada diseño de hogar.Medidas: 22cm de diametro x10cm de alto ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/centrodemesa.jpg',
    price: 1580,
  },
  {
    id: '56',
    title: 'Botellas| Botellas  con sorbete',
    description:" Botellas Plasticas capacidad 190cc Altura 14 cm5cm Ancho Boca 3,5cm Tapon plastico a presion",
    company: 'BAZAR',
    image:
      './Img/BAZAR/botellas.jpg',
    price:550 ,
  },
  {
    id: '57',
    title: 'Bateria de cocina | Juego de hollas cocina Tramontina',
    description:" Bateria de cocina tramontina Linea TURIM 7 PIEZAS",
    company: 'BAZAR',
    image:
      './Img/BAZAR/bateriadecocina.jpg',
    price: 15600,
  },
  {
    id: '58',
    title: 'Fuente|Fuente asadera de vidrio Templado Horno 4,7 lt',
    description:" Producto seguro de usar en horno de microondas,horno convencional(precalentado),refrigerador y lavavajillas",
    company: 'BAZAR',
    image:
      './Img/BAZAR/asadera.jpg',
    price: 3130,
  },
  {
    id: '59',
    title: 'Decoracion | Alhajero sillon',
    description:" Material:tela,sintetico.Estampada:flores.Forma:sillon antiguo",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/alajerosillon.jpg',
    price: 2100,
  },
  {
    id: '60',
    title: 'Chapa| Carteles con frases ',
    description:"Carteles retro en chapa rigida,ideales para decorar cualquier ambiente. ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/cartel de chapa.jpg',
    price: 650,
  },
  {
    id: '61',
    title: 'Dispenser |Dispenser para detergente porta esponja ',
    description:" Ideal para mantener tu cocina ordenada medidas:10cm. Ancho:x 8,5 cm.Profundidad x18cmAlto.Capacidad:450cc",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/dosificador.jpg',
    price: 1700,
  },
  {
    id: '62',
    title: 'Espejpo|Espejo de tocador ',
    description:"Espejo maquillaje doble cara con aumento  de 1x/2x ,para baño,dormitorio,escritorio,color negro.  ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/espejo-madera.jpg',
    price: 3500,
  },
  {
    id: '64',
    title: 'Hornito | Hornito elefante deco',
    description:"Material: ceramica,Dimensiones:9cm alto. ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/hornitoelefante.jpg',
    price: 550,
  },
  {
    id: '65',
    title: 'Macetita| Macetita deco ',
    description:"Maceta plastica nordica Premiun decorativa.Altura:16 cm. Diametro de boca: 18 cm ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/macetita.jpg',
    price: 600,
  },
  {
    id: '66',
    title: 'Orgnizador|Organizador 3 cajones ',
    description:"Material:plastico,contiene:organizador multiuso,3 cajones con manija,dimensiones:24x30cm. ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/organizador.jpg',
    price: 2700,
  },
  {
    id: '67',
    title: 'Porta botella| Porta botella + 2 posa copas ',
    description:"Material:metalico.Madera(pie)capacidad:1 botella (no incluida) ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/portabotella.jpg',
    price: 1800,
  },
  {
    id: '66',
    title: 'Portaretrato|Porta retrato frases 6 fotos',
    description:"Material:plastico.Color:gris oscuro.Dimensiones : 2 de 10x10 cm , 3 de 10 x15cm y 1 de 12cmx18 cm  ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/portaretrato.jpg',
    price:2000,
  },
  {
    id: '67',
    title: 'Reloj | Reloj marco ancho paris ',
    description:"Material:plastico.Marco:negro.Dimensiones:75 cm ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/relojantiguo.jpg',
    price:8700,
  },
  {
    id: '69',
    title: ' Reloj| Reloj marco color cobre ',
    description:"Material:metalico.Contiene reloj de pared.Dimensiones:30 cm. ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/relojpared.jpg',
    price: 2200,
  }, 
  {
    id: '70',
    title: 'Botella térmica',
    description:"Botella térmica de acero inoxidable. Viene en hermosos tonos pasteles para acompañarte a donde vayas. Capacidad: 400ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/termoaceroinox.jpg',
    price: 850,
  },
  {
    id: '71',
    title: 'Botella A5',
    description:"Este increíble modelo de botella es ideal para llevar a clases y que es del mismo tamaño de tus apuntes! Capacidad: 400ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellaA5.jpg',
    price: 1050,
  },
  {
    id: '72',
    title: 'Botella Astronauta',
    description:"Con este innovador modelo vas a poder optimizar el máximo espacio posible. No pierde y cuando queda vacía, podes guardarla hasta en el bolsillo más pequeño. Capacidad: 350ml.",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellabolsa.jpg',
    price: 980,
  },
  {
    id: '73',
    title: 'Botella Byka',
    description:"Esta botella es de acero inoxidable, con tapa a rosca que no pierde nunca! Capacidad: 400ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellacolores.jpg',
    price: 780,
  },
  {
    id: '74',
    title: 'Botella con Funda',
    description:"Con esta funda de silicona, evitas rayones y proteges mucho mas a tu botella de golpes. Capacidad: 550ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellaconfunda.jpg',
    price: 990,
  },
  {
    id: '75',
    title: 'Botella Contigo',
    description:"Con su tapa atada a la botella, no la vas a perder nunca! Capacidad: 450ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellacontigo.jpg',
    price: 860,
  },
  {
    id: '76',
    title: 'Botella Comprimible',
    description:" Dos en una! Podes extenderla y tener una botella de mayor capacidad o comprimirla y llevarla a todos lados. Hecha de silicona. Capacidad: 400ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellaextensible.jpg',
    price: 900,
  },
  {
    id: '77',
    title: 'Mini Bottle',
    description:" Ideal para los chicos para llevarse para la merienda en el cole. Capacidad: 250ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellamini.jpg',
    price: 480,
  },
  {
    id: '78',
    title: 'Botellón GYM',
    description:"Botellón ideal para que lleves a tus entrenamientos, con un diseño muy deportivo. Capacidad: 1000ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellonnegro.jpg',
    price: 1400,
  },
  {
    id: '79',
    title: 'Botellón Bottled Joy',
    description:" Tu compañero de workouts. Imprescindible para llevarla todo el dia con vos, sin tener que recargar constantemente. Capacidad: 1000ml. ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/botellonrosa.jpg',
    price: 1350,
  },
  {
    id: '80',
    title: 'Aceite Esencial de Lavanda',
    description:"Con un increible aroma a lavanda, perfumá tu hogar. Aceite para hornito. Capacidad: 30ml. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/aceitelavanda.jpg',
    price: 380,
  },
  {
    id: '81',
    title: 'Aceite Esencial de Vainilla',
    description:" Dulce aroma a vainilla para disfrutar de estar en casa. Capacidad: 30ml. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/aceitevainilla.jpg',
    price: 380,
  },
  {
    id: '82',
    title: 'Hornito para aceites aromáticos',
    description:" Hornito de cerámica para usar los aceites esenciales y perfumar tu hogar.",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/hornitoaceite.jpg',
    price: 740,
  },
  {
    id: '83',
    title: 'Mano Scents',
    description:" Soporte de cerámica con forma de mano para usar con aceites esenciales. Con este diseño artistico, perfumas y decoras tu casa al mismo tiempo.",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/hornitoaceitemano.jpg',
    price: 1200,
  },
  {
    id: '84',
    title: ' Portasahumerio Inverted',
    description:"Este innovador soporte invertido para sahumerios va a dar un toque extra de elegancia en tu hogar. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/portasahumerio.jpg',
    price: 990,
  },
  {
    id: '85',
    title: 'Love Ritual Kit ',
    description:" Kit para renovar energías y sanar el alma de rosas. Imprescindible para tomarse una tarde y darse un mimo. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/ritualkit.jpg',
    price: 1000,
  },
  {
    id: '86',
    title: 'Sahumerios',
    description:" Llena tus espacios de buenas vibras con sahumerios. Este box tiene 15 sahumerios variados. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/shaumerios.jpg',
    price: 500,
  },
  {
    id: '87',
    title: 'Vela Lait de Coco',
    description:" Deja que el suave y dulce aroma del coco te lleve a un lugar de relajación con esta increible vela. Hecha con productos orgánicos con aroma a coco. ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/velacoco.jpg',
    price: 750,
  },
  {
    id: '88',
    title: ' Vela Macaron Rose',
    description:" Prendé esta vela, cerras los ojos y estas en París. Vela de elementos orgánicos con aroma a rosa y macaron.",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/velamacaronrose.jpg',
    price: 750,
  },
  {
    id: '89',
    title: 'Vela Winter Balsam',
    description:" Vela con aroma a naranja, pino y madera de cedro.",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/velapinonaranja.jpg',
    price: 750,
  },
  {
    id: '90',
    title: 'Abrochadora Ted Baker',
    description:" Delicada abrochadora que no puede flatarte en la oficina! ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/abrochadora.jpg',
    price: 800,
  },
  {
    id: '91',
    title: ' Agenda Weekly Planner',
    description:" Hermosas agendas en tonos pasteles para organizar tus semanas y no perderte de nada!  ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/agenda.jpg',
    price: 800,
  },
  {
    id: '92',
    title: 'Cartucheras',
    description:" Son un must para la facu estas divertidas cartucheras que entran en cualquier bolso y son super prácticas para llevar los escenciales a las clases. ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/cartuchera.jpg',
    price: 400,
  },
  {
    id: '93',
    title: 'Cintas Decorativas',
    description:" Cuatro cintas de diferentes colores y grosor para decorar dando un toque especial a lo que quieras! Cuatro cintas de 10 metros cada una.",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/cintas.jpg',
    price: 400,
  },
  {
    id: '94',
    title: 'Lapiceras Animalitos',
    description:" Tiernas y super divertidas lapiceras de animalitos para llevar a todos lados con toda la onda. Vienen 4 lapiceras diferentes por pack.",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/lapicerasositos.jpg',
    price: 500,
  },
  {
    id: '95',
    title: 'Señaladores',
    description:" Con estos señaladores metálicos numerados, no vas a perderte más estudiando. Vienen 15 señaladores numerados.",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/marcadoreshojas.jpg',
    price: 450,
  },
  {
    id: '96',
    title: 'Resaltadores Square Up',
    description:" Cinco resaltadores en tonos pasteles infaltables en cualquier cartuchera. ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/resaltadores.jpg',
    price: 600,
  },
  {
    id: '97',
    title: 'Clip Set',
    description:" Set de 4 tipos de clips diferentes en todos rose gold, para que uses en la oficina con todo el glamour posible. ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/setclips.jpg',
    price: 500,
  },
  {
    id: '98',
    title: ' Tijera Rose',
    description:" Divina tijera rose gold, con un filo excepcional. ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/tijera.jpg',
    price: 650,
  },
  {
    id: '99',
    title: 'To Do Lists',
    description:"Hermoso block de notas en tonos pastel para organizar tu día de la mejor manera! Vienen 100 hojas por block. ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/todolists.jpg',
    price: 300,
  },



  
];
