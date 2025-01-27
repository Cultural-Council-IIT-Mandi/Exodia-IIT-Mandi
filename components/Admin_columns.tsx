"use client";
import { announcement } from "@/models/announcement";

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ConfirmModal } from "./Admin_ConfirmModal";

export const columns: ColumnDef<typeof announcement>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "imageUrl",
    header: "Image URL",
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <ConfirmModal row={row}>
            <Button variant={"ghost"} size={"sm"}>
                <Trash className="h-4 w-4" />
            </Button>
        </ConfirmModal>
      )
    },
  }
]
