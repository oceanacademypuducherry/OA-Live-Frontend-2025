import { ADHIPARASAKTHI, ANNES, CK, MIT, PANIMALAR, PU, RAAK, SMVC, TACW } from "@/assets";

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
  // {
  //   name: "CK college",
  //   logo: CK,
  // },  

  {
    name: "theivanai ammal college for women",
    logo: TACW,
  },
   {
    name: "theivanai ammal college for women",
    logo: RAAK,
  },
   {
    name: "st.annes college of engineering and technology",
    logo: ANNES,
  },
   {
    name: "CK college",
    logo: CK,
  },  
  
];
