export const business = {
  name: "Kaunda Landscapes",
  owner: "Kenn Hesbon Kaunda",
  established: 2023,
  phoneDisplay: "0759 108 763",
  phoneTel: "+254759108763",
  whatsapp: "254759108763",
  serviceArea: "Kenya",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Category = "cabro" | "lawn" | "garden";

export const categoryLabels: Record<Category, string> = {
  cabro: "Cabro works",
  lawn: "Lawns",
  garden: "Gardens",
};

export const services = [
  {
    id: "cabro",
    image: "/projects/detail-cabro.jpg",
    title: "Cabro works",
    text: "Interlocking cabro paving for driveways, parking bays, walkways and compounds at homes, businesses and institutions.",
    points: ["Driveways and parking", "Pathways and patios", "School, office and estate compounds"],
  },
  {
    id: "lawn",
    image: "/projects/detail-lawn.jpg",
    title: "Lawn installation and maintenance",
    text: "We establish new lawns and keep them green with regular pruning and year-round upkeep.",
    points: ["New lawn installation", "Pruning and mowing", "Ongoing maintenance"],
  },
  {
    id: "garden",
    image: "/projects/detail-garden.jpg",
    title: "Garden design",
    text: "Custom layouts for your space, including hedges and styled flower beds.",
    points: ["Garden layouts", "Hedges", "Flower bed styling"],
  },
];

export const steps = [
  { title: "Tell us what you need", text: "Message us on WhatsApp with your location and the kind of work you want done." },
  { title: "Site visit and quote", text: "We look at the space, agree the scope and give you a clear price." },
  { title: "We do the work", text: "Our team prepares the ground, lays or plants, and cleans up as we go." },
  { title: "Handover", text: "You check the finished job with us. Lawn clients can book regular maintenance." },
];

export type Project = {
  title: string;
  category: Category;
  summary: string;
  image?: string; // file in /public/projects
  location?: string; // optional, e.g. "Kiambu"
  focus?: string; // CSS object-position for the card crop, e.g. "50% 30%"
};

// Real completed work. Add a `location` to any entry to show the town or county on its card.
export const projects: Project[] = [
  {
    title: "Cabro driveway with flower borders",
    category: "cabro",
    summary: "Interlocking cabro driveway edged with mulched flower beds.",
    image: "/projects/flower-lined-driveway.jpg",
    focus: "50% 30%",
  },
  {
    title: "Gazebo and cabro pathway",
    category: "garden",
    summary: "Curved cabro path around a gazebo, with levelled grounds and young trees.",
    image: "/projects/gazebo-cabro-path.jpg",
    focus: "50% 55%",
  },
  {
    title: "Lawn installation",
    category: "lawn",
    summary: "Freshly established lawn in front of a multi-storey building.",
    image: "/projects/school-lawn.jpg",
    focus: "50% 15%",
  },
  {
    title: "Gated compound paving",
    category: "cabro",
    summary: "Interlocking cabro laid right up to a steel gate and boundary wall.",
    image: "/projects/gated-compound-paving.jpg",
    focus: "55% 50%",
  },
  {
    title: "Coloured cabro installation",
    category: "cabro",
    summary: "Red cabro with a black and white feature strip and concrete kerb edging.",
    image: "/projects/coloured-cabro-kerb.jpg",
    focus: "50% 60%",
  },
];

export const heroSlides = [
  { src: "/projects/gazebo-cabro-path.jpg", alt: "A curved cabro pathway leading to a gazebo on freshly landscaped grounds", focus: "50% 55%" },
  { src: "/projects/flower-lined-driveway.jpg", alt: "A cabro driveway edged with mulched flower beds", focus: "50% 30%" },
  { src: "/projects/school-lawn.jpg", alt: "A freshly established lawn in front of a multi-storey building", focus: "50% 15%" },
  { src: "/projects/coloured-cabro-kerb.jpg", alt: "Red cabro with a black and white feature strip and concrete kerb edging", focus: "50% 60%" },
  { src: "/projects/gated-compound-paving.jpg", alt: "Interlocking cabro laid up to a steel gate and boundary wall", focus: "55% 50%" },
];
