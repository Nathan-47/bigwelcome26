export function mapFunctionality() {
  const ZONES = [
    {
      id: "curzon-building",
      name: "Curzon",
      tag: "Ground floor · Indoor stalls",
      shape: "polygon",
      points: "1442,1165 1924,1017 1965,1152 2209,1072 2161,911 2652,760 2735,1004 2673,1031 2807,1440 1985,1688 1844,1702 1855,1737 1645,1798 1442,1166",
      colorClass: "building",
      sections: [
        {
          heading: "Atrium space and Curzon B study space",
          items: [
            { title: "Burger and Sauce" },
            { title: "Lloyds Bank"},
            { title: "Wingstop"},
            { title: "UniLife"},
            { title: "Debate Mate"},
            { title: "NOMO"},
            { title: "IKEA"},
            { title: "PureGym"},
            { title: "Yugo"},
            { title: "TopCashback"},
            { title: "French Arabian Perfume"},
            { title: "GK Telecom"},
            { title: "NHS Blood & Transplant"},
            { title: "Cass Art"},
            { title: "Department for Education"},
            { title: "Loc8me"},
            { title: "Cineworld"},
            { title: "Boux Avenue"},
            { title: "Sport Aston"},
            { title: "URNU"},
            { title: "National Express"},
            { title: "Lime"},
            { title: "Flicknmix Ltd"},
            { title: "Flight Club"},
            { title: "Golf Fang"},
            { title: "Rosies"},
            { title: "Windsor Complex"},
            { title: "O'Neill's"},
            { title: "Barbara's"},
            { title: "Nightingale Club"},
            { title: "Vodbull"},
            { title: "JoyBuy"},
            { title: "Lady Garden"},
            { title: "Umbrella Health"},
            { title: "Harborne Medical"},
            { title: "Living Well Consortium"},
            { title: "St. Basils"},
            { title: "Meningitis Research Foundation"}, 
          ]
        },
        {
          heading: "C087 (room on ground floor)",
          items: [
                                { title: "BCU Library"},
                    { title: "BCU Sustainability"},
                    { title: "BCU Careers"},
                    { title: "BCU Student Opportunities + Enterprise"},
                    { title: "BCU Facilities Management"},
                    { title: "BCU Student Services"},
                    { title: "BCU Student Communications"},
                    { title: "Partner stalls"},
                    { title: "Manpower (student jobs!)"},
                    { title: "Birmingham Museums Trust"},
                    { title: "Gym Group"},
                    { title: "Handsworth Medical Centre"},
                    { title: "Nando's"},
                    { title: "West Midlands Metro"},
                    { title: "Shelter Homeless charity"}, 
                     { title: "Quiet Zone", note: "a breakaway space from the crowds" },
                      { title: "BCU Canteen", note: "get 40% off meals" },
          ]
        },  
        {
          heading: "First Floor",
          items: [
            { title: "BCUSU Reception", note: "Free photobooth 📸" },
          ]
        }, 
      ]
    },
    {
      id: "gopsal-street",
      name: "Gopsal Street",
      tag: "Outdoor stalls",
      shape: "polygon",
      points: "1346,1024 1525,983 1748,921 1896,880 1989,846 2089,797 2171,732 2212,643 2226,543 2264,536 2257,632 2226,701 2154,791 2068,852 1951,897 1814,942 1693,976 1573,1007 1459,1035 1356,1066 1343,1021",
      colorClass: "stalls",
      // description: "Stalls line the street outside the Curzon Building entrance.",
      sections: [
        {
          heading: "Stalls",
          items: [
            { title: "BCUSU stall", note: "find out about your Students' Union" },
            { title: "BCUSU spinning wheel", note: "follow us to win prizes" },
            { title: "Eagle & Ball", note: "£2.50 mini margheritas (til stocks last)🍕" },
           { title: "BCUSU Campus Shops", note: "Hoodies and sweatshirts from £25👚" },
           { title: "BCU Sport", note: "meet sports teams ⚽🎾" },
           { title: "BCU Support stalls", note: "BCU IT and Security" },
          ]
        },
         {
          heading: "Partner stalls",
          items: [
                    { title: "Lime"},
                    { title: "Flicknmix Ltd"},
                    { title: "Aquarius"},
                    { title: "West Midlands Fire Service"},
                    { title: "Thatchers"},
                    { title: "Handshake"},
                    { title: "BUOTC"},
                    { title: "Adventure Farm"},
                    { title: "Radnor Hills"},
                    { title: "Circo"},
                    { title: "West Midlands Police"},
                    { title: "Canal & River Trust"},
                    { title: "Personifide"},
                    { title: "Royal Yachting Association"}, 
          ]
        }
      ]
    },
    {
      id: "curzon-stage",
      name: "BCUSU stage",
      tag: "Outdoor activities",
      shape: "polygon",
      points: "1284,976 1319,959 1573,1790 1697,1793 1704,1862 1717,1865 1717,1944 1769,1958 1728,2034 1653,2056 1681,2138 1650,2152 1609,2042 1561,1997 1557,1952 1567,1918 1554,1860 1526,1856 1523,1812 1533,1787 1416,1413 1282,969",
      colorClass: "stalls",
      description: "What to expect in front of the Curzon Building.",
      sections: [
        {
          heading: "Stage performances",
          items: [
            { title: "Lauren Redfern & DJ Beats & Smiles", note: "Former Scratch Radio host, now BBC Radio 1 presenter" },
            { title: "Half Brassed", note: "Royal Birmingham Conservatoire band — pop hits from a 7-piece brass band" },
            { title: "DJ sets from local nightclubs", note: "Schedule coming soon" }
          ]
        },
        {
          heading: "Food",
          items: [
            { title: "Food vans / trucks" }
          ]
        }
      ]
    },
    {
      id: "eastside-park",
      name: "Eastside Park",
      tag: "Outdoor activities",
      shape: "polygon",
      points: "0,2193 1492,1770 1574,2083 1100,2245 21,2241 0,2183",
      colorClass: "park",
      description: "Head across to the park for animals and activities.",
      sections: [
        {
          heading: "What's on",
          items: [
            { title: "Mini petting zoo", note: "Shetland ponies, lambs, chicks, guinea pigs and rabbits (animals subject to change)" },
            { title: "Rock climbing wall", note: "Give it a go!" },
            { title: "Meltdown inflatable", note: "Can you be the last one standing? Groups of 8" }
          ]
        }
      ]
    },
    {
      id: "rbc",
      name: "RBC (Royal Birmingham Conservatoire)",
      tag: "Nearby",
      shape: "circle",
      cx: 143, cy: 700, r: 70,
      colorClass: "info",
      description: "The Conservatoire is running its own fair.",
      sections: [
        { heading: "On site", items: [{ title: "RBC Fair", note: "Separate event — see RBC for details" }] }
      ]
    },
    {
      id: "parkside",
      name: "Parkside Building",
      tag: "Nearby",
      shape: "circle",
      cx: 1084, cy: 1330, r: 65,
      colorClass: "info",
      description: "",
      sections: [],
      noStalls: true
    },
    {
      id: "millennium-point",
      name: "Millennium Point",
      tag: "Nearby",
      shape: "circle",
      cx: 257, cy: 1370, r: 65,
      colorClass: "info",
      description: "",
      sections: [],
      noStalls: true
    }
  ];

  const overlay = document.getElementById("overlay");
  const panel = document.getElementById("panel");
  const panelEmpty = document.getElementById("panelEmpty");
  const hint = document.getElementById("hint");
    let activeId = null;

//   building shape plots 
  function buildShape(zone){
    const ns = "http://www.w3.org/2000/svg";
    let el;
    if (zone.shape === "polygon"){
      el = document.createElementNS(ns, "polygon");
      el.setAttribute("points", zone.points);
    } else {
      el = document.createElementNS(ns, "circle");
      el.setAttribute("cx", zone.cx);
      el.setAttribute("cy", zone.cy);
      el.setAttribute("r", zone.r);
    }
    el.setAttribute("class", "zone" + (zone.shape === "circle" ? " info-pin" : ""));
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", zone.name);
    el.dataset.id = zone.id;
    el.addEventListener("click", () => selectZone(zone.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); selectZone(zone.id); }
    });
    return el;
  }

