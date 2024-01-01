// const data = [
//     {
//         name: 'Creality Ender 3 3D Printer',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'ABS', 'TPU'],
//         price: 179.00,
//         picture: 'https://m.media-amazon.com/images/I/61L4aoIqYOL._SX522_.jpg',
//         category: ['beginner'],
//         buildplate: '220x220x250mm',
//         notes: 'The perfect printer for first time users. Includes multiple safety features to help begginers safely print.',
//         link: 'https://www.amazon.com/Comgrow-Creality-Ender-Aluminum-220x220x250mm/dp/B07BR3F9N6/ref=sr_1_3?keywords=3d+printers&sr=8-3&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0'
//     },
//     {
//         name: 'Creality Ender 3 V2 3D Printer',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'ABS', 'TPU'],
//         price: 279.99,
//         picture: 'https://m.media-amazon.com/images/I/61Jg1UeOkKL._SX522_.jpg',
//         category: ['beginner','intermediate'],
//         buildplate: '220x220x250mm',
//         notes: 'An upgraded version of the original Ender 3, this inslcudes a glass bed and a silent motor drivers, which results in silet operations',
//         link: 'https://www.amazon.com/Official-Creality-Motherboard-Carborundum-8-66x8-66x9-84/dp/B07FFTHMMN/ref=sr_1_9?keywords=3d+printers&sr=8-9&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3'
//     },
//     {
//         name: 'Creality Ender 3 S1 Pro 3D Printer',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'ABS', 'TPU', 'NYLON', 'PETG'],
//         price: 499.00,
//         picture: 'https://m.media-amazon.com/images/I/716O-tdBGVL._AC_SX466_.jpg',
//         category: ['intermediate'],
//         buildplate: '220x220x270mm',
//         notes: 'A fully remodel of the orginial Ender 3 Series, perfectly made to be the second printer in an arsenal.',
//         link: 'https://www.amazon.com/Creality-Ender-S1-3D-220x220x270/dp/B0BKFNPWR4/ref=sr_1_18?keywords=3d%2Bprinters&sr=8-18&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3&th=1'
//     },
//     {
//         name: 'ANYCUBIC Photon Mono X2 Resin 3D Printer',
//         filament: 'LIQUID',
//         sfilaments: ['ANYCUBIC UV RESIN'],
//         price: 339.99,
//         picture: 'https://m.media-amazon.com/images/I/61UxxQQVQyL._AC_SY550_.jpg',
//         category: ['advanced'],
//         buildplate: '197x123x200mm',
//         notes: 'A resin 3d printer only made for experianced indivduals, uses harsh chemicals that has fumes that may be harmful if inhaled',
//         link: 'https://www.amazon.com/ANYCUBIC-Assembled-Innovation-Off-line-Printing/dp/B0BDD1K2XZ/ref=sr_1_21?keywords=3d%2Bprinters&sr=8-21&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&th=1'
//     },
//     {
//         name: 'Prusa i3 MK3S+ 3D Printer',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'ABS', 'TPU', 'NYLON', 'PETG'],
//         price: 760.00,
//         picture: 'https://m.media-amazon.com/images/I/419WEld6XGS._AC_.jpg',
//         category: ['intermediate'],
//         buildplate: '210x210x250',
//         notes: 'A high quality 3D printer made by PRUSA RESEARCH. This 3D printer prints very high quality prints and have some very cool features',
//         link: 'https://www.amazon.com/Removable-Beginner-Friendly-Automatic-Calibration-9-84%C3%978-3%C3%978-3/dp/B07FTHMPSQ/ref=sr_1_43?keywords=3d%2Bprinters&sr=8-43&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&th=1'
//     },
//     {
//         name: 'Creality CR-30 Infinite Z Belt 3D Printer',
//         filament: '1.75mm',
//         sfilaments:[ 'PLA', 'ABS', 'TPU', 'NYLON', 'PETG'],
//         price: 899.00,
//         picture: 'https://m.media-amazon.com/images/I/61-zxiHeSwS._AC_SX466_.jpg',
//         category: ['advanced'],
//         buildplate: '200x170x∞mm',
//         notes: 'A 45 Degree angled hotend with a capability to print in the X axis as long as possible.Attatchments are available to support the long print volume. A 3D Mill/Belt build plate.',
//         link: 'https://www.amazon.com/Creality-3DPrintMill-Infinite-Continuous-Upgraded/dp/B093FH5NFR/ref=sr_1_52?keywords=3d+printers&sr=8-52&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf'
//     },
//     {
//         name: 'Sovol 3D SV04 IDEX 3D Printer',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'ABS', 'TPU', 'NYLON', 'PETG'],
//         price: 579.00,
//         picture: 'https://m.media-amazon.com/images/I/614wSKkGPoL._AC_SX466_.jpg',
//         category: ['intermediate'],
//         buildplate: '300x300x400mm',
//         notes: 'Sovol SV04 3D printer is equipped with independent dual direct drive metal extruders that allow you to print two different colors, two different materials and two models simultaneously in the same or opposite direction.',
//         link: 'https://www.amazon.com/Sovol-Independent-Extruder-Motherboard-Leveling/dp/B09MLSSKRD/ref=sr_1_62?keywords=3d%2Bprinters&sr=8-62&ufe=app_do%3Aamzn1.fos.2b70bf2b-6730-4ccf-ab97-eb60747b8daf&th=1'
//     },
//     {
//         name: 'MakerBot Replicator + 3D Printer, with swappable Smart Extruder+',
//         filament: '1.75mm',
//         sfilaments: ['PLA', 'MakerBot Tough PLA'],
//         price: 2068.17,
//         picture: 'https://m.media-amazon.com/images/I/61B5COkoBNL._SX522_.jpg',
//         category: ['advanced'],
//         buildplate: '193x295x165mm',
//         notes: 'The MakerBot Replicator+ is engineered and tested for reliable, faster printing. The Replicator+ prints high-quality concept models faster, easier, and with a bigger build volume. ',
//         link: 'https://www.amazon.com/MakerBot-MP07825EU-Replicator-3D-Printer/dp/B01LZSUQKL/ref=sr_1_10?keywords=3d%2Bprinters%2Bfor%2Badults&sr=8-10&th=1'
//     },
// ]