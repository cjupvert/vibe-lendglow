"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateAttachment() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const attachmentTypes = [
    {
      type: "Open House Flyers",
      description: "Professional flyers for property open houses with details and contact information",
      previewColor: "bg-blue-600",
      previewContent: {
        title: "OPEN HOUSE",
        subtitle: "Sunday 2-4 PM",
        property: "Your Property Address",
        price: "$XXX,XXX",
        features: ["X Bed", "X Bath", "X,XXX sq ft"]
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      type: "Automated Mortgage Newsletters",
      description: "Monthly mortgage market insights, rate updates, and industry news",
      previewColor: "bg-green-600",
      previewContent: {
        title: "MARKET UPDATE",
        subtitle: "Monthly Newsletter",
        highlight: "Current Rates & Trends",
        content: ["Market Analysis", "Rate Forecast", "Expert Insights"]
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      type: "Custom Newsletter Builder",
      description: "Build personalized newsletters for holidays, seasons, and special occasions",
      previewColor: "bg-red-600",
      previewContent: {
        title: "CUSTOM NEWSLETTER",
        subtitle: "Your Personal Touch",
        content: ["Custom Content", "Personal Message", "Brand Elements"]
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      type: "Weekly Market Reports",
      description: "Comprehensive weekly market analysis with trends and statistics",
      previewColor: "bg-purple-600",
      previewContent: {
        title: "MARKET REPORT",
        subtitle: "Weekly Analysis",
        stats: ["Sales Trends", "Inventory Levels", "Rate Changes"]
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      type: "Marketing Flyer Templates",
      description: "Professional marketing flyers for campaigns and promotions",
      previewColor: "bg-yellow-600",
      previewContent: {
        title: "MARKETING CAMPAIGN",
        subtitle: "Professional Promotion",
        features: ["Eye-catching Design", "Clear Messaging", "Call to Action"]
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      type: "Birthday and Anniversary Cards",
      description: "Personalized cards for client birthdays and special anniversaries",
      previewColor: "bg-pink-600",
      previewContent: {
        title: "SPECIAL OCCASION",
        subtitle: "Celebrating With You",
        message: "Personalized message for your valued clients"
      },
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <polyline points="17,2 17,7 7,7 7,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      // Here you would typically navigate to the specific builder for that type
      console.log("Creating attachment of type:", selectedType);
    }
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
            <h1 className="text-3xl font-bold text-foreground">Create New Attachment</h1>
            <p className="text-gray-400 mt-2">Choose the type of attachment you'd like to create</p>
          </div>
        </div>
      </div>

      {/* Attachment Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {attachmentTypes.map((attachment) => (
          <div
            key={attachment.type}
            onClick={() => handleTypeSelect(attachment.type)}
            className={`bg-sidebar-bg rounded-lg border-2 overflow-hidden cursor-pointer transition-all hover:border-primary-green ${
              selectedType === attachment.type 
                ? "border-primary-green ring-2 ring-primary-green ring-opacity-50" 
                : "border-border-color"
            }`}
          >
            {/* Preview Section */}
            <div className={`${attachment.previewColor} p-6 text-white relative overflow-hidden`}>
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
                    <div className="text-lg font-bold">{attachment.previewContent.property}</div>
                    <div className="text-sm font-semibold">{attachment.previewContent.price}</div>
                    <div className="flex space-x-2 text-xs">
                      {attachment.previewContent.features?.map((feature, index) => (
                        <span key={index} className="bg-white bg-opacity-20 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
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
                        <div key={index} className="text-xs opacity-90">• {item}</div>
                      ))}
                    </div>
                  </div>
                )}

                {attachment.type === "Weekly Market Reports" && (
                  <div className="space-y-2">
                    {attachment.previewContent.stats?.map((stat, index) => (
                      <div key={index} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs font-semibold">
                        {stat}
                      </div>
                    ))}
                  </div>
                )}

                {attachment.type === "Marketing Flyer Templates" && (
                  <div className="space-y-2">
                    {attachment.previewContent.features?.map((feature, index) => (
                      <div key={index} className="text-sm">✓ {feature}</div>
                    ))}
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

              {/* Selection indicator */}
              {selectedType === attachment.type && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary-green"
                    >
                      <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
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

              {/* Selection state indicator */}
              <div className="mt-4 pt-4 border-t border-border-color">
                <div className={`text-sm font-medium ${
                  selectedType === attachment.type ? "text-primary-green" : "text-gray-400"
                }`}>
                  {selectedType === attachment.type ? "✓ Selected" : "Click to select"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-border-color">
        <Link
          href="/attachments"
          className="px-6 py-3 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
        >
          Cancel
        </Link>
        
        <button
          onClick={handleContinue}
          disabled={!selectedType}
          className="px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Continue with {selectedType || "Selected Type"}
        </button>
      </div>

      {/* Help Text */}
      {!selectedType && (
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Select an attachment type above to continue with creation
          </p>
        </div>
      )}
    </div>
  );
}
