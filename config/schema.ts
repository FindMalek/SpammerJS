import * as z from 'zod';

export const web3Schema = z.object({
    apiKey: z.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
});

export const emailJsSchema = z.object({
    serviceId: z
        .string()
        .regex(/^service_[a-zA-Z0-9]{7}/, "Invalid Service ID format."),

    templateId: z
        .string()
        .regex(/^template_[a-zA-Z0-9]{7}/, "Invalid Template ID format."),

    userId: z.string().length(17, "The User ID must be 17 characters long."),
});