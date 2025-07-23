const planetData = [
  {
    name: "Mercury",
    color: "#b1b1b1",
    size: 0.5,
    distance: 5,
    speed: 0.02,
    texture: "/textures/mercury.jpg",
    moons: [],
    ring: null,
  },
  {
    name: "Venus",
    color: "#e0c16c",
    size: 0.7,
    distance: 7,
    speed: 0.015,
    texture: "/textures/venus.jpg",
    moons: [],
    ring: null,
  },
  {
    name: "Earth",
    color: "#3a6ea5",
    size: 0.8,
    distance: 10,
    speed: 0.012,
    texture: "/textures/earth.jpg",
    moons: [
      {
        name: "Moon",
        size: 0.2,
        distance: 1.2,
        speed: 0.04,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
    ],
    ring: null,
  },
  {
    name: "Mars",
    color: "#c1440e",
    size: 0.6,
    distance: 13,
    speed: 0.01,
    texture: "/textures/mars.jpg",
    moons: [
      {
        name: "Phobos",
        size: 0.08,
        distance: 0.8,
        speed: 0.06,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Deimos",
        size: 0.06,
        distance: 1.1,
        speed: 0.05,
        color: "#dddddd",
        texture: "/textures/moon.jpg",
      },
    ],
    ring: null,
  },
  {
    name: "Jupiter",
    color: "#d9b382",
    size: 1.5,
    distance: 17,
    speed: 0.007,
    texture: "/textures/jupiter.jpg",
    moons: [
      {
        name: "Io",
        size: 0.3,
        distance: 2,
        speed: 0.1,
        color: "#ffcc99",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Europa",
        size: 0.25,
        distance: 2.5,
        speed: 0.09,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Ganymede",
        size: 0.35,
        distance: 3,
        speed: 0.08,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Callisto",
        size: 0.33,
        distance: 3.5,
        speed: 0.07,
        color: "#aaaaaa",
        texture: "/textures/moon.jpg",
      },
      // Add more if desired: Amalthea, Himalia, Elara, etc.
    ],
    ring: null,
  },
  {
    name: "Saturn",
    color: "#d2b97b",
    size: 1.2,
    distance: 22,
    speed: 0.006,
    texture: "/textures/saturn.jpg",
    moons: [
      {
        name: "Titan",
        size: 0.28,
        distance: 2,
        speed: 0.05,
        color: "#ffe0b2",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Rhea",
        size: 0.15,
        distance: 2.5,
        speed: 0.04,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Iapetus",
        size: 0.13,
        distance: 3,
        speed: 0.03,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Dione",
        size: 0.12,
        distance: 3.5,
        speed: 0.025,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Tethys",
        size: 0.11,
        distance: 4,
        speed: 0.022,
        color: "#dddddd",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Enceladus",
        size: 0.1,
        distance: 4.5,
        speed: 0.019,
        color: "#eeeeee",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Mimas",
        size: 0.09,
        distance: 5,
        speed: 0.016,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      // Add more if desired: Hyperion, Phoebe, etc.
    ],
    ring: {
      innerRadius: 1.4,
      outerRadius: 2,
      color: "#e5c97b",
    },
  },
  {
    name: "Uranus",
    color: "#7fdbff",
    size: 1.0,
    distance: 27,
    speed: 0.005,
    texture: "/textures/uranus.jpg",
    moons: [
      {
        name: "Miranda",
        size: 0.08,
        distance: 1.5,
        speed: 0.06,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Ariel",
        size: 0.13,
        distance: 2,
        speed: 0.05,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Umbriel",
        size: 0.12,
        distance: 2.5,
        speed: 0.04,
        color: "#aaaaaa",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Titania",
        size: 0.15,
        distance: 3,
        speed: 0.03,
        color: "#999999",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Oberon",
        size: 0.14,
        distance: 3.5,
        speed: 0.02,
        color: "#888888",
        texture: "/textures/moon.jpg",
      },
      // Add more if desired: Puck, Portia, etc.
    ],
    ring: null,
  },
  {
    name: "Neptune",
    color: "#4169e1",
    size: 1.0,
    distance: 32,
    speed: 0.004,
    texture: "/textures/neptune.jpg",
    moons: [
      {
        name: "Triton",
        size: 0.21,
        distance: 2,
        speed: 0.05,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Nereid",
        size: 0.08,
        distance: 2.5,
        speed: 0.03,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      // Add more if desired: Proteus, Larissa, etc.
    ],
    ring: null,
  },
  {
    name: "Pluto",
    color: "#a9a9a9",
    size: 0.4,
    distance: 36,
    speed: 0.003,
    texture: "/textures/pluto.jpg",
    moons: [
      {
        name: "Charon",
        size: 0.1,
        distance: 1.2,
        speed: 0.04,
        color: "#cccccc",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Styx",
        size: 0.03,
        distance: 1.4,
        speed: 0.035,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Nix",
        size: 0.04,
        distance: 1.6,
        speed: 0.03,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Kerberos",
        size: 0.03,
        distance: 1.8,
        speed: 0.025,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
      {
        name: "Hydra",
        size: 0.04,
        distance: 2,
        speed: 0.02,
        color: "#bbbbbb",
        texture: "/textures/moon.jpg",
      },
    ],
    ring: null,
  },
];

const textures = useTexture(
    planetData.reduce((acc, p) => {
      if (p.texture) acc[p.name] = p.texture;
      if (p.moons)
        p.moons.forEach((m) => {
          if (m.texture) acc[m.name] = m.texture;
        });
      return acc;
    }, {} as Record<string, string>)
  );

  useFrame(({ clock }) => {
    planetData.forEach((planet, idx) => {
      const planetMesh = group.current?.children[idx + 1] as THREE.Mesh; // +1 for sun
      if (planetMesh) {
        const t = clock.getElapsedTime() * planet.speed;
        planetMesh.position.x = Math.cos(t) * planet.distance;
        planetMesh.position.z = Math.sin(t) * planet.distance;
        planetMesh.rotation.y += 0.01;
      }

      // Animate moons
      if (planet.moons && planetMesh) {
        planet.moons.forEach((moon, mIdx) => {
          const moonMesh = planetMesh.children[mIdx] as THREE.Mesh;
          if (moonMesh) {
            const mt = clock.getElapsedTime() * moon.speed;
            moonMesh.position.x = Math.cos(mt) * moon.distance;
            moonMesh.position.z = Math.sin(mt) * moon.distance;
            moonMesh.rotation.y += 0.02;
          }
        });
      }
    });
  });
 
 
 {planetData.map((planet, i) => (
        <mesh key={planet.name}>
          <sphereGeometry args={[planet.size, 32, 32]} />
          <meshStandardMaterial
            color={planet.color}
            map={planet.texture ? textures[planet.name] : undefined}
          />
          {/* Planet Label */}
          <Text
            position={[0, planet.size + 0.5, 0]}
            fontSize={0.3}
            color="#fff"
          >
            {planet.name}
          </Text>
          {/* Moons */}
          {planet.moons &&
            planet.moons.map((moon, mIdx) => (
              <mesh key={moon.name}>
                <sphereGeometry args={[moon.size, 16, 16]} />
                <meshStandardMaterial
                  color={moon.color}
                  map={moon.texture ? textures[moon.name] : undefined}
                />
                {/* Moon Label */}
                <Text
                  position={[0, moon.size + 0.2, 0]}
                  fontSize={0.15}
                  color="#fff"
                >
                  {moon.name}
                </Text>
              </mesh>
            ))}
          {/* Rings (e.g., Saturn) */}
          {planet.ring && (
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry
                args={[planet.ring.innerRadius, planet.ring.outerRadius, 64]}
              />
              <meshBasicMaterial
                color={planet.ring.color}
                side={THREE.DoubleSide}
                transparent
                opacity={0.7}
              />
            </mesh>
          )}
        </mesh>
      ))}