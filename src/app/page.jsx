import Card from "./components/Card";
import PrimaryButton from "./components/PrimaryButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen pt-20 pb-8 flex-col items-center justify-between gap-8">
      <Card size="small" className="">
        <span className="text-[#156779] font-semibold">Your e-meterai: 0</span>
        <PrimaryButton>Buy Quota</PrimaryButton>
      </Card>
      <Card size="medium">
        <span className="text-[#156779] font-semibold">History Payment</span>
        <table
          width="100%"
          className="text-center text-[#156779] font-semibold"
        >
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Item</th>
              <th>Jumlah</th>
              <th>Harga</th>
              <th>Status</th>
            </tr>
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
        <Link
          href={"/history-payment"}
          className="text-[#156779] font-semibold self-end hover:text-[#239EBA] active:text-[#1F8FA8]"
        >
          More
        </Link>
      </Card>
      <Card size="medium">
        <span className="text-[#156779] font-semibold">History Stamping</span>
        <table
          width="100%"
          className="text-center text-[#156779] font-semibold"
        >
          <thead>
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
        <Link
          href={"/history-document"}
          className="text-[#156779] font-semibold self-end hover:text-[#239EBA] active:text-[#1F8FA8]"
        >
          More
        </Link>
      </Card>
    </main>
  );
}
