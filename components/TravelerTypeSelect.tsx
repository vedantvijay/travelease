"use client"

import { Check, ChevronsUpDown, Percent } from "lucide-react"
import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const travelerTypes = [
  { value: "normal", label: "Normal Traveler", discount: 0 },
  { value: "student", label: "Student", discount: 10 },
  { value: "armed-forces", label: "Armed Forces", discount: 10 },
  { value: "senior-citizen", label: "Senior Citizen", discount: 5 },
]

interface TravelerTypeSelectProps {
  name?: string
  value?: string
  onChange?: (value: string, discount: number) => void
}

export function TravelerTypeSelect({ name, value, onChange }: TravelerTypeSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || "")

  const handleSelectChange = (newValue: string) => {
    setSelectedValue(newValue)
    const selectedType = travelerTypes.find(type => type.value === newValue)
    if (onChange && selectedType) {
      onChange(newValue, selectedType.discount)
    }
    setOpen(false)
  }

  const selectedType = travelerTypes.find(type => type.value === selectedValue)

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            {selectedValue ? travelerTypes.find((type) => type.value === selectedValue)?.label : "Select traveler type..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search traveler type..." />
            <CommandList>
              <CommandEmpty>No traveler type found.</CommandEmpty>
              <CommandGroup>
                {travelerTypes.map((type) => (
                  <CommandItem
                    key={type.value}
                    onSelect={() => handleSelectChange(type.value)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Check className={cn("mr-2 h-4 w-4", selectedValue === type.value ? "opacity-100" : "opacity-0")} />
                      {type.label}
                    </div>
                    {type.discount > 0 && (
                      <span className="text-sm text-teal-600 flex items-center">
                        <Percent className="h-3 w-3 mr-1" />
                        {type.discount}% off
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selectedType?.discount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-teal-600 flex items-center"
        >
          <Percent className="h-3 w-3 mr-1" />
          {selectedType.discount}% discount applied
        </motion.div>
      )}
    </div>
  )
}

