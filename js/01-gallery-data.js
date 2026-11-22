const $ = (s) => document.querySelector(s),
  I = (k, a, z, c) =>
    `<img src="${k}" alt="${a}" decoding="async" ${c ? `class="${c}"` : ``} ${z ? `data-zoom` : ``}>`;
const U = {
  lg0: "assets/4fe357d3f1941e0ac4384e2710ee4437a7d3a7b54b0d952384470c0e1994ee90.webp",
  lg1: "assets/c7a070611b424022e325f365688f89a999c22500f262ec9760be1309003b8afb.webp",
  lg2: "assets/aea8891172c674669e77cc7f45b33320ebb5916b722190ad7d54095dbbb19a68.webp",
  lg3: "assets/c65bc8b9ef9f8eaefe2e2050fbbaf92cbdf8dc7f75ba4df6e91aeb2883078c71.webp",
  lg4: "assets/ff20ac9009965cdc7549f36c41428a50f4b44b559bd49d917a4d65c954be7c87.webp",
  lg5: "assets/b5aefbde3d54bdef9b32f42ba021941da4e80375e94fd507ac24e80415c13f44.webp",
  lg6: "assets/086dd0ef0d5bc68bf690573f71fc978d249cf012e50eb025276628aed55fdc73.webp",
  lg7: "assets/474162b388d2f1c4d617f32588c62193bc4565d418cd81c10724d83e401db823.webp",
  lg8: "assets/f92c56746cf3885515e733cb1acb00c22d229099948ded76dcf22585228762aa.webp",
  lg9: "assets/4392aeac3cab93f9fee3e1a26fd11a57ffd84733848b92e7e815f3f02d6b2f72.webp",
  lg10: "assets/f69f3cc3f11cea11b5d049d6e93dcee16acc87b46d056c50c96e6d3da3e1af17.webp",
  lg11: "assets/1a287ad754065b1f0964a5b8cdf3204e6cbe519a2e25b2f25112a8e059990ee5.webp",
  lg12: "assets/5a7f1a46a51aa0eaeda0008927c7aa97867a2a061532c1c09832f03b4f299294.webp",
  lg13: "assets/5b8613f8e8ed94ed68ae56739908b52d0c5272c46a7e020895f4a9873f124d91.webp",
  lg14: "assets/459de8d0c572c830ba8d284231950b8cf1d2aba5f351f31cf18f171b8bb286c3.webp",
  lg15: "assets/069c53751510046dbaf93966c046add7879d881e6628c258297a0ea14afa44b1.webp",
  lg16: "assets/2cb862ec778a71054bfca381ecedc2a2d8c01432789d906e271d60a25c84f237.webp",
  lg17: "assets/a306f4dd52a01a6aa98b0ee3c617af923b780daaa44c440caa21e113fd6d4e17.webp",
  lg18: "assets/9f45092a62f2b5caa65f4e7c221c37a6cbfa01609ca429f0fdf7a44f7bb545ab.webp",
  dr0: "assets/db5ee35b6a20b58e6640667877002cc26ddb7a0e56dc3c8d732e89dbb78f5c60.png",
  dr1: "assets/18cf39b603ebd2c30acf524cfece31f70112083964e52860ac702361d619dc0a.png",
  dr2: "assets/921e1b66d51430a05cfca1e73439b49312f9818e1999b43719c08379155dcbae.png",
  dr3: "assets/c87bad4ee717b1bd58ba4f0e56fd0cf3458c94e7687dda97352c0f776a3fdf5b.png",
  dr4: "assets/55332dd1b20662d12dd3e02feb9467cb30d6835727a0541eb5f600dac1603b13.png",
  dr5: "assets/0435e683b7ec439ae7079c6cffb36e30f8c677f8fd4cabcc437fc15b461fed6c.png",
  dr6: "assets/5683c57145d77579913f86fef37304f37498bde286dfa267ed21b13a3cd86692.png",
  dr7: "assets/c7a190f5c1f49e1b5fd9d320aeb016a29fd90a9b995f7de56131358fed9a2fad.png",
  dr8: "assets/77f821b415c66639dd38dbff60d2410fdd57169e72eacbb29d3764d1c6cd965e.png",
  dr9: "assets/3a86479aaf60221cbb3d1e6029cd8d8e6da04627c870ba734acec26ac95aaee1.png",
  dr10: "assets/ba9e31c7734bbf96af1328b8d2a17684205878e5dcf18e27a87b95a101be54f4.png",
  dr11: "assets/ca0e6685bc05a72c12d52d4d3cbf5bdd728361a54212afc23650378e2d9d65e7.png",
  dr12: "assets/b8b712feb407f35322ef0ed3eb5eb1bb89c93e5416159d6994a21f3d6be79aa4.png",
  dr13: "assets/adad22f5e1ad9957be782523007ab9f39b47499fa81ad1ee2950630661dc3ecd.png",
  dr14: "assets/b3a488fd21790f3d2382388746343d5b2e41051b4c1a9d13d0e531bbb0356b7b.png",
  dr15: "assets/b15b211618984b1a09428d8deaa3d1464cc4c8d925bc5298a4766ac69510f34c.png",
  dr16: "assets/871bbc5f989cac685f65746c0c08e4606d31c6ff016f43dbbca204e65f56961e.png",
  dr17: "assets/f9dbf68f1202e4d2290b2094bf8445588d967d9a1fa2547d6bb2a17cf275a23c.png",
  dr18: "assets/0db7b3938c0f6ceee6ccd0e8f23be7dd1ac2241318a3521d010ad71e790c5520.png",
  dr19: "assets/216f11a18298e3611158eb5535c212774cf4605032a4ea540d5f1da318bde8b6.png",
  board14: "assets/6954ff44a9d6608469dfaeab0100efcefcdc7ac88fde4001ba5ba352363a61cf.webp",
  board15: "assets/c78e9c5de82e04518d9c8dc226f7ad162b4e552e605143cf66cf46c71977f616.webp",
  board16: "assets/58742477cd18781762b6ad1321f25421b6deec7fc8cbf8da98ef21d04cbcc0f5.webp",
  board17: "assets/9262e8a309b0db6d6d112162d692eda253244aaa2840cf6828d90b04616cbf1e.webp",
  board18: "assets/e00c62379e789b88b3d51d83c19602f38ab009e4e1bd79be41c771493e49ed01.webp",
  board19: "assets/dba650443f068d9235e7b747c64d94e3ab9cd8fea0a550a76509513151f33e85.webp",
  board20: "assets/3292d8251806655eb05033d446deb4e632c7c87968cb3adcd1ac74627d768a80.webp",
  po0: "assets/fc383d2db44578ed5971cf62b3bb9b08845d4b7ffa5744ab45990303df36273a.webp",
  po1: "assets/a9ee353649cb96033b3db0976605940a9dec62a2f961916c585ceeab93c22543.webp",
  po2: "assets/7a3c105a6d240f7aa9b5b2e722a971d1a8480da5f3896e25d13d0eb20a38e8ca.webp",
  po3: "assets/b452eb550efbfd6030f65d735107a43210bd0f4ccbc13aa88e1bdf1d67b725c8.webp",
  po4: "assets/906c22e7043c268bba817781ca852b063b054bb1b92fc3d1260ad9263f2db8eb.webp",
  po5: "assets/2979cf59b2487b7bc079a543510369de11d67f4c38b59b83d62a040d91ea0866.webp",
  na0: "assets/1b0ea016f1cdfab6776bdf4fc194239d95d432b01aed5ee5d6b5bf40ff010b06.webp",
  na1: "assets/a8d862e2bb3b2659675c4c5d8f387db5e683b05b64571a5588f25a39436b9a47.webp",
  na2: "assets/f3b0dbd89e024b1a46085cc79d9dbd3efae139be93034e6e8c6af09b45cf447f.webp",
  na3: "assets/f31e74b3cbb40c60c1d657ced65142e133278c8e7f534c0bc7dc330668fec4c0.webp",
  na4: "assets/7a31354202aebfcba1e75619ea3d0be68bc2043c72bb20338242fae1f7be0383.webp",
  na5: "assets/bd549896e9e2cb87db40297a8347fc3f4cb791ee4ed92889029aa56340478f26.webp",
  na6: "assets/638e593de11550f47ff2bc6f157aed9ba5dedaa317b2410ad29995004c7351bc.webp",
  na7: "assets/e13d5f8af02e8ae55d033bd332f56a71fc751dac4f0e8002fbd79ed96881ba20.webp",
  na8: "assets/b15cf614fb9679668d02bf94222838d6a6a1bcb7da4eb864bc7bad00f6d57d19.webp",
  na9: "assets/c767b8e5fcbef58c8bcff105d63f03d1f045c58c1bcb8f88c8647d46d4c35580.webp",
  na10: "assets/3102232ae05c84f682200752627455606145fba06521e3b8f1099a78398f3223.webp",
  ho0: "assets/79ae3d37c3dcc16e42553503095bf4e93f15a58e6e3d5da22302cb3dfca2cda8.jpg",
  ho2: "assets/6f72ba9e24b5a9e36c36cb36945494ee553701762a2454ba696d61336dd27ffe.jpg",
  ho7: "assets/eedd9575320af2cc154715e5b035f5c4e760880122bba83f15186059d56526e8.jpg",
  ho8: "assets/bb5071d34cf60c02ad7f2d19614151280a07aa47e50bff2002f973eab9e839ed.jpg",
  ho13: "assets/401029e97725e1804dc94a601c871de26e24cd7174f5c32f9221f144812efd2b.jpg",
  ho16: "assets/36dea223bc1dc29a0c603a859a62b41c6381a639edfd4f14cd9da3f0873bd2e0.jpg",
  ho17: "assets/0ac43b94b6a0844bc358145098f6419d7269cb70a3c33746dbd2fa6c2ce3fbf7.jpg",
  ho19: "assets/ce0aa4d33e3f1f178dfd1b51c05da680bec14dc17fa71ef03209644772447628.jpg",
  ho23: "assets/d1bc244fce256e1332c03efa7fdd8ead9bac48067fad69e4f2db179d0ccb7465.jpg",
  ho24: "assets/8bb987a7490e3d858e20cbd282aa78f8365a0ee02319b04666f663b92a6385f1.jpg",
  ho25: "assets/1b53a72faae2160a851e1209165f549ec5328f1d36d19e6546f8c4ffed47d7cb.jpg",
  ho26: "assets/356dc6d128a2631059fccd8a36d2b7744ee8678a735b7c1f3c7e854c7e817e54.jpg",
  be0: "assets/44a06b259fa572e6de5958c65ad270b27ce44072bb8a03eae9f80ca38cb3e07f.webp",
  be1: "assets/39623460ba24ddca89332d16b8e88f7e12afeb072e89cd6d79ae2a7e5f193e0a.webp",
  be10: "assets/df7bf0405b494cdb21cfe9bcbbbb1d3cd06663b16002317ff939272d83c6583b.webp",
  be9: "assets/63cbc92de8850e1880113a875284bc4d496d749786b7963023480628928a4906.webp",
  be12: "assets/0dba2c350bea3e3fa0f3ed8981e9066430d775bde1631c197130965c42a2495e.webp",
  be6: "assets/e282e33e4abcba9f32ba32043ddb51cf471cdb3ffea7d99b73e59e870dfd52f2.webp",
  be3: "assets/7b221a985ce7f9d05d8d3e8474c825fbda3d3e69a3d7edaf6d3526dea5b26550.webp",
  be17: "assets/3a81a42fa683be76441c79f9526f31b920ff2eb2ba7396b945f26c5c94a4a4a2.webp",
  be16: "assets/11e834b96857e604ca4f5c0bf893a9eaf75ea59f9bffc6a916138d4d36fd0c3f.webp",
  be19: "assets/797b060942b464e25a88940d1b057d7ef7c3430c713b880cf6a18389f109f92f.webp",
  be11: "assets/4284749833760cc74ef13e2bf4ee332c140d823bcbece9c8603d6a62ecf87452.webp",
  be5: "assets/0e521007e342d09eae8b0e97669d16b615580ead7f29c4779290305a147e0cd8.webp",
  bl0: "assets/3f0ee3d4fac3cebef416aff13b44228b4fbcc723394e534cf9cbbb8fde0f43dc.webp",
  bl1: "assets/9d38554352b2e67105aa2310c362c799f8e1a431fd47dadba68b4462c34a3f3f.webp",
  bl2: "assets/414984d748b867a0b2743193f3fe4b9391d6193c6f0448ca24c2870c0032d35e.webp",
  bl3: "assets/9f6f390070e1e3194f6862a8ee1d53c65aaf7814956699f0a6a46f6124cc902e.webp",
  ho1: "assets/43fe4ae7704908c16b3f3c9b647bc54a6877e94556b78aaced5137547148db5f.jpg",
  ho3: "assets/30ba0f498f318af0e7f7cd6f01f24db5703f6d79f8200dcafd43cc5cbfc05ef0.jpg",
  ho4: "assets/5c43c27adceb29d1a7ff346fffc0c29e5478f25ae8547d66a54d762fc2823667.jpg",
  ho5: "assets/bc66a5e424df32f01d3ddaf6c0f40263274870c947499ef9239666e013d2bfa6.jpg",
  ho6: "assets/ac5a3d955d9ef39b451dc16b6d89c2926dc767243d9997f57853d6ebd1770754.jpg",
  ho9: "assets/403bc2f8a288caac8b7f51ca853eebbfc9f290172a585fb143a386a873b94164.jpg",
  ho10: "assets/69da5ba712ab7acfed5b664ffc785c3597af393bc1becb0cac658e47ea39888c.jpg",
  ho11: "assets/321cba642a8f00d6c22ee9619c1722b4d912eb4fbcd95eba94bbf352181ecc14.jpg",
  ho12: "assets/b03bb73bc96d2736dcb86fc7541ea44b32c4efd1baf62c044961d26b37fc8cb3.jpg",
  ho14: "assets/c02a7942c8065c5275ca9a0544c8a1a8c8ccd5e2e71a199e748f198426bed28a.jpg",
  ho15: "assets/0793f124d0c9cf54dbd7a625b2e2dc5b0da66b738c928fdc2de3213742fc2a62.jpg",
  ho18: "assets/197dc0040e0dbbdf57240eec43228e40edfd1c6a28b7c5dcdb78b38a9b4585b4.jpg",
  ho20: "assets/754c87b76655667f5b029bfd2ff487f791100d9fd6c756c3fa8b77f5f170461c.jpg",
  ho21: "assets/6c4fce3b8335e1f947d8f59962913cfd0cd0faa479f258e1087a6a47a9d847f7.jpg",
  ho22: "assets/7ad4e02e1ad8a3590abfd4cfe6fdd0f208f329e8830dc1f63f8afda4aa83037c.jpg",
  ho27: "assets/a28c908b0e45a55b38177c6013e0595d2318091ca31edf923e5cf731e5e8da17.jpg",
  ho28: "assets/06960fcbe392614e306a576086bb988ce5934c38cddd4ac1c9e173676bad7218.jpg",
  ho29: "assets/2435802721dba572f33ccde9d328f9bb6590aba8d842c98764dc7f0c79d7b2d5.jpg",
};
const u = (k) => U[k];
const S = [
  ["About", "s01"],
  ["Journey", "s02"],
  ["Skills", "s04"],
  ["Projects", "projects-title"],
  ["Ishkarra Parfums", "s05"],
  ["Brand identity", "s06"],
  ["Logos", "s07"],
  ["Posters", "s08"],
  ["Photography", "s09"],
  ["Digital and motion", "s10"],
  ["Process", "s11"],
  ["Vision", "s12"],
  ["Achievements", "s03"],
  ["Contact", "s13"],
];
$("#ml").innerHTML = S.map(
  (s, i) => `<li><a href="#${s[1]}"><span>${String(i + 1).padStart(2, "0")}</span>${s[0]}</a></li>`,
).join("");
$("#rail").innerHTML = S.map(
  (s, i) =>
    `<a href="#${s[1]}" data-id="${s[1]}" aria-label="${s[0]}">${String(i + 1).padStart(2, "0")}<span>${s[0]}</span></a>`,
).join("");
document.querySelectorAll("section[data-n]").forEach((s) => {
  if (s.id === "top" || s.id === "about") return;
  const n = document.createElement("div");
  n.className = "no";
  n.setAttribute("aria-hidden", "true");
  n.innerHTML = s.dataset.n + "<small>" + s.dataset.name + "</small>";
  s.prepend(n);
});
// journey
const pt = (i, c) =>
  `<figure class="it pt ${c || ""}">${I(u("dr" + i), "Painting " + (i + 1), 1)}</figure>`;
