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
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '35',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '36',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '37',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '38',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '39',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '40',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '41',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '42',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '43',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '44',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '45',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '46',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '47',
    title: '',
    description:" ",
    company: 'ACCESORIOS',
    image:
      './Img/ACCESORIOS/',
    price: 0,
  },
  {
    id: '48',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '49',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '50',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '51',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '52',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '53',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '54',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '55',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '56',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '57',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '58',
    title: '',
    description:" ",
    company: 'BAZAR',
    image:
      './Img/BAZAR/',
    price: 0,
  },
  {
    id: '59',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '60',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '61',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '62',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '64',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '65',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '66',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '67',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '66',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '67',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '69',
    title: '',
    description:" ",
    company: 'DECOHOGAR',
    image:
      './Img/DECOHOGAR/',
    price: 0,
  },
  {
    id: '70',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '71',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '72',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '73',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '74',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '75',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '76',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '77',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '78',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '79',
    title: '',
    description:" ",
    company: 'BOTELLAS',
    image:
      './Img/BOTELLAS/',
    price: 0,
  },
  {
    id: '80',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '81',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '82',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '83',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '84',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '85',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '86',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '87',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '88',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '89',
    title: '',
    description:" ",
    company: 'AROMATERAPIA',
    image:
      './Img/AROMATERAPIA/',
    price: 0,
  },
  {
    id: '90',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '91',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '92',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '93',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '94',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '95',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '96',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '97',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '98',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },
  {
    id: '99',
    title: '',
    description:" ",
    company: 'LIBRERIA',
    image:
      './Img/LIBRERIA/',
    price: 0,
  },



  
];
