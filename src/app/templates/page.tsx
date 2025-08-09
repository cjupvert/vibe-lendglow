"use client";

import { useState } from "react";

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewTemplateModalOpen, setIsNewTemplateModalOpen] = useState(false);
  const [templateForm, setTemplateForm] = useState({
    name: "",
    content: "",
  });

  const mockTemplates = [
    {
      id: 1,
      name: "Welcome Package",
      text: "Dear [Client Name],\n\nWelcome to our services! We're excited to have you on board. This package contains all the essential information you need to get started.\n\nYour dedicated account manager will be in touch within 24 hours to schedule your onboarding call.\n\nBest regards,\nThe Team",
    },
    {
      id: 2,
      name: "Payment Reminder",
      text: "Hello [Client Name],\n\nThis is a friendly reminder that your payment of $[Amount] is due on [Due Date].\n\nYou can make your payment through our secure portal or contact us if you have any questions.\n\nThank you for your business!\n\nBest regards,\nAccounting Department",
    },
    {
      id: 3,
      name: "Monthly Statement",
      text: "Dear [Client Name],\n\nYour monthly statement for [Month] [Year] is now available.\n\nStatement Summary:\n- Previous Balance: $[Previous Balance]\n- Payments Received: $[Payments]\n- New Charges: $[New Charges]\n- Current Balance: $[Current Balance]\n\nPlease review the attached statement and contact us with any questions.\n\nBest regards,\nClient Services",
    },
    {
      id: 4,
      name: "Newsletter Template",
      text: "Subject: [Company Name] Newsletter - [Month] [Year]\n\nDear Valued Client,\n\nWe hope this newsletter finds you well. Here are the latest updates from our team:\n\n📈 Market Updates\n[Market content here]\n\n🎯 Service Highlights\n[Service updates here]\n\n📅 Upcoming Events\n[Events content here]\n\nThank you for being a valued part of our community.\n\nWarm regards,\nThe [Company Name] Team",
    },
    {
      id: 5,
      name: "Follow-up Template",
      text: "Hi [Client Name],\n\nI wanted to follow up on our recent conversation about [Topic].\n\nAs discussed, the next steps are:\n1. [Action item 1]\n2. [Action item 2]\n3. [Action item 3]\n\nI'll be reaching out again on [Follow-up Date] to check on progress. Please don't hesitate to contact me if you have any questions in the meantime.\n\nBest regards,\n[Your Name]",
    },
    {
      id: 6,
      name: "Partnership Proposal",
      text: "Dear [Partner Name],\n\nWe are excited to propose a strategic partnership between [Your Company] and [Partner Company].\n\nProposed Partnership Benefits:\n• Expanded market reach\n• Shared resources and expertise\n• Increased revenue opportunities\n• Enhanced customer value\n\nWe would love to schedule a meeting to discuss this opportunity in detail. Please let us know your availability for the coming weeks.\n\nLooking forward to a mutually beneficial partnership.\n\nBest regards,\n[Your Name]\nBusiness Development",
    },
  ];

  // Available placeholders
  const availablePlaceholders = [
    "{{First Name}}",
    "{{Last Name}}",
    "{{Full Name}}",
    "{{Email}}",
    "{{Company Name}}",
    "{{Amount}}",
    "{{Due Date}}",
    "{{Close Date}}",
    "{{Address}}",
    "{{Phone Number}}",
    "{{Account Number}}",
    "{{Balance}}",
    "{{Date}}",
    "{{Time}}",
    "{{Month}}",
    "{{Year}}",
  ];

  // Filter templates based on search term
  const filteredTemplates = mockTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTemplateFormChange = (field: string, value: string) => {
    setTemplateForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addPlaceholder = (placeholder: string) => {
    const textarea = document.getElementById(
      "template-content"
    ) as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const currentContent = templateForm.content;
      const newContent =
        currentContent.substring(0, start) +
        placeholder +
        currentContent.substring(end);

      handleTemplateFormChange("content", newContent);

      // Set cursor position after the inserted placeholder
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + placeholder.length,
          start + placeholder.length
        );
      }, 0);
    }
  };

  const handleSaveTemplate = () => {
    // Here you would typically save the template
    console.log("Saving template:", templateForm);
    setTemplateForm({ name: "", content: "" });
    setIsNewTemplateModalOpen(false);
  };

  const handleCancelTemplate = () => {
    setTemplateForm({ name: "", content: "" });
    setIsNewTemplateModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Email Templates</h1>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsNewTemplateModalOpen(true)}
            className="flex items-center px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
          >
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
            New Template
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
            placeholder="Search templates by name or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-border-color rounded-lg bg-hover-bg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
          />
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-sidebar-bg rounded-lg border border-border-color p-6 hover:border-primary-green transition-colors group"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 13H8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 17H8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 9H8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-primary-green transition-colors">
                    {template.name}
                  </h3>
                </div>
              </div>

              {/* Quick Actions Dropdown */}
              <div className="relative">
                <button className="text-gray-400 hover:text-white transition-colors p-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="5"
                      r="1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="19"
                      r="1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Preview */}
            <div className="mb-6">
              <div className="text-sm text-gray-300 leading-relaxed">
                <div className="line-clamp-4 whitespace-pre-line">
                  {template.text.length > 200
                    ? `${template.text.substring(0, 200)}...`
                    : template.text}
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="flex space-x-2 pt-4 border-t border-border-color">
              <button className="flex-1 px-3 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                Edit
              </button>
              <button className="px-3 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors text-sm">
                <svg
                  width="16"
                  height="16"
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
              <button className="px-3 py-2 bg-red-900 text-red-300 border border-red-700 rounded-lg hover:bg-red-800 hover:text-white transition-colors text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="3,6 5,6 21,6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19,6v14a2,2 0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
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
                d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No templates found
          </h3>
          <p className="text-gray-400 mb-4">
            {searchTerm
              ? `No templates match "${searchTerm}". Try a different search term.`
              : "Get started by creating your first email template."}
          </p>
          {!searchTerm && (
            <button
              onClick={() => setIsNewTemplateModalOpen(true)}
              className="inline-flex items-center px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
            >
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
              Create Your First Template
            </button>
          )}
        </div>
      )}

      {/* New Template Full Page Modal */}
      {isNewTemplateModalOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          {/* Modal Header */}
          <div className="border-b border-border-color p-6 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 text-primary-green"
              >
                <path
                  d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-xl font-semibold text-foreground">
                Create New Template
              </h2>
            </div>
            <button
              onClick={handleCancelTemplate}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                width="24"
                height="24"
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
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Left Panel - Form */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl space-y-6">
                {/* Template Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Template Name
                  </label>
                  <input
                    type="text"
                    value={templateForm.name}
                    onChange={(e) =>
                      handleTemplateFormChange("name", e.target.value)
                    }
                    placeholder="Enter template name..."
                    className="w-full px-4 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>

                {/* Template Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Template Content
                  </label>
                  <textarea
                    id="template-content"
                    value={templateForm.content}
                    onChange={(e) =>
                      handleTemplateFormChange("content", e.target.value)
                    }
                    placeholder="Enter your email template content here..."
                    rows={15}
                    className="w-full px-4 py-3 bg-hover-bg border border-border-color rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Panel - Placeholders */}
            <div className="w-80 border-l border-border-color p-6 bg-sidebar-bg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Available Placeholders
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Click any placeholder to insert it at your cursor position
                    in the template content.
                  </p>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {availablePlaceholders.map((placeholder) => (
                    <button
                      key={placeholder}
                      onClick={() => addPlaceholder(placeholder)}
                      className="w-full text-left px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-gray-300 hover:bg-gray-600 hover:text-white hover:border-primary-green transition-colors text-sm"
                    >
                      {placeholder}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-border-color">
                  <div className="space-y-3">
                    <button
                      onClick={handleSaveTemplate}
                      disabled={
                        !templateForm.name.trim() ||
                        !templateForm.content.trim()
                      }
                      className="w-full px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Save Template
                    </button>
                    <button
                      onClick={handleCancelTemplate}
                      className="w-full px-4 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Template Preview */}
                {templateForm.content && (
                  <div className="pt-4 border-t border-border-color">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                      Preview
                    </h4>
                    <div className="bg-hover-bg border border-border-color rounded-lg p-3 max-h-48 overflow-y-auto">
                      <div className="text-xs text-gray-400 whitespace-pre-line">
                        {templateForm.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
