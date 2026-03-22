import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
  workImage: string;
  workLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Muhammed Riyas",
    location: "Thalassery",
    review: "Hindustan Paints has been my go-to for over 10 years. Their advice on choosing the right paint saved me a lot of money. Excellent quality products and service!",
    rating: 5,
    workImage: work1,
    workLabel: "Living Room Interior",
  },
  {
    id: 2,
    name: "Priya Nair",
    location: "Kannur",
    review: "Got my entire house painted using paints from here. The staff was incredibly helpful in picking the right shades. The finish looks absolutely stunning!",
    rating: 5,
    workImage: work2,
    workLabel: "House Exterior",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    location: "Thalassery",
    review: "Best hardware and paint store in Thalassery, no doubt. Quick service, fair prices, and they always have whatever I need. Highly recommended!",
    rating: 5,
    workImage: work3,
    workLabel: "Bedroom Accent Wall",
  },
  {
    id: 4,
    name: "Anitha Balan",
    location: "Kannur",
    review: "Professional team with great knowledge about paints. They helped me choose weatherproof paint for my exterior walls. Very satisfied with the results.",
    rating: 4,
    workImage: work4,
    workLabel: "Hallway & Staircase",
  },
];
