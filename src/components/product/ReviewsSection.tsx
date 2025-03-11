
import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ReviewsSection = ({ reviews, averageRating, totalReviews }: ReviewsSectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("most-recent");

  const displayedReviews = expanded ? reviews : reviews.slice(0, 3);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-8 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">
          Reviews ({totalReviews})
        </h2>
        <div className="flex items-center">
          <div className="flex mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < Math.round(averageRating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-muted"
                )}
              />
            ))}
          </div>
          <span className="font-medium">{averageRating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="py-2 px-3 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="most-recent">Most Recent</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="lowest-rating">Lowest Rating</option>
          </select>
        </div>
        
        <button
          className="text-sm font-medium underline text-muted-foreground hover:text-foreground transition-colors"
        >
          Write a review
        </button>
      </div>
      
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <div key={review.id} className="review-card animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{review.title}</h3>
              <span className="text-sm text-muted-foreground">
                {formatDate(review.date)}
              </span>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < review.rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-muted"
                    )}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{review.author}</p>
              {review.verified && (
                <span className="ml-2 px-1.5 py-0.5 text-xxs bg-green-50 text-green-700 rounded">
                  Verified
                </span>
              )}
            </div>
            
            <p className="text-sm">{review.content}</p>
          </div>
        ))}
      </div>
      
      {reviews.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
        >
          {expanded ? "Show less reviews" : "Show all reviews"}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-300",
            expanded && "rotate-180"
          )} />
        </button>
      )}
    </section>
  );
};

export default ReviewsSection;
