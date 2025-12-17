"use client";

import { useState } from "react";
import { DateValue } from "@internationalized/date";
import {
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Button,
  DatePicker,
  Form
} from "@heroui/react";

type BookingFormState = {
  name: string;
  phone: string;
  pickup: string;
  drop: string;
  date: DateValue | null;
  vehicle: string;
};


const vehicleOptions = [
  { key: "hatchback", label: "Hatchback" },
  { key: "sedan", label: "Sedan" },
  { key: "suv", label: "SUV" },
  { key: "tempo", label: "Tempo Traveller" },
];

export default function BookingSection() {
  const [form, setForm] = useState<BookingFormState>({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: null,
    vehicle: "",
  });

  return (
    <section id="contact" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Book Your Cab
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Quick and easy booking. Our team will contact you shortly.
          </p>
        </div>

        {/* Booking Form */}
        <Card className="mt-12" radius="lg" shadow="sm">
          <CardBody className="p-8 bg-[#56A845]">
            <Form
              className="grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(form);
              }}
            >
              {/* Full Name */}
              <Input
                placeholder="Full Name"
                isRequired
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                classNames={{
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-black hover:border-zinc-400",
                }}
              />

              {/* Phone */}
              <Input
                placeholder="+91 98765 43210"
                type="tel"
                isRequired
                variant="bordered"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                classNames={{
                  label: "text-zinc-700 font-medium",
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-zinc-300 hover:border-zinc-400",
                }}
              />

              {/* Pickup */}
              <Input
                placeholder="Kodaikanal Bus Stand"
                isRequired
                variant="bordered"
                value={form.pickup}
                onChange={(e) =>
                  setForm({ ...form, pickup: e.target.value })
                }
                classNames={{
                  label: "text-zinc-700 font-medium",
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-zinc-300 hover:border-zinc-400",
                }}
              />

              {/* Drop */}
              <Input
                placeholder="Coimbatore Airport"
                isRequired
                variant="bordered"
                value={form.drop}
                onChange={(e) =>
                  setForm({ ...form, drop: e.target.value })
                }
                classNames={{
                  label: "text-zinc-700 font-medium",
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-zinc-300 hover:border-zinc-400",
                }}
              />

              {/* Travel Date */}
              <DatePicker
                isRequired
                variant="bordered"
                value={form.date}
                onChange={(date) =>
                  setForm({ ...form, date })
                }
                className="sm:col-span-2"
                classNames={{
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-zinc-300 hover:border-zinc-400",
                }}
              />

              {/* Vehicle Type */}
              <Select
                placeholder="Select vehicle"
                isRequired
                selectedKeys={
                  form.vehicle ? [form.vehicle] : []
                }
                onSelectionChange={(keys) =>
                  setForm({
                    ...form,
                    vehicle: Array.from(keys)[0] as string,
                  })
                }
                className="sm:col-span-2"
                classNames={{
                  label: "text-zinc-700 font-medium",
                  trigger: "border-zinc-300",
                  value: "text-black",
                }}
              >
                {vehicleOptions.map((option) => (
                  <SelectItem key={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>

              {/* Submit */}
              <div className="sm:col-span-2 flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-[#33612B] text-white px-8 py-4 hover:bg-[#2b5225]"
                >
                  Submit Booking
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
