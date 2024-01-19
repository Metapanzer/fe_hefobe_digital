import React from "react";
import Card from "../components/Card";

export default function page() {
  return (
    <div className="flex min-h-auto flex-col items-center justify-center pt-6 gap-8">
      <Card size="large">
        <span className="text-[#156779] font-semibold">History Payment</span>
        <table width="100%">
          <thead className="text-center text-[#156779] font-semibold">
            <th>Tanggal</th>
            <th>Item</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Status</th>
          </thead>
          <tbody className="text-center text-[#156779] font-semibold">
            <tr>
              <td>15/01/2024 19:37:00</td>
              <td>E-Meterai</td>
              <td>1</td>
              <td>13.200</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>15/01/2024 19:37:00</td>
              <td>E-Meterai</td>
              <td>1</td>
              <td>13.200</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>15/01/2024 19:37:00</td>
              <td>E-Meterai</td>
              <td>1</td>
              <td>13.200</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
        <span className="text-[#156779] font-semibold self-end">1 2 3 ...</span>
      </Card>
    </div>
  );
}
