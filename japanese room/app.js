/* ==========================================================================
   MINKA VIEWER - APPLICATION INTERACTIVITY & SYNTHESIZERS
   ========================================================================== */

// Room Configurations & Hotspot Data
const roomConfig = {
  main: {
    title: "01 / EXTERIOR OVERVIEW",
    coords: "35°24'N, 138°43'E",
    quote: '"To experience the void, one must align with the materials of nature, where Hinoki meets Washi, and silence holds the space."',
    hotspots: [
      {
        x: 45, y: 30,
        label: "Thatching",
        category: "STRUCTURAL ROOFING",
        title: "Kayabuki (Thatched Roof)",
        intro: "The sloping thatched roof (kayabuki) of the Minka is crafted from dried miscanthus reed, symbolizing rustic permanence.",
        desc: "The roof pitch is steep (typically 50 degrees) to shed heavy rain and snow. Inside the attic, smoke from the irori (hearth) below filters up through the thatch, drying the reeds and acting as a natural pest repellent. This process preserves the timber structural beams for centuries.",
        specs: {
          "Material": "Miscanthus Reeds, Hemp rope",
          "Pitch Angle": "50 Degrees",
          "Lifespan": "30 - 40 years before re-thatching"
        }
      },
      {
        x: 62, y: 55,
        label: "Timber Frame",
        category: "ARCHITECTURAL JOINERY",
        title: "Kigumi (Timber Joinery)",
        intro: "Kigumi is the traditional Japanese art of locking wooden joints together without nails or metal fasteners.",
        desc: "The post-and-beam framework of the Minka relies entirely on interlocking joints carved by master carpenters. This allows the building to flex slightly during earthquakes, dispersing energy throughout the frame without collapsing, a testament to vernacular engineering.",
        specs: {
          "Material": "Red Pine & Hinoki Cypress",
          "Joinery Type": "Mortise and Tenon (Kigumi)",
          "Seismic Flex": "Active displacement absorption"
        }
      }
    ]
  },
  tearoom: {
    title: "02 / CHASHITSU (TEA ROOM)",
    coords: "Interior Room (Tokonoma)",
    quote: '"In the tea room, the host and guest meet in absolute equality, leaving titles at the low crawling entrance."',
    hotspots: [
      {
        x: 68, y: 32,
        label: "Tokonoma",
        category: "SACRED ALCOVE",
        title: "Tokonoma Alcove",
        intro: "A recessed alcove in a Japanese reception room, used to display scroll calligraphy or seasonal items.",
        desc: "In a tea room, the Tokonoma is the spiritual focal point. Guests bow to the scroll before starting the ceremony. The items on display are carefully chosen to reflect the season and the theme of the gathering, embodying the spirit of Ichigo Ichie (one time, one meeting).",
        specs: {
          "Width": "1 Ken (~1.81m)",
          "Featured Scroll": "Ink Calligraphy (和敬清寂 - Harmony, Respect, Purity, Tranquility)",
          "Floral Art": "Chabana (Seasonal wildflowers)"
        }
      },
      {
        x: 43, y: 72,
        label: "Sunken Hearth",
        category: "CEREMONIAL COOKING",
        title: "Sunken Hearth (Irori / Ro)",
        intro: "The ro is a sunken hearth cut into the tatami floor used to heat water for tea during the winter months.",
        desc: "Placed in the floor, the hearth keeps the room warm and serves as a gathering point. The water is heated in a heavy cast-iron kettle called a Kama. The charcoal is arranged in precise patterns with ash to regulate heat and smoke.",
        specs: {
          "Hearth Base": "Refractory Clay & Firebrick",
          "Kettle (Kama)": "Cast Iron (Nambu Tekki)",
          "Fuel Source": "Premium Oak Charcoal (Binchotan)"
        }
      }
    ]
  },
  zengarden: {
    title: "03 / KARESANSUI (ZEN GARDEN)",
    coords: "Karesansui Dry Landscape",
    quote: '"Water is represented not by liquid, but by the flow of gravel, prompting the mind to bridge the gap between form and void."',
    hotspots: [
      {
        x: 23, y: 68,
        label: "Bamboo Fountain",
        category: "GARDEN KINETICS",
        title: "Shishi-Odoshi (Bamboo Fountain)",
        intro: "Literally 'deer scarer,' it is a bamboo tube that fills with water and periodically tips over, striking a stone with a sharp knock.",
        desc: "Originally used to scare away agricultural pests, the shishi-odoshi became a staple of Zen gardens. The hollow knock breaking the silence is designed to draw attention to the stillness of the garden, emphasizing the concept of Ma (empty space/time).",
        specs: {
          "Material": "Timber Bamboo, River Stone",
          "Acoustic Beat": "Approx. 25-second cycle",
          "Purpose": "Acoustic focal point for meditation"
        }
      },
      {
        x: 61, y: 55,
        label: "Rock Triad",
        category: "STONE LAYOUT",
        title: "Ishigumi (Stone Arrangement)",
        intro: "The intentional grouping and placement of rocks in a dry landscape garden to represent permanent mountains or islands.",
        desc: "Rocks are the backbone of Karesansui. Their arrangement follows strict rules of balance, usually placed in odd-numbered groups (triads representing Buddhist triads). They are partially buried to suggest they are deep-seated, permanent parts of the earth, rising above the 'ocean' of raked gravel.",
        specs: {
          "Rock Type": "Weathered Granite with moss growth",
          "Formation": "Sanzon Ishigumi (Three-stone Triad)",
          "Symbolism": "Mount Horai (Mythical mountain of immortals)"
        }
      }
    ]
  },
  engawa: {
    title: "04 / ENGAWA (VERANDA)",
    coords: "Transition Zone",
    quote: '"Between the interior tatami and the exterior garden lies the veranda—a space belonging to both and neither."',
    hotspots: [
      {
        x: 10, y: 45,
        label: "Shoji Screens",
        category: "LIGHT TRANSLUCENCY",
        title: "Shoji Paper Screens",
        intro: "Sliding doors or partitions made of translucent Washi paper stretched over a delicate wooden grid.",
        desc: "Shoji screens divide the interior rooms while allowing soft, ambient light to filter through. Unlike solid walls, they create a visual sense of space and shadow, letting silhouettes bleed through while keeping cold drafts out, creating a glowing room boundary.",
        specs: {
          "Paper Type": "Handmade Mulberry Washi",
          "Wood Frame": "Fine-grained Hinoki wood",
          "Mounting": "Traditional rice glue paste"
        }
      },
      {
        x: 35, y: 75,
        label: "Veranda Planks",
        category: "BUFFER FLOORING",
        title: "Engawa (Veranda Corridor)",
        intro: "The wooden veranda that wraps around a Japanese house, serving as a buffer zone between interior tatami rooms and the garden.",
        desc: "The Engawa acts as a climate buffer, shading the house from the summer sun while letting low winter sun heat the interior. It is also a social space, a place where people sit to admire the garden, drink tea, and experience the transition from inside shelter to outside nature.",
        specs: {
          "Plank Wood": "Polished Hinoki Cypress",
          "Assembly": "Joined using wooden pegs, nail-free",
          "Orientation": "South-Facing (Optimal solar heat gain)"
        }
      }
    ]
  }
};

