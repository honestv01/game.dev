export const IMAGES = {
  hero: 'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701525815_e2a49e7c.jpg',
  portrait: '/me.jpg',
  sectionBg: 'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701816123_189a6cca.png',
  process: [
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701634661_b440bbba.jpg',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701633198_457e1032.jpg',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701673993_aa3b343e.png',
    'https://d64gsuwffb70l.cloudfront.net/699a04c6fc7d245eb5b002ba_1771701691888_4d7a2c3f.png',
  ],
  projects: [
    'https://s.wordpress.com/mshots/v1/https://gamemonetize.com/ghost-ninja-game?w=1200',
    'https://s.wordpress.com/mshots/v1/https://phantomgalaxies.com/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://store.steampowered.com/app/1202730/nStations/?w=1200',
    'https://s.wordpress.com/mshots/v1/https://farcaster.xyz/miniapps/5SJg7SlqmCug/crazy-rush-heroes?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.animocabrands.google.CrazyDefenseHeroes?w=1200',
    'https://s.wordpress.com/mshots/v1/https://store.steampowered.com/app/1691020/Bent_on_Destruction/?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dch.mcpipegames.golfrush?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.dualcarbon.drivesimulator2016Lite?w=1200',
    'https://s.wordpress.com/mshots/v1/https://apps.apple.com/in/app/hzm-pool/id1640673833?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.roblox.com/games/136815252868060/Galactic-Hype-Soccer?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.roblox.com/games/94179510510441/Minesweeper-ChicMic-Studios?w=1200',
    'https://s.wordpress.com/mshots/v1/https://www.roblox.com/games/10467665782/RoVatar?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.frimustechnologies.bingo?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.frimustechnologies.bhabhi?w=1200',
    'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.frimustechnologies.CarpetRush?w=1200',
    'https://s.wordpress.com/mshots/v1/https://apps.apple.com/in/app/hzm-expressway/id6470370602?w=1200',
  ],
};

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  systems: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ghost Ninja',
    description:
      'Fast-paced action gameplay delivered for web audiences with responsive controls and lightweight runtime performance.',
    image: IMAGES.projects[0],
    tags: ['Action', 'Browser', 'Arcade', 'Live Build'],
    category: 'Browser Action',
    systems: ['Gameplay Scripting', 'Input Handling', 'Performance Tuning'],
    liveUrl: 'https://gamemonetize.com/ghost-ninja-game',
  },
  {
    id: 2,
    title: 'Phantom Galaxies',
    description:
      'High-fidelity sci-fi action production with real-time combat flow, mission systems, and content pipeline collaboration.',
    image: IMAGES.projects[1],
    tags: ['Unreal Pipeline', 'Action RPG', 'Cinematics', 'Live Ops'],
    category: 'Space Action RPG',
    systems: ['Combat Systems', 'Mission Logic', 'Content Integration'],
    liveUrl: 'https://phantomgalaxies.com/',
  },
  {
    id: 3,
    title: 'nStations',
    description:
      'Steam title delivery focused on gameplay polish, iteration loops, and stable desktop deployment.',
    image: IMAGES.projects[2],
    tags: ['Steam', 'PC', 'Gameplay Loop', 'Release'],
    category: 'Indie PC',
    systems: ['Build Pipeline', 'UX Flow', 'Runtime Stability'],
    liveUrl: 'https://store.steampowered.com/app/1202730/nStations/',
  },
  {
    id: 4,
    title: 'Crazy Rush Heroes (Farcaster)',
    description:
      'Mini app implementation for quick-session hero gameplay and wallet-friendly onboarding flows.',
    image: IMAGES.projects[3],
    tags: ['Mini App', 'Web3', 'Session Design', 'Social'],
    category: 'Web3 Mini App',
    systems: ['Progression Loop', 'Event Triggers', 'Live Content Hooks'],
    liveUrl: 'https://farcaster.xyz/miniapps/5SJg7SlqmCug/crazy-rush-heroes',
  },
  {
    id: 5,
    title: 'Crazy Defense Heroes',
    description:
      'Mobile tower defense production with progression balancing, hero abilities, and retention-focused content updates.',
    image: IMAGES.projects[4],
    tags: ['Android', 'Tower Defense', 'Live Ops', 'Economy'],
    category: 'Mobile Strategy',
    systems: ['Combat Balancing', 'Monetization Hooks', 'Progression Design'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.animocabrands.google.CrazyDefenseHeroes',
  },
  {
    id: 6,
    title: 'Bent on Destruction',
    description:
      'Steam game development support with destruction-heavy gameplay, tuning, and release validation.',
    image: IMAGES.projects[5],
    tags: ['Steam', 'Physics Gameplay', 'Action', 'QA'],
    category: 'PC Action',
    systems: ['Physics Interaction', 'Frame Budget Control', 'Gameplay Iteration'],
    liveUrl: 'https://store.steampowered.com/app/1691020/Bent_on_Destruction/',
  },
  {
    id: 7,
    title: 'Golf Rush',
    description:
      'Mobile sports-style game focused on smooth controls, short rounds, and broad device compatibility.',
    image: IMAGES.projects[6],
    tags: ['Android', 'Casual Sports', 'Touch Controls', 'Optimization'],
    category: 'Mobile Casual',
    systems: ['Input Smoothing', 'Match Flow', 'Device Compatibility'],
    liveUrl: 'https://play.google.com/store/apps/details?id=ch.mcpipegames.golfrush',
  },
  {
    id: 8,
    title: 'Drive Simulator 2016 Lite',
    description:
      'Driving simulation release for mobile focused on handling systems and reliable low-end device performance.',
    image: IMAGES.projects[7],
    tags: ['Android', 'Simulation', 'Physics Tuning', 'UI'],
    category: 'Mobile Simulation',
    systems: ['Vehicle Physics', 'Control Mapping', 'Performance Profiling'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.dualcarbon.drivesimulator2016Lite',
  },
  {
    id: 9,
    title: 'HZM Pool',
    description:
      'iOS game launch centered on cue mechanics, shot feedback, and stable touch interaction across devices.',
    image: IMAGES.projects[8],
    tags: ['iOS', 'Sports', 'Touch UX', 'Polish'],
    category: 'Mobile Sports',
    systems: ['Aim Assist Logic', 'Physics Feedback', 'Session UX'],
    liveUrl: 'https://apps.apple.com/in/app/hzm-pool/id1640673833',
  },
  {
    id: 10,
    title: 'Galactic Hype Soccer',
    description:
      'Roblox multiplayer sports project with social loops, engagement events, and rapid gameplay iteration.',
    image: IMAGES.projects[9],
    tags: ['Roblox', 'Multiplayer', 'Sports', 'Live Events'],
    category: 'Roblox',
    systems: ['Matchmaking Logic', 'Session Events', 'Reward Loops'],
    liveUrl: 'https://www.roblox.com/games/136815252868060/Galactic-Hype-Soccer',
  },
  {
    id: 11,
    title: 'Minesweeper (ChicMic Studios)',
    description:
      'Classic puzzle gameplay adapted for Roblox with progression goals and community-oriented UX.',
    image: IMAGES.projects[10],
    tags: ['Roblox', 'Puzzle', 'UX', 'Progression'],
    category: 'Roblox',
    systems: ['Puzzle Rules', 'Progress Tracking', 'Player Retention'],
    liveUrl: 'https://www.roblox.com/games/94179510510441/Minesweeper-ChicMic-Studios',
  },
  {
    id: 12,
    title: 'RoVatar',
    description:
      'Roblox avatar-focused experience that blends customization systems with social interaction loops.',
    image: IMAGES.projects[11],
    tags: ['Roblox', 'Avatar Systems', 'Social', 'Customization'],
    category: 'Roblox',
    systems: ['Avatar Pipeline', 'Inventory Logic', 'Social Features'],
    liveUrl: 'https://www.roblox.com/games/10467665782/RoVatar',
  },
  {
    id: 13,
    title: 'Frimus Bingo',
    description:
      'Mobile bingo release with reward pacing, session retention mechanics, and lightweight performance targets.',
    image: IMAGES.projects[12],
    tags: ['Android', 'Card Game', 'Retention', 'Live Content'],
    category: 'Mobile Casual',
    systems: ['Reward Economy', 'Session Loop', 'Event Scheduling'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frimustechnologies.bingo',
  },
  {
    id: 14,
    title: 'Frimus Bhabhi',
    description:
      'Multiplayer card-style game delivery for Android with clean turn flow and scalable game-state logic.',
    image: IMAGES.projects[13],
    tags: ['Android', 'Card Game', 'Multiplayer', 'State Sync'],
    category: 'Mobile Cards',
    systems: ['Turn Logic', 'State Sync', 'Match UX'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frimustechnologies.bhabhi',
  },
  {
    id: 15,
    title: 'Carpet Rush',
    description:
      'Arcade runner implementation focused on responsive controls, obstacle timing, and session replayability.',
    image: IMAGES.projects[14],
    tags: ['Android', 'Arcade', 'Runner', 'Gameplay'],
    category: 'Mobile Arcade',
    systems: ['Obstacle Spawning', 'Difficulty Curves', 'Input Responsiveness'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.frimustechnologies.CarpetRush',
  },
  {
    id: 16,
    title: 'HZM Expressway',
    description:
      'iOS expressway driving project with speed-loop tuning and performance-aware environment systems.',
    image: IMAGES.projects[15],
    tags: ['iOS', 'Driving', 'Arcade', 'Optimization'],
    category: 'Mobile Racing',
    systems: ['Traffic Systems', 'Control Feel', 'Frame-Time Stability'],
    liveUrl: 'https://apps.apple.com/in/app/hzm-expressway/id6470370602',
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Core Engine' | 'Language' | 'Gameplay' | 'Tooling' | 'Live Ops' | 'Optimization';
}

export const skills: Skill[] = [
  { name: 'Unity', level: 96, category: 'Core Engine' },
  { name: 'Unreal Engine', level: 90, category: 'Core Engine' },
  { name: 'C#', level: 94, category: 'Language' },
  { name: 'C++ / Blueprints', level: 88, category: 'Language' },
  { name: 'Gameplay Architecture', level: 92, category: 'Gameplay' },
  { name: 'AI / Combat Systems', level: 88, category: 'Gameplay' },
  { name: 'Perforce / Git', level: 86, category: 'Tooling' },
  { name: 'Git', level: 90, category: 'Tooling' },
  { name: 'Economy and Progression', level: 91, category: 'Live Ops' },
  { name: 'Telemetry and Balancing', level: 86, category: 'Live Ops' },
  { name: 'Console and Mobile Optimization', level: 90, category: 'Optimization' },
  { name: 'Memory and Frame-Time Debugging', level: 84, category: 'Optimization' },
  { name: 'Rendering Performance Profiling', level: 88, category: 'Optimization' },
];

export const processSteps = [
  {
    title: 'Pre-Production Scope',
    description:
      'Define target platform, genre goals, core mechanics, and technical constraints before production begins.',
    image: IMAGES.process[0],
  },
  {
    title: 'Build Core Gameplay',
    description:
      'Implement gameplay systems in Unity or Unreal with clean architecture, iteration hooks, and testing checkpoints.',
    image: IMAGES.process[1],
  },
  {
    title: 'Optimize Per Platform',
    description:
      'Tune frame-time, memory, and asset streaming for PC, mobile, or console targets with predictable performance.',
    image: IMAGES.process[2],
  },
  {
    title: 'Launch and Live Ops',
    description:
      'Ship production builds, monitor telemetry, and iterate on gameplay balance, retention, and post-launch features.',
    image: IMAGES.process[3],
  },
];

export const testimonials = [
  {
    name: 'Studio Producer',
    role: 'PC and Mobile Game Team',
    text: 'Reliable gameplay ownership from prototype through release. Technical decisions stayed practical and measurable.',
    avatar: 'SP',
  },
  {
    name: 'Publishing Partner',
    role: 'Live Ops Portfolio',
    text: 'Strong coordination across design, QA, and engineering. Builds were stable and shipped on time.',
    avatar: 'PP',
  },
  {
    name: 'Creative Director',
    role: 'Gameplay Product Team',
    text: 'High-quality execution with clear communication and disciplined iteration from first playtest to launch.',
    avatar: 'CD',
  },
];

export const stats = [
  { label: 'Years In Game Dev', value: '18+' },
  { label: 'Industry Focus', value: 'Unity + Unreal' },
  { label: 'Core Stack', value: 'Unity C# / Unreal C++' },
  { label: 'Delivery Mode', value: 'PC + Mobile + Roblox' },
];
