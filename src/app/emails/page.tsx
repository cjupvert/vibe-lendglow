export default function Emails() {
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

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Emails</h1>

        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-hover-bg text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
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
            Export
          </button>

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
            New Email
          </button>
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
              {mockEmails.map((email) => (
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
    </div>
  );
}
