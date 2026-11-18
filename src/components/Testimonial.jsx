import React from "react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Operations Manager",
    rating: 5,
    review:
      "DBSol delivered our Dynamics 365 project flawlessly. The team was professional and highly responsive.",
  },
  {
    name: "Anita Sharma",
    role: "CEO",
    rating: 4,
    review:
      "Good technical expertise and smooth implementation. Overall a great experience.",
  },
  {
    name: "Michael Wilson",
    role: "Director",
    rating: 3.8,
    review:
      "Very knowledgeable team. Final result was impressive and met expectations.",
  },
  {
    name: "Priya Nair",
    role: "Business Owner",
    rating: 5,
    review:
      "Outstanding development service and excellent project communication.",
  },
  {
    name: "Arjun Mehta",
    role: "Finance Director",
    rating: 4,
    review:
      "Their Dynamics 365 expertise significantly improved our financial workflows.",
  },
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    rating: 5,
    review:
      "Delivered a high-quality responsive website and enterprise integrations.",
  },
  {
    name: "David Chen",
    role: "Operations Head",
    rating: 4,
    review:
      "The implementation streamlined our supply chain and operations.",
  },
  {
    name: "Ahmed Hassan",
    role: "Sales Manager",
    rating: 3.8,
    review:
      "Reliable support team and strong technical expertise.",
  },
  {
    name: "Lisa Anderson",
    role: "Technology Lead",
    rating: 5,
    review:
      "Transformed our outdated systems into a modern platform.",
  },
  {
    name: "Kevin White",
    role: "Product Owner",
    rating: 4,
    review:
      "Excellent support and timely issue resolution.",
  },

  // Repeat until 20 Reviews
  {
    name: "Rebecca Taylor",
    role: "CEO",
    rating: 5,
    review:
      "Amazing customer service and quality delivery.",
  },
  {
    name: "Vikram Singh",
    role: "Operations Director",
    rating: 4,
    review:
      "Helped automate our manual business processes.",
  },
  {
    name: "Daniel Lee",
    role: "IT Director",
    rating: 5,
    review:
      "Cloud migration was seamless and professionally managed.",
  },
  {
    name: "Neha Kapoor",
    role: "Business Manager",
    rating: 4,
    review:
      "Professional consultants with deep business knowledge.",
  },
  {
    name: "Maria Rodriguez",
    role: "IT Manager",
    rating: 3.8,
    review:
      "Responsive support and excellent implementation guidance.",
  },
  {
    name: "Thomas Young",
    role: "CIO",
    rating: 5,
    review:
      "Scalable solutions that support our long-term growth.",
  },
  {
    name: "Pooja Sharma",
    role: "Business Director",
    rating: 4,
    review:
      "Very dependable technology partner.",
  },
  
];

const renderStars = (rating) => {
  const stars = Math.round(rating);
  return "★".repeat(stars);
};

export default function Testimonials({ limit }) {
  const displayedReviews = reviews.slice(0, limit ?? 3);
  const listClassName = "flex-wrap justify-center";

  return (
    <section className="py-4 md:py-8 lg:py-16 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-400">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Trusted by businesses across industries.
        </p>
      </div>

    <div className="relative overflow-hidden">
      <div className={`flex gap-6 ${listClassName}`}>
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="w-full min-h-[220px] max-w-[380px] bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6"
            >
              <div className="text-yellow-500 text-xl mb-3">
                {renderStars(review.rating)}
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-200 mb-3">
                {review.rating}/5
              </div>

              <p className="text-gray-700 dark:text-white mb-5">
                "{review.review}"
              </p>

              <div>
                <h4 className="font-semibold dark:text-gray-200 text-lg ">
                  {review.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-200 text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}