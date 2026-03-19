export interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Muhammed Riyas",
    location: "Thalassery",
    review: "Hindustan Paints has been my go-to for over 10 years. Their advice on choosing the right paint saved me a lot of money. Excellent quality products and service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    location: "Kannur",
    review: "Got my entire house painted using paints from here. The staff was incredibly helpful in picking the right shades. The finish looks absolutely stunning!",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh Kumar",
    location: "Thalassery",
    review: "Best hardware and paint store in Thalassery, no doubt. Quick service, fair prices, and they always have whatever I need. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Anitha Balan",
    location: "Kannur",
    review: "Professional team with great knowledge about paints. They helped me choose weatherproof paint for my exterior walls. Very satisfied with the results.",
    rating: 4,
  },
];
