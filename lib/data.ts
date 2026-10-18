export const business = {
  name: "Kaunda Landscapes",
  owner: "Kenn Hesbon Kaunda",
  established: 2023,
  phoneDisplay: "0759 108 763",
  phoneTel: "+254759108763",
  whatsapp: "254759108763",
  areas: ["Rongo", "Kiambu", "Kitale", "Kisii"],
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
    title: "Cabro works",
    text: "Interlocking cabro paving for driveways, parking bays, walkways and compounds at homes, businesses and institutions.",
    points: ["Driveways and parking", "Pathways and patios", "School, office and estate compounds"],
  },
  {
    id: "lawn",
    title: "Lawn installation and maintenance",
    text: "We establish new lawns and keep them green with regular pruning and year-round upkeep.",
    points: ["New lawn installation", "Pruning and mowing", "Ongoing maintenance"],
  },
  {
    id: "garden",
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
  location: string;
  category: Category;
  summary: string;
  image?: string; // e.g. "/projects/kiambu-driveway.jpg" (put the file in /public/projects)
};

// TODO: Replace these sample entries with your real completed projects and photos.
export const projects: Project[] = [
  { title: "Residential driveway", location: "Kiambu", category: "cabro", summary: "Interlocking cabro driveway and parking bay." },
  { title: "School compound paving", location: "Kisii", category: "cabro", summary: "Cabro walkways linking classrooms and the main gate." },
  { title: "Front lawn installation", location: "Rongo", category: "lawn", summary: "New lawn established and trimmed for a family home." },
  { title: "Commercial lawn upkeep", location: "Kitale", category: "lawn", summary: "Regular pruning and maintenance of office grounds." },
  { title: "Hedge and flower bed layout", location: "Kiambu", category: "garden", summary: "Clipped hedge border with styled flower beds." },
  { title: "Garden and pathway design", location: "Kisii", category: "garden", summary: "Custom garden layout with a cabro path through it." },
];
