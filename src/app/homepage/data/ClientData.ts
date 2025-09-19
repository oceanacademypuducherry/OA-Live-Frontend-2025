import { ADHIPARASAKTHI, CK, MIT, PANIMALAR, PU, SMVC } from "@/assets";

export interface Client {
  name: string;
  logo: string;
}

export const clients: Client[] = [
  
  {
    name: "Sri Manakula Vinayagar Engineering College",
    logo: SMVC,
  },
  {
    name: "Pondicherry University",
    logo: PU,
  },
  {
    name: "MIT College",
    logo: MIT,
  },
  {
    name: "Adhiparasakthi Institute of Technology",
    logo: ADHIPARASAKTHI,
  },
  
  {
    name: "Panimalar Institute",
    logo: PANIMALAR,
  },
  {
    name: "CK college",
    logo: CK,
  },
];
