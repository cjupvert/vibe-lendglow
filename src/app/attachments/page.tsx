"use client";

import { useState } from "react";

export default function Attachments() {
  const [searchTerm, setSearchTerm] = useState("");

  const mockAttachments = [
    {
      id: 1,
      name: "Modern Open House Flyer",
      type: "Open House Flyers",
      description:
        "Professional open house flyer with property details and contact information",
      dateCreated: "2024-01-15",
      size: "2.4 MB",
      previewColor: "bg-blue-600",
      previewContent: {
        title: "OPEN HOUSE",
        subtitle: "Sunday 2-4 PM",
        property: "123 Maple Street",
        price: "$450,000",
        features: ["3 Bed", "2 Bath", "1,850 sq ft"],
      },
    },
    {
      id: 2,
      name: "January Market Newsletter",
      type: "Automated Mortgage Newsletters",
      description: "Monthly mortgage market insights and rate updates",
      dateCreated: "2024-01-10",
      size: "1.8 MB",
      previewColor: "bg-green-600",
      previewContent: {
        title: "MARKET UPDATE",
        subtitle: "January 2024",
        highlight: "Rates Down 0.3%",
        content: ["Market Trends", "Rate Forecast", "Expert Tips"],
      },
    },
    {
      id: 3,
      name: "Holiday Newsletter Template",
      type: "Custom Newsletter Builder",
      description: "Customizable newsletter template for holiday season",
      dateCreated: "2024-01-08",
      size: "3.1 MB",
      previewColor: "bg-red-600",
      previewContent: {
        title: "HAPPY HOLIDAYS",
        subtitle: "From Our Family to Yours",
        content: ["Year in Review", "Thank You Note", "New Year Goals"],
      },
    },
    {
      id: 4,
      name: "Weekly Market Analysis",
      type: "Weekly Market Reports",
      description: "Comprehensive weekly market analysis and trends",
      dateCreated: "2024-01-12",
      size: "1.5 MB",
      previewColor: "bg-purple-600",
      previewContent: {
        title: "MARKET REPORT",
        subtitle: "Week of Jan 8-12",
        stats: ["↑ 12% Sales", "↓ 5% Inventory", "→ Stable Rates"],
      },
    },
    {
      id: 5,
      name: "Spring Marketing Campaign",
      type: "Marketing Flyer Templates",
      description: "Spring real estate marketing flyer template",
      dateCreated: "2024-01-05",
      size: "2.7 MB",
      previewColor: "bg-yellow-600",
      previewContent: {
        title: "SPRING INTO",
        subtitle: "Your Dream Home",
        features: ["New Listings", "Market Ready", "Expert Service"],
      },
    },
    {
      id: 6,
      name: "Client Birthday Card",
      type: "Birthday and Anniversary Cards",
      description: "Personalized birthday card for valued clients",
      dateCreated: "2024-01-03",
      size: "0.9 MB",
      previewColor: "bg-pink-600",
      previewContent: {
        title: "HAPPY BIRTHDAY",
        subtitle: "Wishing You Joy",
        message: "Thank you for being a valued client!",
      },
    },
    {
      id: 7,
      name: "Luxury Home Showcase",
      type: "Open House Flyers",
      description: "Premium flyer template for luxury property listings",
      dateCreated: "2024-01-14",
      size: "3.2 MB",
      previewColor: "bg-gray-700",
      previewContent: {
        title: "LUXURY SHOWCASE",
        subtitle: "Private Viewing",
        property: "456 Oak Avenue",
        price: "$1,250,000",
        features: ["5 Bed", "4 Bath", "3,200 sq ft"],
      },
    },
    {
      id: 8,
      name: "Anniversary Celebration",
      type: "Birthday and Anniversary Cards",
      description: "Elegant anniversary card for long-term clients",
      dateCreated: "2024-01-11",
      size: "1.1 MB",
      previewColor: "bg-indigo-600",
      previewContent: {
        title: "HAPPY ANNIVERSARY",
        subtitle: "Celebrating Your Special Day",
        message: "Thank you for 5 wonderful years together!",
      },
    },
  ];

  // Get unique attachment types for filtering
  const attachmentTypes = [
    ...new Set(mockAttachments.map((attachment) => attachment.type)),
  ];

  // Filter attachments based on search term
  const filteredAttachments = mockAttachments.filter(
    (attachment) =>
      attachment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attachment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attachment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Open House Flyers":
        return (
          <svg
            width="20"
            height="20"
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
        );
      case "Automated Mortgage Newsletters":
      case "Custom Newsletter Builder":
        return (
          <svg
            width="20"
            height="20"
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
        );
      case "Weekly Market Reports":
        return (
          <svg
            width="20"
            height="20"
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
        );
      case "Marketing Flyer Templates":
        return (
          <svg
            width="20"
            height="20"
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
        );
      case "Birthday and Anniversary Cards":
        return (
          <svg
            width="20"
            height="20"
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
        );
      default:
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="14,2 14,8 20,8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Attachments</h1>

        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create Attachment
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search attachments by name, type, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-border-color rounded-lg bg-hover-bg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
          />
        </div>
      </div>

      {/* Attachments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAttachments.map((attachment) => (
          <div
            key={attachment.id}
            className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden hover:border-primary-green transition-colors group"
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
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-hover-bg rounded-lg flex items-center justify-center mr-3 text-gray-400">
                    {getTypeIcon(attachment.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary-green transition-colors">
                      {attachment.name}
                    </h3>
                    <p className="text-xs text-gray-400">{attachment.type}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                {attachment.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{formatDate(attachment.dateCreated)}</span>
                <span>{attachment.size}</span>
              </div>

              {/* Card Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors text-xs font-medium">
                  Use
                </button>
                <button className="px-3 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors text-xs">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="7,10 12,15 17,10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="px-3 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors text-xs">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAttachments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-hover-bg rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M21.44 11.05L12.25 1.86C11.86 1.47 11.23 1.47 10.84 1.86L1.65 11.05C1.26 11.44 1.26 12.07 1.65 12.46L10.84 21.65C11.23 22.04 11.86 22.04 12.25 21.65L21.44 12.46C21.83 12.07 21.83 11.44 21.44 11.05Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="9"
                y1="9"
                x2="15"
                y2="15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="15"
                y1="9"
                x2="9"
                y2="15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No attachments found
          </h3>
          <p className="text-gray-400 mb-4">
            {searchTerm
              ? `No attachments match "${searchTerm}". Try a different search term.`
              : "Get started by creating your first attachment."}
          </p>
        </div>
      )}
    </div>
  );
}
