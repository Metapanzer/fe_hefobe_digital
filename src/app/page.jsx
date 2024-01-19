import Card from "./components/Card";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <main className="flex min-h-auto flex-col items-center justify-between pt-6 gap-8">
      <Card size="small" className="">
        <span className="text-[#156779] font-semibold">Your e-meterai: 0</span>
        <PrimaryButton>Buy Quota</PrimaryButton>
      </Card>
      <Card size="medium">
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
        <span className="text-[#156779] font-semibold self-end">More</span>
      </Card>
      <Card size="medium">
        <span className="text-[#156779] font-semibold">History Stamping</span>
        <table width="100%">
          <thead className="text-center text-[#156779] font-semibold">
            <th>Tanggal upload</th>
            <th>Tanggal stamped</th>
            <th>Nama file</th>
            <th>Status</th>
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
        <span className="text-[#156779] font-semibold self-end">More</span>
      </Card>
    </main>
  );
}
