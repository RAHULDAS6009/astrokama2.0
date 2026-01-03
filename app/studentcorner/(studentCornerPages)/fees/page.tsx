import React from "react";
import { FEES_DATA } from "../mock";

export default function FeesPage() {
  return (
    <div className="w-full space-y-8">
      {FEES_DATA.map((semesterData, index) => (
        <div
          key={index}
          className="bg-[#f0f0f0] rounded-xl overflow-hidden shadow-lg border border-gray-200"
        >
          {/* Header */}
          <div className="bg-[#4a342a] text-white px-6 py-3 text-lg font-bold">
            {semesterData.semester}
          </div>

          {/* Table Container - Horizontal Scroll for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#5c4033] text-white text-sm uppercase tracking-wider">
                  <th className="px-6 py-3 text-left w-1/4 border-r border-[#6d4c3d]">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left w-1/6 border-r border-[#6d4c3d]">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left w-24 border-r border-[#6d4c3d]">
                    Fees
                  </th>
                  <th className="px-6 py-3 text-left w-24 border-r border-[#6d4c3d]">
                    Late Fine
                  </th>
                  <th className="px-6 py-3 text-left w-24 border-r border-[#6d4c3d]">
                    Total
                  </th>
                  <th className="px-6 py-3 text-center w-32 border-r border-[#6d4c3d]">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center w-32">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {semesterData.payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-900 border-r border-gray-100">
                      {payment.details}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 border-r border-gray-100">
                      {payment.date}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-600 border-r border-gray-100">
                      {payment.fees}
                    </td>
                    <td className="px-6 py-3 text-sm text-red-500 font-medium border-r border-gray-100">
                      {payment.lateFees}
                    </td>
                    <td className="px-6 py-3 text-sm font-bold text-gray-900 border-r border-gray-100">
                      {payment.total}
                    </td>
                    <td className="px-6 py-3 text-center border-r border-gray-100">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          payment.status === "Paid"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-center">
                      <button
                        className={`px-4 py-1.5 rounded text-xs font-bold uppercase transition-transform active:scale-95 ${
                          payment.status === "Paid"
                            ? "bg-[#f2e6d6] text-[#4a342a] border border-[#4a342a] hover:bg-[#e6d0b3]"
                            : "bg-[#4a342a] text-white hover:bg-[#3b2921]"
                        }`}
                      >
                        {payment.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* Footer Row for Total */}
              <tfoot className="bg-gray-100 border-t border-gray-300">
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-3 text-right text-sm font-bold text-gray-700"
                  >
                    Total:
                  </td>
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 border-r border-gray-300">
                    {semesterData.totalAmount}
                  </td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