let j = `<div class="yr"><b class="out" style="font-size:clamp(5rem,18vh,14rem)">Journey</b><p class="lead" style="margin-top:1.6rem;max-width:18ch">Painting first. Then stage, camera and design.</p><p style="margin-top:1rem;opacity:.7">Scroll sideways</p></div><div class="yr"><b style="color:var(--pink)">2022</b><p><strong>Painting at the Institute of Fine Arts, Amman.</strong> A year in the visual arts section, certified by the Ministry of Culture. This is where my eye for light, portrait and symbol began.</p></div>`;
[0, 1, 2, 3, 4, 5, 6].forEach((i, k) => (j += pt(i, ["", "s2", "s3"][k % 3])));
j += `<div class="yr"><b class="out">2023</b><p><strong>Stage and camera.</strong> A year in the institute's performing arts section, while starting a BTEC Diploma in Creative Media Production and my first freelance multimedia work.</p></div>`;
[7, 8, 9, 10, 11, 12, 13].forEach((i, k) => (j += pt(i, ["s3", "", "s2"][k % 3])));
j += `<div class="yr"><b style="color:var(--sky)">Now</b><p><strong>Design, video and photography.</strong> Brand identities, posters, studio and event shoots, and exhibitions, all pointed toward clinical photography.</p></div>`;
[14, 15, 16, 17, 18, 19].forEach((i, k) => (j += pt(i, ["", "s2", "s3"][k % 3])));
$("#jt").innerHTML = j;
// honors gallery: all photos supplied in the replacement archive
const H = [
  ["ho0", "Award and recognition photo 0"],
  ["ho1", "Award and recognition photo 1"],
  ["ho2", "Award and recognition photo 2"],
  ["ho3", "Award and recognition photo 3"],
  ["ho4", "Award and recognition photo 4"],
  ["ho5", "Award and recognition photo 5"],
  ["ho6", "Award and recognition photo 6"],
  ["ho7", "Award and recognition photo 7"],
  ["ho8", "Award and recognition photo 8"],
  ["ho9", "Award and recognition photo 9"],
  ["ho10", "Award and recognition photo 10"],
  ["ho11", "Award and recognition photo 11"],
  ["ho12", "Award and recognition photo 12"],
  ["ho13", "Award and recognition photo 13"],
  ["ho14", "Award and recognition photo 14"],
  ["ho15", "Award and recognition photo 15"],
  ["ho16", "Award and recognition photo 16"],
  ["ho17", "Award and recognition photo 17"],
  ["ho18", "Award and recognition photo 18"],
  ["ho19", "Award and recognition photo 19"],
  ["ho20", "Award and recognition photo 20"],
  ["ho21", "Award and recognition photo 21"],
  ["ho22", "Award and recognition photo 22"],
  ["ho23", "Award and recognition photo 23"],
  ["ho24", "Award and recognition photo 24"],
  ["ho25", "Award and recognition photo 25"],
  ["ho26", "Award and recognition photo 26"],
  ["ho27", "Award and recognition photo 27"],
  ["ho28", "Award and recognition photo 28"],
  ["ho29", "Award and recognition photo 29"],
];
$("#hon").innerHTML = H.map((h) => `<figure>${I(u(h[0]), h[1], 1)}</figure>`).join("");
// craft marquees
const SK = [
  "Multimedia production",
  "Graphic design",
  "Photography",
  "Video editing",
  "Motion graphics",
  "Animation",
  "Visual storytelling",
  "Social media content",
  "Web design",
  "Creative problem-solving",
  "Communication",
  "Time management",
];
$("#cf").innerHTML = SK.map(
  (s) =>
    `<div class="skill-entry"><span class="skill-node" aria-hidden="true"></span><span class="skill-label">${s}</span></div>`,
).join("");
// boards
const B = [
  [
    "board14",
    "Tiny Treasures",
    "Keepsakes wrapped like secrets: soft florals, lavender and fine-line sketches for a gift brand.",
    "#DCD3EA",
    "#2B2145",
    "L",
  ],
  [
    "board15",
    "Aurelle",
    "A moonlit luxury emblem in black, bronze and stone, built for jewelry and ritual.",
    "#17120E",
    "#E7C98F",
    "R",
  ],
  [
    "board16",
    "Mama and Daughters",
    "A family kitchen told in vintage illustration, gingham and warm red.",
    "#8E2A22",
    "#FBE9D0",
    "L",
  ],
  [
    "board17",
    "JiBi Wonder World",
    "A bright, character-led world for children, from first sketch to final cast.",
    "#8FD6F0",
    "#0B3A55",
    "R",
  ],
  [
    "board18",
    "Orbita",
    "A calm space-tech identity: orbit marks, night blue and a quiet app interface.",
    "#0A1233",
    "#9FB8FF",
    "L",
  ],
  [
    "board19",
    "Nocturne",
    "Night-time fragrance, drawn in smoke, city lights and deep indigo.",
    "#1E1538",
    "#F0C6E0",
    "R",
  ],
  [
    "board20",
    "Petal and Post",
    "Floral stationery and bouquets, with hand-drawn posies and red ribbon.",
    "#F4DCD6",
    "#7B1E2B",
    "L",
  ],
];
$("#boards").innerHTML = B.map(
  (b) =>
    `<article class="bp ${b[5]}" style="--c:${b[3]};--k:${b[4]}"><h3>${b[1]}</h3><figure class="im">${I(u(b[0]), b[1] + " brand case study board: initial idea, sketching, design development and final identity", 1)}</figure><div class="nt"><span class="tg">Concept brand</span><p>${b[2]}</p></div></article>`,
).join("");
const ML = ["bl0", "bl1", "bl2", "bl3"]
  .map(
    (k, i) =>
      `<span>${I(u(k) || "", ["JiBi Studio logo", "Nexora News logo", "Orova jewelry logo", "Velora fashion house logo"][i])}</span>`,
  )
  .join("");