// State Variables
let currentRoom = "main";
let isAudioPlaying = false;
let rainVolume = 0; // percentage 0 to 100
let timeOfDayVal = 1; // 0: morning, 1: midday, 2: golden, 3: night
let rakeMode = "rake"; // "rake" or "single"

// Web Audio API Synthesizer Context & Nodes
let audioCtx = null;
let windNode = null;
let rainNode = null;
let chimeTimer = null;
let shishiNode = null; // Bamboo fountain sound generator

// Core DOM Elements
const mainNav = document.getElementById("main-nav");
const btnBlueprint = document.getElementById("btn-blueprint");
const viewTitle = document.getElementById("view-title");
const roomCoords = document.getElementById("room-coords");
const viewQuote = document.getElementById("view-quote");
const mediaContainer = document.getElementById("media-container");
const hotspotsOverlay = document.getElementById("hotspots-overlay");

// Atmosphere Sliders
const sliderTime = document.getElementById("slider-time");
const sliderWeather = document.getElementById("slider-weather");
const timeValText = document.getElementById("time-val");
const weatherValText = document.getElementById("weather-val");
const ambientOverlay = document.getElementById("ambient-overlay");

// Audio Deck
const btnPlayAudio = document.getElementById("btn-play-audio");
const tapePlayer = document.querySelector(".tape-player");
const chkWind = document.getElementById("chk-wind");
const chkChimes = document.getElementById("chk-chimes");

