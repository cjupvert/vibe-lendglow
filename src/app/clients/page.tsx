"use client";

import { useState } from "react";

export default function Clients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    closeDate: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      closeDate: "",
      address: "",
    });
  };

  const handleSave = () => {
    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      closeDate: "",
      address: "",
    });
  };

  const mockClients = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      birthday: "1985-03-15",
      closeDate: "2024-01-15",
      address: "123 Main St, New York, NY 10001",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@email.com",
      birthday: "1990-07-22",
      closeDate: "2024-02-03",
      address: "456 Oak Ave, Los Angeles, CA 90210",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@email.com",
      birthday: "1982-11-08",
      closeDate: "2024-01-28",
      address: "789 Pine Rd, Chicago, IL 60601",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@email.com",
      birthday: "1988-05-12",
      closeDate: "2024-02-10",
      address: "321 Elm St, Houston, TX 77001",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@email.com",
      birthday: "1975-09-30",
      closeDate: "2024-01-20",
      address: "654 Maple Dr, Phoenix, AZ 85001",
    },
    {
      id: 6,
      firstName: "Lisa",
      lastName: "Anderson",
      email: "lisa.anderson@email.com",
      birthday: "1993-12-05",
      closeDate: "2024-02-15",
      address: "987 Cedar Ln, Philadelphia, PA 19101",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Clients</h1>

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
            Download
          </button>

          <button
            onClick={() => setIsImportModalOpen(true)}
            className="flex items-center px-4 py-2 bg-hover-bg text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
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
                d="M12 18L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 15L12 12L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Import
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
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
            Add
          </button>
        </div>
      </div>

      <div className="bg-sidebar-bg rounded-lg border border-border-color overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-hover-bg">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Birthday
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Close Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {mockClients.map((client) => (
                <tr
                  key={client.id}
                  className="hover:bg-hover-bg transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="7"
                            r="4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {client.firstName} {client.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{client.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">
                      {formatDate(client.birthday)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">
                      {formatDate(client.closeDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300 max-w-xs truncate">
                      {client.address}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-sidebar-bg px-6 py-4 border-t border-border-color">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-300">
              Showing <span className="font-medium text-foreground">1</span> to{" "}
              <span className="font-medium text-foreground">6</span> of{" "}
              <span className="font-medium text-foreground">47</span> results
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-2 text-sm text-gray-400 hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <div className="flex space-x-1">
                <button className="px-3 py-2 text-sm bg-primary-green text-white rounded-md">
                  1
                </button>
                <button className="px-3 py-2 text-sm text-gray-300 hover:text-foreground hover:bg-hover-bg rounded-md transition-colors">
                  2
                </button>
                <button className="px-3 py-2 text-sm text-gray-300 hover:text-foreground hover:bg-hover-bg rounded-md transition-colors">
                  3
                </button>
                <span className="px-3 py-2 text-sm text-gray-400">...</span>
                <button className="px-3 py-2 text-sm text-gray-300 hover:text-foreground hover:bg-hover-bg rounded-md transition-colors">
                  8
                </button>
              </div>
              <button className="px-3 py-2 text-sm text-gray-300 hover:text-foreground transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Client Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-sidebar-bg rounded-lg border border-border-color w-full max-w-md mx-4">
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Add New Client
              </h2>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Birthday
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Close Date
                    </label>
                    <input
                      type="date"
                      name="closeDate"
                      value={formData.closeDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 bg-hover-bg border border-border-color rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="Enter full address"
                  />
                </div>
              </form>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-hover-bg text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Save Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import Clients Modal */}
      {isImportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-sidebar-bg rounded-lg border border-border-color w-full max-w-lg mx-4">
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Import Clients
              </h2>

              <div className="space-y-4">
                <div className="bg-hover-bg rounded-lg p-4 border border-border-color">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Supported File Formats
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 text-primary-green"
                      >
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      Excel (.xlsx)
                    </div>
                    <div className="flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 text-primary-green"
                      >
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      CSV (.csv)
                    </div>
                  </div>
                </div>

                <div className="bg-hover-bg rounded-lg p-4 border border-border-color">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Required Column Headers
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Your file must include the following column headers
                    (case-insensitive):
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      First Name
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      Last Name
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      Email
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      Birthday
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      Close Date
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-2"></div>
                      Address
                    </div>
                  </div>
                </div>

                <div className="border-2 border-dashed border-border-color rounded-lg p-6 text-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto mb-4 text-gray-400"
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
                      d="M12 18L12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15L12 12L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-gray-300 mb-2">
                    Drag and drop your file here, or
                  </p>
                  <button className="text-primary-green hover:text-green-400 font-medium">
                    browse to select a file
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 bg-hover-bg text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Import Clients
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
