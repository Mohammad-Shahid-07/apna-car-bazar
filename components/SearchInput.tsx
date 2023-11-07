"use client";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const SearchInput = () => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  if (query) {
    params.set("query", query);
   
  } else {
    params.delete("query");
  }
   router.push(`${pathname}?${params.toString()}`,  { scroll: false });


  return (
    <form className="mt-5  relative" >
      <input
        type="text"
        className="input-search paddings-x w-full"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
     
        placeholder="Search For Your Dream Car..."
      />
      <Image
        src="/assets/icons/search-line.svg"
        height={50}
        width={120}
        className="absolute top-[-34px] left-[-35px]"
        alt="search "
      />
    </form>
  );
};

export default SearchInput;
