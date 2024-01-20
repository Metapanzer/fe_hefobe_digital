import React from "react";
import Card from "../components/Card";

export default function Page() {
  return (
    <div className="flex h-screen pt-20 flex-col items-center justify-center gap-8">
      <Card size="large">
        <div>
          <span className="text-[#156779] font-semibold">History Stamping</span>
          <table
            width="100%"
            className="text-center text-[#156779] font-semibold mt-8"
          >
            <thead style={{ height: "50px" }}>
              <tr>
                <th>Tanggal upload</th>
                <th>Tanggal stamped</th>
                <th>Nama file</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#156779] font-semibold">
              <tr>
                <td>15/01/2024 19:37:00</td>
                <td>15/01/2024 19:37:00</td>
                <td>Surat Pernyataan</td>
                <td>Success</td>
              </tr>
              <tr>
                <td>15/01/2024 19:37:00</td>
                <td>15/01/2024 19:37:00</td>
                <td>Surat Pernyataan</td>
                <td>Success</td>
              </tr>
              <tr>
                <td>15/01/2024 19:37:00</td>
                <td>15/01/2024 19:37:00</td>
                <td>Surat Pernyataan</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>
        <span className="text-[#156779] font-semibold self-end">1 2 3 ...</span>
      </Card>
    </div>
  );
}
