import { Cpu } from "lucide-react";
import { ShieldCheck as ShieldCheckIcon } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { RefreshCcw as RefreshCcwIcon } from "lucide-react";
import { HandCoins as HardCoinsIcon } from "lucide-react";
import { Box } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Benefícios", href: "#" },
  { label: "Depoimentos", href: "#" },
  { label: "Preços", href: "#" },
  { label: "Contato", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Cpu />,
    text: "Acessibilidade à Tecnologia Inovadora",
    description:
      "Alugue equipamentos de alta qualidade sem precisar investir no custo elevado de compra, aproveitando o que há de mais moderno no mercado.",
  },
  {
    icon: <Fingerprint />,
    text: "Experiência Única",
    description:
      "Seja em festas de aniversário, eventos corporativos, casamentos ou workshops, os óculos VR tornam cada momento inesquecível e impressionante.",
  },
  {
    icon: <RefreshCcwIcon />,
    text: "Atualizações Constantes",
    description:
      "Trabalhamos com os equipamentos mais recentes e conteúdos atualizados, garantindo sempre as melhores e mais inovadoras experiências.",
  },
  {
    icon: <ShieldCheckIcon />,
    text: "Suporte Técnico Completo",
    description:
      "Contamos com uma equipe dedicada que oferece assistência antes, durante e após o uso, garantindo tranquilidade ao cliente.",
  },
  {
    icon: <HardCoinsIcon />,
    text: "Economia com Máximo Benefício",
    description:
      "Pague apenas pelo tempo de uso e evite gastos com manutenção, atualizações ou obsolescência dos equipamentos.",
  },
  {
    icon: <Box />,
    text: "Variedade de Conteúdos Personalizáveis",
    description:
      "Tenha acesso a uma biblioteca diversificada de jogos e experiências, customizáveis para atender qualquer público ou faixa etária.",
  },
];

export const checklistItems = [
  {
    title: "Equipamentos higienizados e revisados",
    description:
      "Garantia de qualidade e segurança em todos os aparelhos utilizados durante o evento.",
  },
  {
    title: "Jogos e experiências personalizáveis conforme o evento",
    description:
      "Adapte atividades e experiências ao tema e ao público, tornando cada momento único.",
  },
  {
    title: "Suporte ao vivo para resolver dúvidas ou problemas.",
    description:
      "Oferecemos assistência instantânea para garantir que tudo ocorra sem imprevistos.",
  },
  {
    title: "Treinamento prático para iniciantes utilizarem com facilidade.",
    description:
      "Ajudamos os iniciantes a dominar rapidamente as ferramentas, proporcionando uma experiência tranquila e eficaz.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
