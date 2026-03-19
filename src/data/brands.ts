export interface Brand {
  id: number;
  name: string;
  initials: string;
  color: string;
}

export const brands: Brand[] = [
  { id: 1, name: "Asian Paints", initials: "AP", color: "#E11D48" },
  { id: 2, name: "Berger Paints", initials: "BP", color: "#0EA5E9" },
  { id: 3, name: "Nippon Paint", initials: "NP", color: "#EF4444" },
  { id: 4, name: "Kansai Nerolac", initials: "KN", color: "#10B981" },
  { id: 5, name: "Dulux", initials: "DX", color: "#8B5CF6" },
  { id: 6, name: "Indigo Paints", initials: "IP", color: "#F59E0B" },
];