// Drawers & Modals
const detailsDrawer = document.getElementById("details-drawer");
const btnCloseDrawer = document.getElementById("btn-close-drawer");
const drawerCategory = document.getElementById("drawer-category");
const drawerTitle = document.getElementById("drawer-title");
const drawerIllustration = document.getElementById("drawer-illustration");
const drawerIntro = document.getElementById("drawer-intro");
const drawerDesc = document.getElementById("drawer-desc");
const drawerSpecsTable = document.getElementById("drawer-specs-table");

const blueprintModal = document.getElementById("blueprint-modal");
const btnCloseBlueprint = document.getElementById("btn-close-blueprint");

// Sandbox Canvas
const sandboxCanvas = document.getElementById("sandbox-canvas");
const sandboxControls = document.getElementById("sandbox-controls");
const btnClearSand = document.getElementById("btn-clear-sand");
const sandboxChips = document.querySelectorAll(".rake-mode-chips .chip");
const sandboxCtx = sandboxCanvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupEnvironmentSliders();
  setupHotspots();
  setupBlueprint();
  setupDrawerClose();
  setupAudioToggle();
  setupSandboxCanvas();
  
  // Create first room rendering
  loadRoom(currentRoom);
  
  // Custom command event handlers in case browsers support Invokers natively
  setupInvokersFallback();
});

// ==========================================================================
// NAVIGATION & ROOM SWITCHING
// ==========================================================================

function setupNavigation() {
  const navItems = mainNav.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const room = item.getAttribute("data-room");
      if (room !== currentRoom) {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        transitionRoom(room);
      }
    });
  });
}

function transitionRoom(roomName) {
  // Trigger transitional Koto note scale play for fluid UX
  playTransitionalKotoTone();

  // Hide old active image
  const oldImg = document.getElementById(`img-${currentRoom}`);
  if (oldImg) oldImg.classList.remove("active");
  
  // Load new room state
  currentRoom = roomName;
  loadRoom(roomName);
}

function loadRoom(roomName) {
  const config = roomConfig[roomName];
  
  // Update texts
  viewTitle.textContent = config.title;
  roomCoords.textContent = config.coords;
  viewQuote.textContent = config.quote;
  
  // Show image
  const newImg = document.getElementById(`img-${roomName}`);
  if (newImg) newImg.classList.add("add-active", "active");
  
  // Refresh hotspots
  renderHotspots(config.hotspots);

  // Zen Garden Sandbox Toggle
  if (roomName === "zengarden") {
    sandboxCanvas.classList.add("active");
    sandboxControls.classList.add("active");
    resizeSandboxCanvas();
  } else {
    sandboxCanvas.classList.remove("active");
    sandboxControls.classList.remove("active");
  }
}

// ==========================================================================
// HOTSPOTS GENERATOR & DRAWER BINDER
// ==========================================================================

