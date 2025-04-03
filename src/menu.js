const menupage = (function() {
    const content=document.querySelector("#content");

    const container=document.createElement("div");
    container.classList="menu";
    content.appendChild(container);

    const app = document.createElement("div");
    container.appendChild(app)

    const apphead = document.createElement("h2");
    apphead.textContent = "Appetizers";
    app.appendChild(apphead);
    const applist = document.createElement("ol");
    applist.type = "1"
    app.appendChild(applist)
    const item1 = document.createElement("li");
    applist.appendChild(item1);
    const cal = document.createElement("h3");
    cal.textContent = "Crispy Calamari";
    item1.appendChild(cal);
    const caldes = document.createElement("div");
    caldes.textContent = "Lightly breaded and fried calamari, served with a zesty marinara dipping sauce.";
    item1.appendChild(caldes);
    const calpr = document.createElement("div");
    calpr.textContent = "$12.99";
    item1.appendChild(calpr);

    const item2 = document.createElement("li");
    applist.appendChild(item2);
    const shrimp = document.createElement("h3");
    shrimp.textContent = "Shrimp Cocktail";
    item2.appendChild(shrimp);
    const shrimpdes = document.createElement("div");
    shrimpdes.textContent = "Jumbo shrimp chilled and served with a tangy cocktail sauce.";
    item2.appendChild(shrimpdes);
    const shrimppr = document.createElement("div");
    shrimppr.textContent = "$14.99";
    item2.appendChild(shrimppr);

    const item3 = document.createElement("li");
    applist.appendChild(item3);
    const oy = document.createElement("h3");
    oy.textContent = "Oysters on the Half Shell";
    item3.appendChild(oy);
    const oydes = document.createElement("div");
    oydes.textContent = "Freshly shucked oysters, served with lemon wedges and mignonette sauce.";
    item3.appendChild(oydes);
    const oypr = document.createElement("div");
    oypr.textContent = "$16.99 (half dozen)";
    item3.appendChild(oypr);

    const item4 = document.createElement("li");
    applist.appendChild(item4);
    const cev = document.createElement("h3");
    cev.textContent = "Seafood Ceviche";
    item4.appendChild(cev);
    const cevdes = document.createElement("div");
    cevdes.textContent = "Fresh shrimp, scallops, and fish marinated in lime juice with tomatoes, cilantro, and onions.";
    item4.appendChild(cevdes);
    const cevpr = document.createElement("div");
    cevpr.textContent = "$13.99";
    item4.appendChild(cevpr);

    const item5 = document.createElement("li");
    applist.appendChild(item5);
    const clam = document.createElement("h3");
    clam.textContent = "Baked Clams";
    item5.appendChild(clam);
    const clamdes = document.createElement("div");
    clamdes.textContent = "Clams topped with seasoned breadcrumbs and parmesan, baked to perfection.";
    item5.appendChild(clamdes);
    const clampr = document.createElement("div");
    cevpr.textContent = "$11.99";
    item5.appendChild(clampr);
    
    const en = document.createElement("div");
    container.appendChild(en)
    const enhead = document.createElement("h2");
    enhead.textContent = "Entrees";
    en.appendChild(enhead);
    const enlist = document.createElement("ol");
    enlist.type = "1"
    en.appendChild(enlist)
    
    const en1 = document.createElement("li");
    enlist.appendChild(en1);
    const salm = document.createElement("h3");
    salm.textContent = "Grilled Salmon";
    en1.appendChild(salm);
    const salmdes = document.createElement("div");
    salmdes.textContent = "Fresh, wild-caught salmon grilled to perfection, served with seasonal vegetables and garlic mashed potatoes.";
    en1.appendChild(salmdes);
    const salmpr = document.createElement("div");
    salmpr.textContent = "$22.99";
    en1.appendChild(calpr);

    const en2 = document.createElement("li");
    enlist.appendChild(en2);
    const lob = document.createElement("h3");
    lob.textContent = "Lobster Tail";
    en2.appendChild(lob);
    const lobdes = document.createElement("div");
    lobdes.textContent = "Steamed lobster tail served with drawn butter, seasonal vegetables, and rice pilaf.";
    en2.appendChild(lobdes);
    const lobpr = document.createElement("div");
    lobpr.textContent = "$39.99";
    en2.appendChild(lobpr);

    const en3 = document.createElement("li");
    enlist.appendChild(en3);
    const paella = document.createElement("h3");
    paella.textContent = "Seafood Paella";
    en3.appendChild(paella);
    const paellades = document.createElement("div");
    paellades.textContent = "A savory Spanish-style rice dish with shrimp, scallops, mussels, and clams, all simmered in a rich tomato saffron sauce.";
    en3.appendChild(paellades);
    const paellapr = document.createElement("div");
    paellapr.textContent = "$26.99";
    en3.appendChild(paellapr);

    const en4 = document.createElement("li");
    enlist.appendChild(en4);
    const snap = document.createElement("h3");
    snap.textContent = "Blackened Red Snapper";
    en4.appendChild(snap);
    const snapdes = document.createElement("div");
    snapdes.textContent = "Blackened red snapper fillet served with roasted potatoes and grilled asparagus.";
    en4.appendChild(snapdes);
    const snappr = document.createElement("div");
    snappr.textContent = "$23.99";
    en4.appendChild(snappr);

    const en5 = document.createElement("li");
    enlist.appendChild(en5);
    const fry = document.createElement("h3");
    fry.textContent = "Fried Seafood Platter";
    en5.appendChild(fry);
    const frydes = document.createElement("div");
    frydes.textContent = "A generous portion of shrimp, oysters, and calamari, lightly battered and fried, served with fries and coleslaw.";
    en5.appendChild(frydes);
    const frypr = document.createElement("div");
    frypr.textContent = "$24.99";
    en5.appendChild(frypr);

    const en6 = document.createElement("li");
    enlist.appendChild(en6);
    const sear = document.createElement("h3");
    sear.textContent = "Seared Scallops";
    en6.appendChild(sear);
    const seardes = document.createElement("div");
    seardes.textContent = "Pan-seared scallops with a citrus beurre blanc sauce, served with wild rice and sautéed spinach.";
    en6.appendChild(seardes);
    const searpr = document.createElement("div");
    searpr.textContent = "$28.99";
    en6.appendChild(searpr);

    const side = document.createElement("div");
    container.appendChild(side)
    const sidehead = document.createElement("h2");
    sidehead.textContent = "Sides";
    side.appendChild(sidehead);
    const sidelist = document.createElement("ol");
    sidelist.type = "1"
    side.appendChild(sidelist)
    
    const side1 = document.createElement("li");
    sidelist.appendChild(side1);
    const mash = document.createElement("h3");
    mash.textContent = "Garlic Mashed Potatoes";
    side1.appendChild(mash);
    const mashpr = document.createElement("div");
    mashpr.textContent = "$5.99";
    side1.appendChild(mashpr);

    const side2 = document.createElement("li");
    sidelist.appendChild(side2);
    const asp = document.createElement("h3");
    asp.textContent = "Grilled Asparagus";
    side2.appendChild(asp);
    const asppr = document.createElement("div");
    asppr.textContent = "$6.99";
    side2.appendChild(asppr);

    const side3 = document.createElement("li");
    sidelist.appendChild(side3);
    const fries = document.createElement("h3");
    fries.textContent = "French Fries";
    side3.appendChild(fries);
    const friespr = document.createElement("div");
    friespr.textContent = "$4.99";
    side3.appendChild(friespr);

    const side4 = document.createElement("li");
    sidelist.appendChild(side4);
    const veg = document.createElement("h3");
    veg.textContent = "Seasonal Vegetables";
    side4.appendChild(veg);
    const vegpr = document.createElement("div");
    vegpr.textContent = "$5.99";
    side4.appendChild(vegpr);

    const side5 = document.createElement("li");
    sidelist.appendChild(side5);
    const rice = document.createElement("h3");
    rice.textContent = "French Rice";
    side5.appendChild(rice);
    const ricepr = document.createElement("div");
    ricepr.textContent = "$4.99";
    side5.appendChild(ricepr);

    const bev = document.createElement("div");
    container.appendChild(bev)
    const bevhead = document.createElement("h2");
    bevhead.textContent = "Beverages";
    bev.appendChild(bevhead);
    const bevlist = document.createElement("ol");
    bevlist.type = "1"
    bev.appendChild(bevlist)
    
    const bev1 = document.createElement("li");
    bevlist.appendChild(bev1);
    const tea = document.createElement("h3");
    tea.textContent = "Iced Tea";
    bev1.appendChild(tea);
    const teapr = document.createElement("div");
    teapr.textContent = "$3.99";
    bev1.appendChild(teapr);

    const bev2 = document.createElement("li");
    bevlist.appendChild(bev2);
    const lemon = document.createElement("h3");
    lemon.textContent = "Lemonade";
    bev2.appendChild(lemon);
    const lemonpr = document.createElement("div");
    lemonpr.textContent = "$4.99";
    bev2.appendChild(lemonpr);

    const bev3 = document.createElement("li");
    bevlist.appendChild(bev3);
    const wine = document.createElement("h3");
    wine.textContent = "House Wine";
    bev3.appendChild(wine);
    const winedesc = document.createElement("div");
    winedesc.textContent = "Red or White"
    bev3.appendChild(winedesc);
    const winepr = document.createElement("div");
    winepr.textContent = "$7.99 per glass | $25.99 per bottle";
    bev3.appendChild(winepr);

    const bev4 = document.createElement("li");
    bevlist.appendChild(bev4);
    const beer = document.createElement("h3");
    beer.textContent = "House Beer";
    bev4.appendChild(beer);
    const beerpr = document.createElement("div");
    beerpr.textContent = "$6.99";
    bev4.appendChild(beerpr);

    const bev5 = document.createElement("li");
    bevlist.appendChild(bev5);
    const soda = document.createElement("h3");
    soda.textContent = "Soda";
    bev5.appendChild(soda);
    const sodadesc = document.createElement("div");
    sodadesc.textContent = "Coke, Diet Coke, Sprite"
    bev5.appendChild(sodadesc);
    const sodapr = document.createElement("div");
    sodapr.textContent = "$2.99";
    bev5.appendChild(sodapr);
});

export {menupage};