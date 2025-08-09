"use client";

import { useState } from "react";

export default function Emails() {
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [composeForm, setComposeForm] = useState({
    type: "one-time",
    to: [],
    subject: "",
    body: "",
    template: "",
    attachments: [],
  });

  const mockEmails = [
    {
      id: 1,
      title: "Welcome Package - New Client Onboarding",
      recipients: [
        { email: "john.smith@email.com", type: "client" },
        { email: "sarah.jones@email.com", type: "client" },
      ],
      status: "delivered",
      sentDate: "2024-02-15T10:30:00",
      scheduledDate: null,
      attachments: ["Welcome Guide.pdf", "Terms of Service.pdf"],
      type: "recurring",
    },
    {
      id: 2,
      title: "Loan Application Reminder",
      recipients: [{ email: "sarah.johnson@email.com", type: "client" }],
      status: "scheduled",
      sentDate: null,
      scheduledDate: "2024-02-20T09:00:00",
      attachments: ["Application Form.pdf"],
      type: "recurring",
    },
    {
      id: 3,
      title: "Monthly Statement - January 2024",
      recipients: [
        { email: "michael.brown@email.com", type: "client" },
        { email: "alex.garcia@email.com", type: "client" },
        { email: "jennifer.white@email.com", type: "client" },
        { email: "robert.taylor@email.com", type: "client" },
      ],
      status: "delivered",
      sentDate: "2024-02-01T08:00:00",
      scheduledDate: null,
      attachments: ["Statement_Jan2024.pdf"],
      type: "recurring",
    },
    {
      id: 4,
      title: "Custom Follow-up: Partnership Proposal",
      recipients: [
        { email: "emily.davis@email.com", type: "partner" },
        { email: "mark.thompson@email.com", type: "partner" },
      ],
      status: "delivered",
      sentDate: "2024-02-14T14:15:00",
      scheduledDate: null,
      attachments: ["Partnership Proposal.pdf", "Company Overview.pdf"],
      type: "one-time",
    },
    {
      id: 5,
      title: "Payment Confirmation Receipt",
      recipients: [{ email: "david.wilson@email.com", type: "client" }],
      status: "delivered",
      sentDate: "2024-02-16T16:45:00",
      scheduledDate: null,
      attachments: ["Receipt_Feb2024.pdf"],
      type: "recurring",
    },
    {
      id: 6,
      title: "Quarterly Newsletter - All Stakeholders",
      recipients: [
        { email: "lisa.anderson@email.com", type: "client" },
        { email: "james.miller@email.com", type: "partner" },
        { email: "maria.rodriguez@email.com", type: "client" },
        { email: "kevin.lee@email.com", type: "partner" },
        { email: "amanda.clark@email.com", type: "client" },
        { email: "thomas.hall@email.com", type: "client" },
        { email: "susan.adams@email.com", type: "partner" },
      ],
      status: "scheduled",
      sentDate: null,
      scheduledDate: "2024-12-20T10:00:00",
      attachments: ["Newsletter_Q4.pdf"],
      type: "one-time",
    },
  ];

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    if (status === "delivered") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300 border border-green-700">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Delivered
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300 border border-yellow-700">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Scheduled
        </span>
      );
    }
  };

  const getTypeBadge = (type: string) => {
    if (type === "recurring") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-300 border border-blue-700">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          Recurring
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-300 border border-purple-700">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          One-time
        </span>
      );
    }
  };

  const getRecipientBadge = (recipient: { email: string; type: string }) => {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white text-gray-900 border border-gray-300 mr-1 mb-1">
        {recipient.email}
      </span>
    );
  };

  const renderRecipients = (recipients: { email: string; type: string }[]) => {
    const maxVisible = 5;
    const visibleRecipients = recipients.slice(0, maxVisible);
    const remainingCount = recipients.length - maxVisible;

    return (
      <div className="flex flex-wrap">
        {visibleRecipients.map((recipient, index) => (
          <div key={index}>{getRecipientBadge(recipient)}</div>
        ))}
        {remainingCount > 0 && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600 mr-1 mb-1">
            +{remainingCount}
          </span>
        )}
      </div>
    );
  };

  // Filter emails based on search term
  const filteredEmails = mockEmails.filter((email) =>
    email.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.recipients.some(recipient => 
      recipient.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    email.attachments.some(attachment => 
      attachment.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Emails</h1>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsComposeModalOpen(true)}
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
            New Email
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
            placeholder="Search emails by title, recipient, or attachment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-border-color rounded-lg bg-hover-bg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-hover-bg">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Recipients
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Attachments
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {filteredEmails.map((email) => (
                <tr
                  key={email.id}
                  className="hover:bg-hover-bg transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-foreground">
                      {email.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {renderRecipients(email.recipients)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {email.attachments.map((attachment, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600"
                        >
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {attachment}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">{getTypeBadge(email.type)}</td>
                  <td className="px-6 py-4">{getStatusBadge(email.status)}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300">
                      {email.status === "delivered"
                        ? `Delivered on ${formatDateTime(email.sentDate!)}`
                        : `Scheduled for ${formatDateTime(
                            email.scheduledDate!
                          )}`}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compose Email Full Page Modal */}
      {isComposeModalOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          {/* Header */}
          <div className="border-b border-border-color p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Compose Email</h2>
            <button
              onClick={() => setIsComposeModalOpen(false)}
              className="p-2 hover:bg-hover-bg rounded-lg transition-colors"
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
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Panel - Form */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="max-w-4xl space-y-6">
                {/* Email Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Email Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="emailType"
                        value="one-time"
                        checked={composeForm.type === "one-time"}
                        onChange={(e) =>
                          setComposeForm({
                            ...composeForm,
                            type: e.target.value,
                          })
                        }
                        className="mr-2 text-primary-green focus:ring-primary-green"
                      />
                      <span className="text-foreground">One-time</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="emailType"
                        value="recurring"
                        checked={composeForm.type === "recurring"}
                        onChange={(e) =>
                          setComposeForm({
                            ...composeForm,
                            type: e.target.value,
                          })
                        }
                        className="mr-2 text-primary-green focus:ring-primary-green"
                      />
                      <span className="text-foreground">Recurring</span>
                    </label>
                  </div>
                </div>

                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Start from Template (Optional)
                  </label>
                  <select
                    value={composeForm.template}
                    onChange={(e) =>
                      setComposeForm({
                        ...composeForm,
                        template: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                  >
                    <option value="">Select a template...</option>
                    <option value="welcome">Welcome Package</option>
                    <option value="reminder">Payment Reminder</option>
                    <option value="statement">Monthly Statement</option>
                    <option value="newsletter">Newsletter</option>
                    <option value="followup">Follow-up</option>
                  </select>
                </div>

                {/* Recipients */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Recipients
                  </label>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <button className="px-3 py-2 bg-green-900 text-green-300 border border-green-700 rounded-lg text-sm hover:bg-green-800 transition-colors">
                        + Add Clients
                      </button>
                      <button className="px-3 py-2 bg-orange-900 text-orange-300 border border-orange-700 rounded-lg text-sm hover:bg-orange-800 transition-colors">
                        + Add Partners
                      </button>
                    </div>
                    <div className="min-h-[60px] p-3 bg-hover-bg border border-border-color rounded-lg">
                      <div className="text-sm text-gray-400">
                        Selected recipients will appear here...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={composeForm.subject}
                    onChange={(e) =>
                      setComposeForm({
                        ...composeForm,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Enter email subject..."
                    className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                  />
                </div>

                {/* Email Body */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="border border-border-color rounded-lg bg-hover-bg">
                    {/* Toolbar */}
                    <div className="border-b border-border-color p-2 flex space-x-2">
                      <button className="p-1 hover:bg-gray-600 rounded text-gray-300">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 4H18V6H6V4ZM6 8H18V10H6V8ZM6 12H18V14H6V12ZM6 16H18V18H6V16Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded text-gray-300 font-bold">
                        B
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded text-gray-300 italic">
                        I
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded text-gray-300 underline">
                        U
                      </button>
                    </div>
                    <textarea
                      value={composeForm.body}
                      onChange={(e) =>
                        setComposeForm({ ...composeForm, body: e.target.value })
                      }
                      placeholder="Compose your email message..."
                      rows={12}
                      className="w-full p-3 bg-transparent text-foreground placeholder-gray-400 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Attachments
                  </label>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
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
                      Add Attachment
                    </button>

                    {/* Selected Attachments */}
                    <div className="bg-hover-bg border border-border-color rounded-lg p-3 min-h-[100px]">
                      <div className="text-sm text-gray-400 mb-3">
                        Selected Attachments:
                      </div>

                      {/* Mock selected attachments */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-sidebar-bg border border-border-color rounded-lg p-2">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>
                              <div className="text-sm text-foreground">
                                Welcome Guide.pdf
                              </div>
                              <div className="text-xs text-gray-400">
                                245 KB
                              </div>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-hover-bg rounded text-gray-400 hover:text-red-400 transition-colors">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
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

                        <div className="flex items-center justify-between bg-sidebar-bg border border-border-color rounded-lg p-2">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <div>
                              <div className="text-sm text-foreground">
                                Terms of Service.pdf
                              </div>
                              <div className="text-xs text-gray-400">89 KB</div>
                            </div>
                          </div>
                          <button className="p-1 hover:bg-hover-bg rounded text-gray-400 hover:text-red-400 transition-colors">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
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
                      </div>

                      {/* Empty state when no attachments */}
                      {/* <div className="text-sm text-gray-400 text-center py-4">
                        No attachments selected
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Preview/Actions */}
            <div className="w-80 border-l border-border-color p-6 bg-sidebar-bg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Email Preview
                  </h3>
                  <div className="bg-hover-bg border border-border-color rounded-lg p-4 text-sm">
                    <div className="mb-3">
                      <div className="text-gray-400">Subject:</div>
                      <div className="text-foreground">
                        {composeForm.subject || "No subject"}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="text-gray-400">Type:</div>
                      <div className="text-foreground capitalize">
                        {composeForm.type}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400">Recipients:</div>
                      <div className="text-foreground">0 selected</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors">
                    Send Now
                  </button>
                  <button className="w-full px-4 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors">
                    Save as Draft
                  </button>
                  <button className="w-full px-4 py-2 bg-hover-bg text-gray-300 border border-border-color rounded-lg hover:bg-gray-600 hover:text-white transition-colors">
                    Schedule Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
