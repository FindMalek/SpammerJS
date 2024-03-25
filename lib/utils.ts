import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import emailjs from "@emailjs/browser";
import { faker } from "@faker-js/faker";

import { SpamType, FormType } from "@lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function fakerData(spammer: string) {
  if (spammer === "web3-forms") {
    return {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      subject: "You have been spammed by https://spammer-js.vercel.app/",
      message: "You have been spammed by https://spammer-js.vercel.app/",
    };
  }
  return {
    user_email: faker.internet.email(),
    user_subject: "You have been spammed by https://spammer-js.vercel.app/",
    message: "You have been spammed by https://spammer-js.vercel.app/",
  };
}

export function sendEmailJS(values: SpamType, formFake: FormType) {
  return emailjs
    .send(
      values.serviceId,
      values.templateId,
      {
        user_email: formFake.user_email,
        user_subject: formFake.user_subject,
        message: formFake.message,
      },
      values.userId,
    )
    .then(
      (result) => {
        return {
          data: formFake,
          status: result.text,
          error: null,
        };
      },
      (error) => {
        return {
          error: error.text,
          status: null,
          data: formFake,
        };
      },
    );
}

export async function sendWeb3Form(value: String, formFake: FormType) {
  try {
    const request = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apikey: value,
        ...formFake,
      }),
    }).then((res) => res.json());
    console.log(request);
  } catch (error) {
    return {
      error: error,
      status: null,
      data: formFake,
    };
  }
  return {
    data: formFake,
    status: "success",
    error: null,
  };
}