//   attach each building with their data to the matched build shape
  ZONES.forEach(zone => overlay.appendChild(buildShape(zone)));

  // small "i" badges on the info-only pins so they read clearly at a glance
  ZONES.filter(z => z.shape === "circle").forEach(zone => {
    const ns = "http://www.w3.org/2000/svg";
    const g = document.createElementNS(ns, "g");
    g.setAttribute("class", "pin-badge");
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("cx", zone.cx); c.setAttribute("cy", zone.cy - zone.r - 34); c.setAttribute("r", 30);
    const t = document.createElementNS(ns, "text");
    t.setAttribute("x", zone.cx); t.setAttribute("y", zone.cy - zone.r - 34);
    t.textContent = "i";
    g.appendChild(c); g.appendChild(t);
    overlay.appendChild(g);
  });

  // panel displaying building content
  function renderPanel(zone){
    hint.style.opacity = "0";
    let html = `
      <div class="panel-head">
        <button class="close-btn" id="closeBtn" aria-label="Close">✕</button>
        <span class="tag">${zone.tag}</span>
        <h2>${zone.name}</h2>
        ${zone.description ? `<p>${zone.description}</p>` : ""}
      </div>
      <div class="panel-body">`;

    if (zone.noStalls){
      html += `<div class="no-stalls">No stalls here for the Welcome Fair — head to Curzon Building or Gopsal Street.</div>`;
    } else {
      zone.sections.forEach(section => {
        html += `<div class="section"><h3>${section.heading}</h3><ul>`;
        section.items.forEach(item => {
          html += `<li><strong>${item.title}</strong>${item.note ? `<span class="note">${item.note}</span>` : ""}</li>`;
        });
        html += `</ul></div>`;
      });
    }
    html += `</div>`;
    panel.innerHTML = html;
    document.getElementById("closeBtn").addEventListener("click", clearSelection);
  }

  function selectZone(id){
    const zone = ZONES.find(z => z.id === id);
    if (!zone) return;
    activeId = id;
    overlay.querySelectorAll(".zone").forEach(el => el.classList.toggle("active", el.dataset.id === id));
    renderPanel(zone);
  }

  function clearSelection(){
    activeId = null;
    overlay.querySelectorAll(".zone").forEach(el => el.classList.remove("active"));
    panel.innerHTML = "";
    panel.appendChild(panelEmpty);
    hint.style.opacity = "1";
  }

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") clearSelection(); });
  }
