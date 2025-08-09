import Link from "next/link";

export default function Dashboard() {
  // Mock data - in real app this would come from your backend
  const metrics = {
    emailOpenRate: 68.5,
    emailsSentLastMonth: 247,
    activeClients: 89,
  };

  const recentEmails = [
    {
      recipient: "john.doe@email.com",
      subject: "Weekly Market Update",
      date: "2024-01-15",
    },
    {
      recipient: "sarah.smith@email.com",
      subject: "Happy Birthday!",
      date: "2024-01-14",
    },
    {
      recipient: "mike.johnson@email.com",
      subject: "New Listing Alert",
      date: "2024-01-14",
    },
    {
      recipient: "lisa.brown@email.com",
      subject: "Mortgage Rate Update",
      date: "2024-01-13",
    },
    {
      recipient: "david.wilson@email.com",
      subject: "Open House Invitation",
      date: "2024-01-13",
    },
  ];

  const recentClients = [
    { name: "Emma Thompson", date: "2024-01-15" },
    { name: "Robert Chen", date: "2024-01-14" },
    { name: "Maria Rodriguez", date: "2024-01-13" },
    { name: "James Miller", date: "2024-01-12" },
    { name: "Anna Davis", date: "2024-01-11" },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Dashboard</h1>

      {/* Developer Note */}
      <div className="mb-8 bg-sidebar-bg rounded-lg border border-border-color p-4">
        <p className="text-gray-300 text-sm">
          <span className="text-primary-green font-semibold">@sody</span> still
          need to fully think about this page. Just had AI throw something
          together
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-sidebar-bg rounded-lg border border-border-color p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Email Open Rate</p>
              <p className="text-3xl font-bold text-foreground">
                {metrics.emailOpenRate}%
              </p>
              <p className="text-green-500 text-sm mt-1">
                ↑ +2.3% from last month
              </p>
            </div>
            <div className="w-16 h-10">
              <svg
                width="64"
                height="40"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 35 L12 28 L22 32 L32 20 L42 25 L52 15 L62 18"
                  stroke="#1db954"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 35 L12 28 L22 32 L32 20 L42 25 L52 15 L62 18 L62 38 L2 38 Z"
                  fill="#1db954"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-sidebar-bg rounded-lg border border-border-color p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Emails Sent Last Month</p>
              <p className="text-3xl font-bold text-foreground">
                {metrics.emailsSentLastMonth}
              </p>
              <p className="text-blue-500 text-sm mt-1">
                ↑ +18 from previous month
              </p>
            </div>
            <div className="w-16 h-10">
              <svg
                width="64"
                height="40"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 25 L12 30 L22 18 L32 22 L42 12 L52 28 L62 8"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 25 L12 30 L22 18 L32 22 L42 12 L52 28 L62 8 L62 38 L2 38 Z"
                  fill="#3b82f6"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-sidebar-bg rounded-lg border border-border-color p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Clients</p>
              <p className="text-3xl font-bold text-foreground">
                {metrics.activeClients}
              </p>
              <p className="text-purple-500 text-sm mt-1">↑ +5 this month</p>
            </div>
            <div className="w-16 h-10">
              <svg
                width="64"
                height="40"
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 32 L12 28 L22 30 L32 25 L42 20 L52 22 L62 15"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 32 L12 28 L22 30 L32 25 L42 20 L52 22 L62 15 L62 38 L2 38 Z"
                  fill="#8b5cf6"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/emails"
            className="bg-sidebar-bg rounded-lg border border-border-color p-6 hover:border-primary-green transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-green bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m22 7-10 5L2 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-foreground font-medium">Compose Email</p>
              <p className="text-gray-400 text-sm mt-1">Send to clients</p>
            </div>
          </Link>

          <Link
            href="/clients"
            className="bg-sidebar-bg rounded-lg border border-border-color p-6 hover:border-primary-green transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m22 11-3-3m0 0-3 3m3-3v12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-foreground font-medium">Add Client</p>
              <p className="text-gray-400 text-sm mt-1">New contact</p>
            </div>
          </Link>

          <Link
            href="/attachments/create"
            className="bg-sidebar-bg rounded-lg border border-border-color p-6 hover:border-primary-green transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="9"
                    cy="9"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-foreground font-medium">Create Attachment</p>
              <p className="text-gray-400 text-sm mt-1">Marketing materials</p>
            </div>
          </Link>

          <Link
            href="/templates"
            className="bg-sidebar-bg rounded-lg border border-border-color p-6 hover:border-primary-green transition-colors group"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-opacity-30 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
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
                  <line
                    x1="16"
                    y1="13"
                    x2="8"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="8"
                    y2="17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="10,9 9,9 8,9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-foreground font-medium">New Template</p>
              <p className="text-gray-400 text-sm mt-1">Email templates</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Recent Emails
          </h2>
          <div className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden">
            <div className="divide-y divide-border-color">
              {recentEmails.map((email, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-hover-bg transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="w-8 h-8 bg-primary-green bg-opacity-20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-black"
                        >
                          <path
                            d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17V7Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M3 7L12 13L21 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground truncate">
                          {email.recipient}
                        </p>
                        <p className="text-sm text-gray-300 truncate">
                          {email.subject}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {formatDate(email.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Recent Clients
          </h2>
          <div className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden">
            <div className="divide-y divide-border-color">
              {recentClients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-hover-bg transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-300"
                        >
                          <circle
                            cx="12"
                            cy="8"
                            r="5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 21a8 8 0 1 0-16 0"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {client.name}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400">
                      {formatDate(client.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