$("#mkr").innerHTML = ML + ML + ML + ML;
// logos
const lg = Array.from(
  { length: 19 },
  (_, i) => `<span>${I(u("lg" + i), "Logo presentation " + (i + 1), 1)}</span>`,
);
$("#l1 div").innerHTML = lg.slice(0, 10).join("") + lg.slice(0, 10).join("");
$("#l2 div").innerHTML =
  lg.slice(10).concat(lg.slice(0, 3)).join("") + lg.slice(10).concat(lg.slice(0, 3)).join("");
// posters
const P = [
  ["po2", "Zorya luxury perfume advertisement"],
  ["po0", "Karate poster: Never give up"],
  ["po3", "Poster in Arabic: the story of a nation, Petra and the Jordanian horizon"],
  ["po5", "Hey, JiBi! illustrated poster"],
  ["po1", "Be Active kids karate flyer"],
  ["po4", "Zorya luxury house identity board"],
  ["na10", "Sunset photography poster"],
];
$("#pt").innerHTML =
  `<div class="yr" style="max-width:40vw"><b class="fill" data-fill="po5" style="font-size:clamp(5rem,22vh,16rem)">Posters</b><p class="lead" style="margin-top:1.6rem;max-width:16ch">Visual communication, scaled up.</p><p class="ar" lang="ar" style="font-size:2.4rem;margin-top:.5rem">ملصقات</p></div>` +
  P.map(
    (p, i) =>
      `<figure class="ptr" style="${i % 2 ? "margin-top:10vh" : "margin-bottom:6vh"}">${I(u(p[0]), p[1], 1)}<span class="pcap">${p[1]}</span></figure>`,
  ).join("");