function renderHotspots(hotspots) {
  hotspotsOverlay.innerHTML = "";
  
  hotspots.forEach(hs => {
    const el = document.createElement("div");
    el.className = "hotspot";
    el.style.left = `${hs.x}%`;
    el.style.top = `${hs.y}%`;
    
    el.innerHTML = `
      <div class="hotspot-ring">
        <div class="hotspot-dot"></div>
      </div>
      <div class="hotspot-tooltip">${hs.label}</div>
    `;
    
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openHotspotDetails(hs);
    });
    
    hotspotsOverlay.appendChild(el);
  });
}

function openHotspotDetails(hs) {
  // Bind data to Dialog Drawer
  drawerCategory.textContent = hs.category;
  drawerTitle.textContent = hs.title;
  drawerIntro.textContent = hs.intro;
  drawerDesc.textContent = hs.desc;
  
  // Generate illustration placeholder / mini vector representation
  drawerIllustration.innerHTML = `
    <div style="width: 100%; height: 100%; background: #eae8e3; display: flex; align-items: center; justify-content: center; color: #163422; font-family: var(--font-family-display); font-weight: 700; letter-spacing: 0.1em; font-size: 14px;">
      ${hs.title.toUpperCase()} SCHEMATIC
    </div>
  `;
  
  // Render specifications table
  drawerSpecsTable.innerHTML = "";
  for (const [key, val] of Object.entries(hs.specs)) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="label-sm text-dim">${key}</td>
      <td class="body-md">${val}</td>
    `;
    drawerSpecsTable.appendChild(row);
  }
  
  // Show modal drawer with transition
  detailsDrawer.showModal();
}

function setupDrawerClose() {
  btnCloseDrawer.addEventListener("click", () => {
    detailsDrawer.close();
  });
  
  // Fallback for light dismissal of details dialog (clicking backdrop)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    detailsDrawer.addEventListener('click', (event) => {
      if (event.target !== detailsDrawer) return;
      const rect = detailsDrawer.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        detailsDrawer.close();
      }
    });
  }
}

// ==========================================================================
// ATMOSPHERE CONTROL PANEL
// ==========================================================================

function setupEnvironmentSliders() {
  // Time of Day Change
  sliderTime.addEventListener("input", (e) => {
    timeOfDayVal = parseInt(e.target.value);
    updateAtmosphereStyle();
  });
  
  // Weather Change
  sliderWeather.addEventListener("input", (e) => {
    rainVolume = parseInt(e.target.value);
    updateWeatherStyle();
  });
}

function updateAtmosphereStyle() {
  const times = ["MORNING", "MIDDAY", "GOLDEN HOUR", "TWILIGHT / NIGHT"];
  timeValText.textContent = times[timeOfDayVal];
  
  // Clear old classes
  ambientOverlay.className = "ambient-lighting-overlay";
  
  // Apply visual atmospheres via blend overlays
  if (timeOfDayVal === 0) {
    ambientOverlay.classList.add("day-atmosphere");
  } else if (timeOfDayVal === 1) {
    // Normal lighting
  } else if (timeOfDayVal === 2) {
    ambientOverlay.classList.add("golden-atmosphere");
  } else if (timeOfDayVal === 3) {
    ambientOverlay.classList.add("night-atmosphere");
  }

  // Adjust synthesizer filters if active
  if (audioCtx && isAudioPlaying) {
    modulateSynthAtmosphere();
  }
}

function updateWeatherStyle() {
  let label = "CLEAR";
  let opacity = 0;
  
  if (rainVolume > 0 && rainVolume <= 30) {
    label = "MIST / SOFT DRIZZLE";
    opacity = rainVolume / 100 * 0.4;
  } else if (rainVolume > 30 && rainVolume <= 70) {
    label = "SPRING SHOWER";
    opacity = rainVolume / 100 * 0.6;
  } else if (rainVolume > 70) {
    label = "SUDDEN DOWNPOUR";
    opacity = rainVolume / 100 * 0.9;
  }
  
  weatherValText.textContent = label;
  
  // Update rain sound synth gain
  if (rainNode) {
    rainNode.gain.setValueAtTime(rainVolume / 100 * 0.35, audioCtx.currentTime);
  }
  
  // Show visual rain sheet dynamically
  let rainSheet = document.getElementById("rain-sheet");
  if (!rainSheet) {
    rainSheet = document.createElement("div");
    rainSheet.id = "rain-sheet";
    rainSheet.className = "rain-overlay";
    mediaContainer.appendChild(rainSheet);
  }
  
  rainSheet.style.opacity = opacity;
}

// ==========================================================================
// BLUEPRINT MAP SCHEMATIC
// ==========================================================================

function setupBlueprint() {
  btnBlueprint.addEventListener("click", () => {
    blueprintModal.showModal();
  });
  
  btnCloseBlueprint.addEventListener("click", () => {
    blueprintModal.close();
  });

  // Map sector click handlers to warp view
  const sectors = blueprintModal.querySelectorAll(".bp-sector");
  sectors.forEach(sec => {
    sec.addEventListener("click", () => {
      const room = sec.getAttribute("data-room");
      blueprintModal.close();
      
      // Update sidebar active menu highlight
      const navItems = mainNav.querySelectorAll(".nav-item");
      navItems.forEach(i => {
        if (i.getAttribute("data-room") === room) {
          i.classList.add("active");
        } else {
          i.classList.remove("active");
        }
      });
      
      transitionRoom(room);
    });
  });

  // Fallback for light dismissal of blueprint modal
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    blueprintModal.addEventListener('click', (event) => {
      if (event.target !== blueprintModal) return;
      const rect = blueprintModal.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        blueprintModal.close();
      }
    });
  }
}

// ==========================================================================
// WEB AUDIO API MEDITATION AMBIENT GENERATOR
// ==========================================================================

function setupAudioToggle() {
  btnPlayAudio.addEventListener("click", () => {
    toggleAudioEngine();
  });
}

function toggleAudioEngine() {
  if (!audioCtx) {
    // Lazy initialization of AudioContext on user interaction
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (!isAudioPlaying) {
    // Start Audio Synthesizers
    startAtmosphereSynths();
    isAudioPlaying = true;
    btnPlayAudio.querySelector(".play-icon").textContent = "■";
    btnPlayAudio.querySelector(".play-label").textContent = "PAUSE ATMOSPHERE";
    tapePlayer.classList.add("playing");
  } else {
    // Stop Audio Synthesizers
    stopAtmosphereSynths();
    isAudioPlaying = false;
    btnPlayAudio.querySelector(".play-icon").textContent = "▶";
    btnPlayAudio.querySelector(".play-label").textContent = "PLAY ATMOSPHERE";
    tapePlayer.classList.remove("playing");
  }
}

function startAtmosphereSynths() {
  // 1. Synthesize Bamboo Wind
  if (chkWind.checked) {
    createWindSynth();
  }
  
  // 2. Synthesize Rain
  createRainSynth();
  
  // 3. Synthesize Suzu Chimes scheduler
  if (chkChimes.checked) {
    scheduleWindChimes();
  }
  
  // 4. Play shishi-odoshi water fountain periodically (every 18 seconds)
  scheduleShishiOdoshi();
}

function stopAtmosphereSynths() {
  if (windNode) {
    try { windNode.source.stop(); } catch(e) {}
    windNode = null;
  }
  if (rainNode) {
    try { rainNode.source.stop(); } catch(e) {}
    rainNode = null;
  }
  if (chimeTimer) {
    clearTimeout(chimeTimer);
    chimeTimer = null;
  }
}

// Synth Helper: White Noise Generator
function generateNoiseBuffer(seconds = 2.0) {
  const bufferSize = audioCtx.sampleRate * seconds;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

// Wind Synthesizer (Resonant bandpass-filtered noise)
function createWindSynth() {
  const source = audioCtx.createBufferSource();
  source.buffer = generateNoiseBuffer(4.0);
  source.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 8.0; // High resonance for whistly tone
  filter.frequency.value = 400; // Base sweep frequency

  const gain = audioCtx.createGain();
  gain.gain.value = 0.08;

  // LFO to slowly sweep wind frequency (gives howling/shifting breeze quality)
  const lfo = audioCtx.createOscillator();
  lfo.type = "sine";
  lfo.frequency.value = 0.06; // Very slow sweep (16s cycle)
  
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 250; // Sweep width of 250Hz

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  lfo.start();
  source.start(0);

  windNode = { source, filter, gain, lfo };
}

// Rain Synthesizer (Damped high-frequency white noise)
function createRainSynth() {
  const source = audioCtx.createBufferSource();
  source.buffer = generateNoiseBuffer(2.0);
  source.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "peaking";
  filter.frequency.value = 1400;
  filter.Q.value = 1.0;

  const gain = audioCtx.createGain();
  gain.gain.value = rainVolume / 100 * 0.35; // Set volume to current weather level

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(0);

  rainNode = { source, gain };
}

// Random Japanese Wind Chimes Scheduler
function scheduleWindChimes() {
  if (!isAudioPlaying || !chkChimes.checked) return;
  
  // Play chime now
  triggerWindChime();
  
  // Schedule next chime in 5 to 10 seconds
  const delay = 5000 + Math.random() * 5000;
  chimeTimer = setTimeout(scheduleWindChimes, delay);
}

function triggerWindChime() {
  // A standard Japanese glass chime (Furin) has high-frequency metallic resonance
  const chimeFreqs = [1800, 2200, 2900];
  const now = audioCtx.currentTime;
  
  // Trigger 2 close bell notes slightly staggered
  const notesToPlay = 1 + Math.floor(Math.random() * 2);
  for (let i = 0; i < notesToPlay; i++) {
    const pitch = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)] + (Math.random() * 60 - 30);
    const delay = i * 0.12; // staggered plucks
    
    // Create Chime Oscillator (Sine wave)
    const osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(pitch, now + delay);
    
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0, now + delay);
    gain.gain.linearRampToValueAtTime(0.06, now + delay + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 2.0); // long decay
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + delay);
    osc.stop(now + delay + 2.5);
  }
}

// Periodic Shishi-Odoshi Water Fountain sound (Water splash and bamboo hit)
function scheduleShishiOdoshi() {
  if (!isAudioPlaying) return;
  
  // Trigger a soft wood-block impact sound + splash
  triggerShishiOdoshiImpact();
  
  // Run every 18 seconds
  setTimeout(scheduleShishiOdoshi, 18000);
}

function triggerShishiOdoshiImpact() {
  const now = audioCtx.currentTime;
  
  // 1. Hollow wooden drop (shishi-odoshi knock)
  // Synthesized by a decaying sine wave swept downwards rapidly
  const osc = audioCtx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(220, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
  
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.2);
  
  // 2. Small stone splash
  const noise = audioCtx.createBufferSource();
  noise.buffer = generateNoiseBuffer(0.5);
  
  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1000, now);
  filter.frequency.exponentialRampToValueAtTime(500, now + 0.2);
  
  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.04, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
  
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);
  noise.start(now);
  noise.stop(now + 0.4);
}

// Dynamic Koto notes scale trigger (Played on room switch transition)
function playTransitionalKotoTone() {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const now = audioCtx.currentTime;
  
  // Japanese Hirajoshi Pentatonic Scale
  // A3 (220Hz), B3 (247Hz), C4 (262Hz), E4 (330Hz), F4 (349Hz), A4 (440Hz)
  const scale = [220.00, 246.94, 261.63, 329.63, 349.23, 440.00];
  
  // Select 2 or 3 random notes in scale to trigger in arpeggio
  const totalNotes = 2 + Math.floor(Math.random() * 2);
  let baseIndex = Math.floor(Math.random() * (scale.length - 2));
  
  for (let i = 0; i < totalNotes; i++) {
    const pitch = scale[baseIndex + i];
    const delay = i * 0.18; // Staggered arpeggio
    
    // Primary plucked tone (Triangle base body)
    const oscBody = audioCtx.createOscillator();
    oscBody.type = "triangle";
    oscBody.frequency.setValueAtTime(pitch, now + delay);
    
    // Pluck bite (High frequency sine spike)
    const oscPluck = audioCtx.createOscillator();
    oscPluck.type = "sine";
    oscPluck.frequency.setValueAtTime(pitch * 2.0, now + delay);
    
    const pluckGain = audioCtx.createGain();
    pluckGain.gain.setValueAtTime(0.06, now + delay);
    pluckGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.04);
    
    const bodyGain = audioCtx.createGain();
    bodyGain.gain.setValueAtTime(0.08, now + delay);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.2); // long tail resonance
    
    // Vibrato modulator (Koto pitch wiggle)
    const vibrato = audioCtx.createOscillator();
    vibrato.type = "sine";
    vibrato.frequency.setValueAtTime(6.0, now + delay); // 6Hz shake
    const vibratoGain = audioCtx.createGain();
    vibratoGain.gain.setValueAtTime(pitch * 0.015, now + delay); // subtle sway
    
    vibrato.connect(vibratoGain);
    vibratoGain.connect(oscBody.frequency);
    
    oscBody.connect(bodyGain);
    oscPluck.connect(pluckGain);
    
    bodyGain.connect(audioCtx.destination);
    pluckGain.connect(audioCtx.destination);
    
    vibrato.start(now + delay);
    oscBody.start(now + delay);
    oscPluck.start(now + delay);
    
    vibrato.stop(now + delay + 1.5);
    oscBody.stop(now + delay + 1.5);
    oscPluck.stop(now + delay + 1.5);
  }
}

// Adjust Wind Synthesis based on Time of Day Atmosphere
function modulateSynthAtmosphere() {
  if (!windNode) return;
  // Make wind slightly louder and deeper at night
  if (timeOfDayVal === 3) {
    windNode.filter.frequency.setValueAtTime(300, audioCtx.currentTime);
    windNode.gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  } else {
    windNode.filter.frequency.setValueAtTime(450, audioCtx.currentTime);
    windNode.gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  }
}

// ==========================================================================
// ZEN GARDEN SANDBOX CANVAS (DRAWING GRAVEL PATTERNS)
// ==========================================================================

function setupSandboxCanvas() {
  // Canvas resizing
  window.addEventListener("resize", resizeSandboxCanvas);
  
  // Drawing Listeners
  sandboxCanvas.addEventListener("mousedown", startDrawing);
  sandboxCanvas.addEventListener("mousemove", drawSand);
  sandboxCanvas.addEventListener("mouseup", stopDrawing);
  sandboxCanvas.addEventListener("mouseleave", stopDrawing);
  
  sandboxCanvas.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    const mouseEvent = new MouseEvent("mousedown", {
      clientX: t.clientX,
      clientY: t.clientY
    });
    sandboxCanvas.dispatchEvent(mouseEvent);
  }, { passive: true });
  
  sandboxCanvas.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    const mouseEvent = new MouseEvent("mousemove", {
      clientX: t.clientX,
      clientY: t.clientY
    });
    sandboxCanvas.dispatchEvent(mouseEvent);
  }, { passive: true });
  
  sandboxCanvas.addEventListener("touchend", () => {
    const mouseEvent = new MouseEvent("mouseup", {});
    sandboxCanvas.dispatchEvent(mouseEvent);
  }, { passive: true });

  // Clear canvas sand patterns
  btnClearSand.addEventListener("click", () => {
    clearSandboxSand();
  });

  // Toggle rake pin count
  sandboxChips.forEach(chip => {
    chip.addEventListener("click", () => {
      sandboxChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      rakeMode = chip.getAttribute("data-mode");
    });
  });
}

function resizeSandboxCanvas() {
  const rect = sandboxCanvas.getBoundingClientRect();
  
  // Only resize and wipe buffer if dimensions actually changed
  if (sandboxCanvas.width !== rect.width || sandboxCanvas.height !== rect.height) {
    // Save image data first to restore drawn sand
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = sandboxCanvas.width;
    tempCanvas.height = sandboxCanvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    
    if (sandboxCanvas.width > 0 && sandboxCanvas.height > 0) {
      tempCtx.drawImage(sandboxCanvas, 0, 0);
    }
    
    sandboxCanvas.width = rect.width;
    sandboxCanvas.height = rect.height;
    
    // Configure context options
    sandboxCtx.lineJoin = "round";
    sandboxCtx.lineCap = "round";
    
    // Draw sand background texture look
    sandboxCtx.shadowColor = "rgba(27, 28, 25, 0.06)";
    sandboxCtx.shadowBlur = 3;
    sandboxCtx.shadowOffsetY = 2;
    
    // Restore old sand drawings
    if (tempCanvas.width > 0 && tempCanvas.height > 0) {
      sandboxCtx.drawImage(tempCanvas, 0, 0, sandboxCanvas.width, sandboxCanvas.height);
    }
  }
}

function startDrawing(e) {
  isDrawing = true;
  const rect = sandboxCanvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
}

function drawSand(e) {
  if (!isDrawing) return;
  
  const rect = sandboxCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  sandboxCtx.strokeStyle = "rgba(240, 238, 233, 0.5)"; // Soft washi/gravel color
  
  if (rakeMode === "single") {
    // Draw 1 single sand groove
    sandboxCtx.beginPath();
    sandboxCtx.moveTo(lastX, lastY);
    sandboxCtx.lineTo(x, y);
    sandboxCtx.lineWidth = 3;
    sandboxCtx.stroke();
  } else {
    // Draw 5 parallel grooves mimicking a raked garden tool (Rake Mode)
    const pins = 5;
    const spacing = 4; // px separation between rake needles
    
    // Compute perpendicular vector to draw parallel offsets
    const dx = x - lastX;
    const dy = y - lastY;
    const len = Math.sqrt(dx*dx + dy*dy);
    if (len > 0.5) {
      const px = -dy / len;
      const py = dx / len;
      
      sandboxCtx.lineWidth = 1.8;
      
      for (let i = -2; i <= 2; i++) {
        const offset = i * spacing;
        sandboxCtx.beginPath();
        sandboxCtx.moveTo(lastX + px * offset, lastY + py * offset);
        sandboxCtx.lineTo(x + px * offset, y + py * offset);
        sandboxCtx.stroke();
      }
    }
  }
  
  lastX = x;
  lastY = y;
}

function stopDrawing() {
  isDrawing = false;
}

function clearSandboxSand() {
  sandboxCtx.clearRect(0, 0, sandboxCanvas.width, sandboxCanvas.height);
}

// ==========================================================================
// UNIFIED COMMAND INVOKERS FALLBACK (DELEGATION SYSTEM)
// ==========================================================================

function setupInvokersFallback() {
  // If the browser does not support Invoker Commands natively, polyfill click listeners
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button[commandfor]");
      if (!btn) return;
      
      const targetId = btn.getAttribute("commandfor");
      const command = btn.getAttribute("command");
      const target = document.getElementById(targetId);
      
      if (target && command) {
        if (command === "show-modal" && typeof target.showModal === "function") {
          target.showModal();
        } else if (command === "close" && typeof target.close === "function") {
          target.close();
        }
      }
    });
  }
}
