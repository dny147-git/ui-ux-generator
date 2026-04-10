"use client";
import { AnimatedGradientTextDemo } from "@/components/animated-gradient-text";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { suggestions } from "@/data/constant";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

import { Loader, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Hero() {
  const [userInput, setUserInput] = useState<string>();
  const [device, setDevice] = useState<string>("website");
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function onCreateProject() {
    try {
      setIsLoading(true);
      if (!user) {
        router.push("/sign-in");
      }
      const projectId = crypto.randomUUID();
      const response = await axios.post("/api/project", {
        device,
        userInput,
        projectId,
      });
      console.log(response);
      // TODO: Navigate to project route
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="p-10 md:px-2 lg:px-48 xl:px-60">
      <AnimatedGradientTextDemo />
      <h2 className="text-5xl font-bold text-center">
        Design High Quality{" "}
        <span className="text-primary">Website and Mobile App Designs</span>
      </h2>
      <p className="text-center text-gray-600 text-lg mt-3">
        Imagine your idea and turn into reality
      </p>
      <div className="flex justify-center items-center mt-5 w-full gap-6">
        <InputGroup className="max-w-xl bg-white z-10 rounded-2xl">
          <InputGroupTextarea
            data-slot="input-group-control"
            className="flex field-sizing-content min-h-30 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-lg"
            placeholder="Enter what design you want to create"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <InputGroupAddon align="block-end">
            <Select
              defaultValue="website"
              onValueChange={(value) => setDevice(value)}
            >
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputGroupButton
              className="ml-auto"
              size="sm"
              variant="default"
              onClick={() => onCreateProject()}
              disabled={isLoading}
            >
              {isLoading ? <Loader className="animate-spin" /> : <Send />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <ul className="flex gap-5 mt-4">
        {suggestions.map((suggestion, index) => {
          return (
            <li
              key={index}
              className="p-2 border rounded-2xl flex flex-col items-center bg-white z-100 cursor-pointer"
              onClick={() => setUserInput(suggestion.description)}
            >
              <h2 className="text-lg">{suggestion.icon}</h2>
              <h2 className="text-center line-clamp-2 text-sm">
                {suggestion.name}
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
