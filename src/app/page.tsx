import { columns } from "@/components/root/column";
import { DataTable } from "@/components/root/data-table";
import { items } from "@/lib/types/item";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full md:w-1/4 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex border-b w-full justify-between">
          <div>budget</div>
          <span className="">{formatCurrency(7000)}</span>
        </div>

        <DataTable columns={columns} data={items}></DataTable>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Made with love
      </footer>
    </div>
  );
}
