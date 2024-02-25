import React from "react";
import Card from "../components/Card";

export default function Page() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center pt-6 gap-8">
      <Card size="large">
        <div>
          <span className="text-[#156779] font-semibold">History Payment</span>
          <table
            width="100%"
            className="text-center text-[#156779] font-semibold mt-8"
          >
            <thead style={{ height: "50px" }}>
              <tr>
                <th>Tanggal</th>
                <th>Item</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
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
        </div>
        <span className="text-[#156779] font-semibold self-end">1 2 3 ...</span>
      </Card>
    </div>
  );
}
