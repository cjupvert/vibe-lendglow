"use client";

import { useState } from "react";
import Link from "next/link";

interface PreviewContent {
  title: string;
  subtitle: string;
  property?: string;
  price?: string;
  features?: string[];
  highlight?: string;
  content?: string[];
  stats?: string[];
  message?: string;
}

export default function CreateAttachment() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const attachmentTypes = [
    {
      type: "Open House Flyers",
      description:
        "Professional flyers for property open houses with details and contact information",
      previewColor: "bg-blue-600",
      previewContent: {
        title: "OPEN HOUSE",
        subtitle: "Sunday 2-4 PM",
        property: "Your Property Address",
        price: "$XXX,XXX",
        features: ["X Bed", "X Bath", "X,XXX sq ft"],
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="9,22 9,12 15,12 15,22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variants: [
        {
          name: "Classic Modern",
          previewColor: "bg-blue-600",
          style: "Clean lines with professional typography",
          previewContent: {
            title: "OPEN HOUSE",
            subtitle: "Sunday 2-4 PM",
            property: "123 Maple Street",
            price: "$450,000",
            features: ["3 Bed", "2 Bath", "1,850 sq ft"],
          },
        },
        {
          name: "Luxury Elegant",
          previewColor: "bg-gray-800",
          style: "Premium design with gold accents",
          previewContent: {
            title: "EXCLUSIVE SHOWING",
            subtitle: "Private Appointment",
            property: "456 Oak Avenue",
            price: "$1,250,000",
            features: ["5 Bed", "4 Bath", "3,200 sq ft"],
          },
        },
        {
          name: "Bright & Bold",
          previewColor: "bg-orange-600",
          style: "Eye-catching colors with modern layout",
          previewContent: {
            title: "OPEN HOUSE",
            subtitle: "This Weekend!",
            property: "789 Pine Road",
            price: "$325,000",
            features: ["2 Bed", "1 Bath", "1,200 sq ft"],
          },
        },
      ],
    },
    {
      type: "Automated Mortgage Newsletters",
      description:
        "Monthly mortgage market insights, rate updates, and industry news",
      previewColor: "bg-green-600",
      previewContent: {
        title: "MARKET UPDATE",
        subtitle: "Monthly Newsletter",
        highlight: "Current Rates & Trends",
        content: ["Market Analysis", "Rate Forecast", "Expert Insights"],
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="22,6 12,13 2,6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variants: [
        {
          name: "Professional Standard",
          previewColor: "bg-green-600",
          style: "Clean corporate design with data focus",
          previewContent: {
            title: "MARKET UPDATE",
            subtitle: "January 2024",
            highlight: "Rates Down 0.3%",
            content: ["Market Trends", "Rate Forecast", "Expert Tips"],
          },
        },
        {
          name: "Modern Infographic",
          previewColor: "bg-teal-600",
          style: "Visual-heavy with charts and graphs",
          previewContent: {
            title: "MARKET INSIGHTS",
            subtitle: "Data-Driven Analysis",
            highlight: "Interactive Charts",
            content: ["Visual Data", "Trend Analysis", "Forecasting"],
          },
        },
        {
          name: "Minimalist Clean",
          previewColor: "bg-emerald-600",
          style: "Simple, elegant typography-focused",
          previewContent: {
            title: "MARKET BRIEF",
            subtitle: "Essential Updates",
            highlight: "Key Highlights",
            content: ["Core Insights", "Quick Facts", "Action Items"],
          },
        },
      ],
    },
    {
      type: "Custom Newsletter Builder",
      description:
        "Build personalized newsletters for holidays, seasons, and special occasions",
      previewColor: "bg-red-600",
      previewContent: {
        title: "CUSTOM NEWSLETTER",
        subtitle: "Your Personal Touch",
        content: ["Custom Content", "Personal Message", "Brand Elements"],
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variants: [
        {
          name: "Holiday Special",
          previewColor: "bg-red-600",
          style: "Festive design with seasonal elements",
          previewContent: {
            title: "HAPPY HOLIDAYS",
            subtitle: "From Our Family to Yours",
            content: ["Year in Review", "Thank You Note", "New Year Goals"],
          },
        },
        {
          name: "Corporate Update",
          previewColor: "bg-blue-700",
          style: "Professional business communication",
          previewContent: {
            title: "COMPANY UPDATE",
            subtitle: "Quarterly Review",
            content: ["Business News", "Team Updates", "Future Plans"],
          },
        },
        {
          name: "Personal Touch",
          previewColor: "bg-purple-600",
          style: "Warm, personal design with custom branding",
          previewContent: {
            title: "PERSONAL NOTE",
            subtitle: "A Message From Me",
            content: ["Personal Story", "Client Thanks", "Special Offer"],
          },
        },
      ],
    },
    {
      type: "Weekly Market Reports",
      description:
        "Comprehensive weekly market analysis with trends and statistics",
      previewColor: "bg-purple-600",
      previewContent: {
        title: "MARKET REPORT",
        subtitle: "Weekly Analysis",
        stats: ["Sales Trends", "Inventory Levels", "Rate Changes"],
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="22,12 18,12 15,21 9,3 6,12 2,12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variants: [
        {
          name: "Executive Summary",
          previewColor: "bg-purple-600",
          style: "Concise overview with key metrics",
          previewContent: {
            title: "MARKET REPORT",
            subtitle: "Week of Jan 8-12",
            stats: ["↑ 12% Sales", "↓ 5% Inventory", "→ Stable Rates"],
          },
        },
        {
          name: "Detailed Analysis",
          previewColor: "bg-indigo-600",
          style: "In-depth report with comprehensive data",
          previewContent: {
            title: "MARKET ANALYSIS",
            subtitle: "Comprehensive Review",
            stats: ["Detailed Charts", "Trend Analysis", "Predictions"],
          },
        },
        {
          name: "Visual Dashboard",
          previewColor: "bg-violet-600",
          style: "Graphic-heavy with visual data representation",
          previewContent: {
            title: "MARKET DASHBOARD",
            subtitle: "Visual Insights",
            stats: ["Interactive Charts", "Heat Maps", "Trend Lines"],
          },
        },
      ],
    },
    {
      type: "Marketing Flyer Templates",
      description: "Professional marketing flyers for campaigns and promotions",
      previewColor: "bg-yellow-600",
      previewContent: {
        title: "MARKETING CAMPAIGN",
        subtitle: "Professional Promotion",
        features: ["Eye-catching Design", "Clear Messaging", "Call to Action"],
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="8"
            y1="21"
            x2="16"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      variants: [
        {
          name: "Spring Campaign",
          previewColor: "bg-yellow-600",
          style: "Bright, seasonal design with fresh colors",
          previewContent: {
            title: "SPRING INTO",
            subtitle: "Your Dream Home",
            features: ["New Listings", "Market Ready", "Expert Service"],
          },
        },
        {
          name: "Luxury Focus",
          previewColor: "bg-amber-700",
          style: "Premium design with elegant typography",
          previewContent: {
            title: "LUXURY HOMES",
            subtitle: "Exclusive Collection",
            features: [
              "Premium Properties",
              "White Glove Service",
              "Exclusive Access",
            ],
          },
        },
        {
          name: "First-Time Buyers",
          previewColor: "bg-green-500",
          style: "Friendly, approachable design for new buyers",
          previewContent: {
            title: "YOUR FIRST HOME",
            subtitle: "We&apos;ll Guide You",
            features: ["Step-by-Step", "Expert Guidance", "No Pressure"],
          },
        },
      ],
    },
    {
      type: "Birthday and Anniversary Cards",
      description:
        "Personalized cards for client birthdays and special anniversaries",
      previewColor: "bg-pink-600",
      previewContent: {
        title: "SPECIAL OCCASION",
        subtitle: "Celebrating With You",
        message: "Personalized message for your valued clients",
      },
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="7"
            width="20"
            height="15"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polyline
            points="17,2 17,7 7,7 7,2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variants: [
        {
          name: "Birthday Celebration",
          previewColor: "bg-pink-600",
          style: "Cheerful and colorful birthday design",
          previewContent: {
            title: "HAPPY BIRTHDAY",
            subtitle: "Wishing You Joy",
            message: "Thank you for being a valued client!",
          },
        },
        {
          name: "Anniversary Elegant",
          previewColor: "bg-rose-700",
          style: "Sophisticated design for special milestones",
          previewContent: {
            title: "HAPPY ANNIVERSARY",
            subtitle: "Celebrating Your Special Day",
            message: "Thank you for 5 wonderful years together!",
          },
        },
        {
          name: "Milestone Moments",
          previewColor: "bg-fuchsia-600",
          style: "Special occasions and life events",
          previewContent: {
            title: "CONGRATULATIONS",
            subtitle: "On Your Special Milestone",
            message: "Celebrating this important moment with you!",
          },
        },
      ],
    },
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setShowCarousel(true);
    setCurrentSlide(0);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
    setSelectedType(null);
  };

  const nextSlide = () => {
    const selectedAttachment = attachmentTypes.find(
      (att) => att.type === selectedType
    );
    if (selectedAttachment && selectedAttachment.variants) {
      setCurrentSlide((prev) =>
        prev < selectedAttachment.variants.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevSlide = () => {
    const selectedAttachment = attachmentTypes.find(
      (att) => att.type === selectedType
    );
    if (selectedAttachment && selectedAttachment.variants) {
      setCurrentSlide((prev) =>
        prev > 0 ? prev - 1 : selectedAttachment.variants.length - 1
      );
    }
  };

  const selectVariant = (variantIndex: number) => {
    console.log("Selected variant:", variantIndex, "of type:", selectedType);
    // Here you would navigate to the specific builder with the selected variant
    closeCarousel();
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link
            href="/attachments"
            className="mr-4 p-2 hover:bg-hover-bg rounded-lg transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Create New Attachment
            </h1>
            <p className="text-gray-400 mt-2">
              Choose the type of attachment you&apos;d like to create
            </p>
          </div>
        </div>
      </div>

      {/* Attachment Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {attachmentTypes.map((attachment) => (
          <div
            key={attachment.type}
            onClick={() => handleTypeSelect(attachment.type)}
            className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden cursor-pointer transition-all hover:border-primary-green"
          >
            {/* Preview Section */}
            <div
              className={`${attachment.previewColor} p-6 text-white relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-xs font-semibold mb-2 opacity-90">
                  {attachment.previewContent.title}
                </div>
                <div className="text-sm font-medium mb-3">
                  {attachment.previewContent.subtitle}
                </div>

                {/* Type-specific preview content */}
                {attachment.type === "Open House Flyers" && (
                  <div className="space-y-1">
                    <div className="text-lg font-bold">
                      {attachment.previewContent.property}
                    </div>
                    <div className="text-sm font-semibold">
                      {attachment.previewContent.price}
                    </div>
                    <div className="flex space-x-2 text-xs">
                      {attachment.previewContent.features?.map(
                        (feature, index) => (
                          <span
                            key={index}
                            className="bg-white bg-opacity-20 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

                {attachment.type.includes("Newsletter") && (
                  <div className="space-y-2">
                    {attachment.previewContent.highlight && (
                      <div className="bg-white bg-opacity-20 px-3 py-1 rounded text-sm font-semibold">
                        {attachment.previewContent.highlight}
                      </div>
                    )}
                    <div className="space-y-1">
                      {attachment.previewContent.content?.map((item, index) => (
                        <div key={index} className="text-xs opacity-90">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {attachment.type === "Weekly Market Reports" && (
                  <div className="space-y-2">
                    {attachment.previewContent.stats?.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs font-semibold"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                )}

                {attachment.type === "Marketing Flyer Templates" && (
                  <div className="space-y-2">
                    {attachment.previewContent.features?.map(
                      (feature, index) => (
                        <div key={index} className="text-sm">
                          ✓ {feature}
                        </div>
                      )
                    )}
                  </div>
                )}

                {attachment.type === "Birthday and Anniversary Cards" && (
                  <div className="text-center">
                    <div className="text-xs opacity-90 mt-2">
                      {attachment.previewContent.message}
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <div className="w-full h-full bg-white rounded-full transform translate-x-6 -translate-y-6"></div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-hover-bg rounded-lg flex items-center justify-center mr-4 text-gray-400">
                  {attachment.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {attachment.type}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {attachment.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Overlay */}
      {showCarousel && selectedType && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-8">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Carousel Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedType}
              </h2>
              <p className="text-gray-300">
                Choose a design style for your attachment
              </p>
            </div>

            {/* Carousel Content */}
            {(() => {
              const selectedAttachment = attachmentTypes.find(
                (att) => att.type === selectedType
              );
              if (!selectedAttachment || !selectedAttachment.variants)
                return null;

              const currentVariant = selectedAttachment.variants[currentSlide];

              return (
                <div className="relative">
                  {/* Navigation Arrows */}
                  {selectedAttachment.variants.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Variant Card */}
                  <div className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden mx-16">
                    {/* Preview Section */}
                    <div
                      className={`${currentVariant.previewColor} p-12 text-white relative overflow-hidden`}
                    >
                      <div className="relative z-10 text-center">
                        <div className="text-lg font-semibold mb-3 opacity-90">
                          {currentVariant.previewContent.title}
                        </div>
                        <div className="text-xl font-medium mb-6">
                          {currentVariant.previewContent.subtitle}
                        </div>

                        {/* Type-specific preview content */}
                        {selectedType === "Open House Flyers" && (
                          <div className="space-y-3">
                            <div className="text-3xl font-bold">
                              {
                                (
                                  currentVariant.previewContent as PreviewContent
                                ).property
                              }
                            </div>
                            <div className="text-xl font-semibold">
                              {
                                (
                                  currentVariant.previewContent as PreviewContent
                                ).price
                              }
                            </div>
                            <div className="flex justify-center space-x-3 text-sm">
                              {(
                                currentVariant.previewContent as PreviewContent
                              ).features?.map(
                                (feature: string, index: number) => (
                                  <span
                                    key={index}
                                    className="bg-white bg-opacity-20 px-3 py-2 rounded"
                                  >
                                    {feature}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {selectedType.includes("Newsletter") && (
                          <div className="space-y-4">
                            {(currentVariant.previewContent as PreviewContent)
                              .highlight && (
                              <div className="bg-white bg-opacity-20 px-4 py-2 rounded text-lg font-semibold inline-block">
                                {
                                  (
                                    currentVariant.previewContent as PreviewContent
                                  ).highlight
                                }
                              </div>
                            )}
                            <div className="space-y-2">
                              {(
                                currentVariant.previewContent as PreviewContent
                              ).content?.map((item: string, index: number) => (
                                <div key={index} className="text-sm opacity-90">
                                  • {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedType === "Weekly Market Reports" && (
                          <div className="space-y-3">
                            {(
                              currentVariant.previewContent as PreviewContent
                            ).stats?.map((stat: string, index: number) => (
                              <div
                                key={index}
                                className="bg-white bg-opacity-20 px-3 py-2 rounded text-sm font-semibold inline-block mr-2"
                              >
                                {stat}
                              </div>
                            ))}
                          </div>
                        )}

                        {selectedType === "Marketing Flyer Templates" && (
                          <div className="space-y-3">
                            {(
                              currentVariant.previewContent as PreviewContent
                            ).features?.map(
                              (feature: string, index: number) => (
                                <div key={index} className="text-lg">
                                  ✓ {feature}
                                </div>
                              )
                            )}
                          </div>
                        )}

                        {selectedType === "Birthday and Anniversary Cards" && (
                          <div className="text-center">
                            <div className="text-sm opacity-90 mt-4">
                              {
                                (
                                  currentVariant.previewContent as PreviewContent
                                ).message
                              }
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Decorative background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <div className="w-full h-full bg-white rounded-full transform translate-x-12 -translate-y-12"></div>
                      </div>
                    </div>

                    {/* Variant Info */}
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {currentVariant.name}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {currentVariant.style}
                      </p>

                      <button
                        onClick={() => selectVariant(currentSlide)}
                        className="px-8 py-3 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
                      >
                        Use This Design
                      </button>
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  {selectedAttachment.variants.length > 1 && (
                    <div className="flex justify-center mt-6 space-x-2">
                      {selectedAttachment.variants.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide
                              ? "bg-primary-green"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
