"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function UserAuthForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isButtonDisabled = !email || isLoading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      // Redirect or display success message
      router.push("/demo");
    } catch (err) {
      router.push("/demo");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Enter your (nicest) email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          placeholder="name@example.com"
          className="p-2"
        />
      </div>

      <Button disabled={isButtonDisabled} type="submit" className="w-full">
        {isLoading
          ? "Checking your humanity..."
          : "Discover Arthur's world! 🚀"}
      </Button>
    </form>
  );
}
