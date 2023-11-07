import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="w-full">
        <div className="w-full h-96 rounded-lg bg-dark-secondary">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="w-full h-96 paddings rounded-lg bg-dark-secondary">
          <Skeleton className="h-full w-full" />
        </div>
      </section>

      <section className="flex mt-6 w-full flex-col">
        <Skeleton className="h-10 w-36" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16">
          <div className="w-full sm:w-1/3">
            <Skeleton className="h-96 w-full" />
          </div>
          
         
        </div>
      </section>
    </main>
  );
};

export default loading;
