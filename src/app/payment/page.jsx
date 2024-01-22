import React from "react";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";

export default function Page() {
  return (
    <div className="flex h-screen pt-20 flex-col items-center justify-center">
      <Card size="large">
        <div className="bg-red-500">
          <span>Buy Quota</span>
        </div>
        <div className="flex justify-evenly items-center gap-8 bg-green-500">
          <div>Kiri</div>
          <div>Kanan</div>
        </div>
        <div className="self-end">
          <PrimaryButton>Status Payment</PrimaryButton>
        </div>
      </Card>
    </div>
  );
}