// frames
const N = [
  ["na6", "land"],
  ["na0", "port"],
  ["na3", "port l"],
  ["na8", "land"],
  ["na1", "port"],
  ["na5", "port l"],
  ["na7", "port"],
  ["na2", "port l"],
  ["na9", "port"],
  ["na4", "port l"],
];
$("#fps").innerHTML = N.map((n, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `<figure class="photo-card ${n[1] === "land" ? "landscape" : "portrait"}"><div class="photo-media">${I(u(n[0]), "Batool Shamlakh photograph " + num, 1).replace("<img ", '<img loading="lazy" ', 1)}</div><figcaption><span>${num}</span><span>Photography</span></figcaption></figure>`;
}).join("");
// film
const BT = [
  "be0",
  "be1",
  "be10",
  "be9",
  "be12",
  "be6",
  "be3",
  "be17",
  "be16",
  "be19",
  "be11",
  "be5",
];
const fr = BT.map((k) => I(u(k), "Behind the scenes on a shoot")).join("");
$("#f1").innerHTML = fr + fr;
$("#f2").innerHTML =
  BT.slice()
    .reverse()
    .map((k) => I(u(k), "Behind the scenes on a shoot"))
    .join("") +
  BT.slice()
    .reverse()
    .map((k) => I(u(k), "Behind the scenes on a shoot"))
    .join("");
// process
const ST = [
  [
    "Initial idea",
    "Every project starts with the story, the problem and a handful of brand keywords, gathered into a moodboard.",
    "0 0",
  ],
  [
    "Sketching",
    "Fast pencil explorations: shapes, characters and symbols, before any colour.",
    "100% 0",
  ],
  ["Design development", "Palette, type and patterns are tested on real applications.", "0 100%"],
  [
    "Final identity",
    "The system comes together as logo, packaging, print and digital pieces.",
    "100% 100%",
  ],
];
$("#steps").innerHTML = ST.map(
  (s, i) =>
    `<div class="st" data-bp="${s[2]}"><b>0${i + 1}</b><h3>${s[0]}</h3><p class="txt">${s[1]}</p></div>`,
).join("");
