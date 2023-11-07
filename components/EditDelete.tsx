'use client'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import Link from 'next/link';
import Image from 'next/image';
import { deleteCar } from '@/lib/cars.actions';
import { usePathname } from 'next/navigation';
const EditDelete = ({id}: any) => {
  const path = usePathname();
   
    const handleDelete = async () => {
      try {
        const res = await deleteCar(id, path);
      } catch (error) {
        console.log(error);
       
      } 
      }
    
    
  return (
 
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <Image
          src="/assets/icons/delete.svg"
          height={50}
          width={20}
          alt="delete"
          className="hover:scale-105"
        />
      </AlertDialogTrigger>
      <AlertDialogContent  className="!bg-transparent">
        <AlertDialogHeader>
          <AlertDialogTitle className="para-1 !text-white !font-bold">
            Are you <span className="text-prime !font-bold">absolutely sure?</span> 
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently
            delete This Car Listing and remove the data from the
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="text-white !bg-transparent">
          <AlertDialogCancel >Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

   

  )
}

export default EditDelete