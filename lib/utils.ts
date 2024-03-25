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

export function fakerData() {
  return {
    user_email: faker.internet.email(),
    user_subject: faker.lorem.sentence(),
    message: faker.lorem.paragraph(),
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
