"use client";

import { useState } from "react";
import { DateValue, today } from "@internationalized/date";
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

export const metadata = {
  title: "Contact Kodai Journey | Cab Booking in Kodaikanal",
  description:
    "Contact Kodai Journey Tours & Travels to book reliable cab services in Kodaikanal. Call or WhatsApp for instant booking.",
  keywords: [
    "contact Kodai Journey",
    "cab booking Kodaikanal",
    "Kodaikanal taxi contact",
  ],
};


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

  const WHATSAPP_NUMBER = "9952227577";
  const [form, setForm] = useState<BookingFormState>({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: null as DateValue | null,
    vehicle: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    vehicle: "",
  });

  const validateDate = (date: DateValue | null) => {
    if (!date) {
      return "Please select a travel date";
    }

    const dateObj = new Date(date.toString());
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dateObj < today) {
      return "Past dates are not allowed";
    }

    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      pickup: "",
      drop: "",
      date: "",
      vehicle: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!form.pickup.trim()) {
      newErrors.pickup = "Pickup location is required";
    }

    if (!form.drop.trim()) {
      newErrors.drop = "Drop location is required";
    }

    const dateError = validateDate(form.date);
    if (dateError) {
      newErrors.date = dateError;
    }

    if (!form.vehicle) {
      newErrors.vehicle = "Please select a vehicle";
    }

    setErrors(newErrors);

    // return true if no errors
    return Object.values(newErrors).every((e) => e === "");
  };

  const buildWhatsAppMessage = () => {
    return `
  🚕 *New Cab Booking Request*

  👤 Name: ${form.name}
  📞 Phone: ${form.phone}

  📍 Pickup: ${form.pickup}
  📍 Drop: ${form.drop}

  📅 Travel Date: ${form.date?.toString()}
  🚗 Vehicle: ${form.vehicle}

  Please confirm availability.
  `.trim();
  };

  const handleSubmit = () => {
    const isValid = validateForm();

    if (!isValid) return;

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // OPTIONAL: reset form
    setForm({
      name: "",
      phone: "",
      pickup: "",
      drop: "",
      date: null,
      vehicle: "",
    });

    setErrors({
      name: "",
      phone: "",
      pickup: "",
      drop: "",
      date: "",
      vehicle: "",
    });
  };



  return (
    <section id="contact" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Book Your Service
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
                handleSubmit();
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
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                classNames={{
                  input: "text-zinc-900 bg-white px-6 py-2",
                }}
              />

              {/* Phone */}
              <Input
                placeholder="XXXXXXXXXX"
                type="tel"
                isRequired
                value={form.phone}
                isInvalid={!!errors.phone}
                errorMessage={errors.phone}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")   // allow only numbers
                    .slice(0, 10);        // max 10 digits

                  setForm({ ...form, phone: value });
                }}
                classNames={{
                  label: "text-zinc-700 font-medium",
                  input: "text-zinc-900 bg-white px-6 py-2",
                  inputWrapper: "border-zinc-300 hover:border-zinc-400",
                }}
              />


              {/* Pickup */}
              <Input
                placeholder="Pickup Location"
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
                placeholder="Drop Location"
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
                minValue={today("UTC")}
                value={form.date}
                onChange={(date) => {
                  setForm({ ...form, date });

                  setErrors({
                    ...errors,
                    date: validateDate(date),
                  });
                }}
                className="sm:col-span-2 px-4"
                isInvalid={!!errors.date}
                errorMessage={errors.date}
                classNames={{
                  input: "text-zinc-900 bg-white px-4 py-4 flex justify-center items-center",
                  popoverContent: "bg-white text-black p-2 rounded-lg shadow-lg flex flex-col justify-center items-center",
                }}
              />

              {/* Vehicle Type */}
              <Select
                placeholder="Select vehicle"
                isRequired
                isInvalid={!!errors.vehicle}
                errorMessage={errors.vehicle}
                selectedKeys={
                  form.vehicle ? [form.vehicle] : []
                }
                onSelectionChange={(keys) =>
                  setForm({
                    ...form,
                    vehicle: Array.from(keys)[0] as string,
                  })
                }
                className="sm:col-span-2 bg-white"
                classNames={{
                  label: "text-zinc-700 font-medium",
                  value: "text-black",
                }}
              >
                {vehicleOptions.map((option) => (
                  <SelectItem key={option.key} className="bg-white text-black">
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
