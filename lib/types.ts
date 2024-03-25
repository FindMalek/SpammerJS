export type SpamType = {
  serviceId: string;
  templateId: string;
  userId: string;
};

export type FormType = {
  name?: string;
  email?: string;
  subject?: string;
  message: string;
  user_email?: string;
  user_subject?: string;
};
